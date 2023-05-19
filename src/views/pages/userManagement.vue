<template lang="pug">
.wrap 
  .restContainer
    .top
      mdicon.icon(name="home" size="17")
      a 사용자관리
    .abd
      .leftContainer
        .smallCard
          h3 QUICK FILTER
          el-checkbox-group(v-model='form.userStateTpcd')
            el-checkbox(v-for="(userState, index) of code.USERSTATETPCD" :key="index" :label="userState")
      .rightContainer
        FilterComponent(:visible="visibleFilter" :tableDataSetting="tableDataSetting.columnOptions" @close="visibleFilter = false" @save="changeFilterInfo") 
        .bigCard
          .optionContainer
            .left
              AddFilterComponent(:form="form" :tableDataSetting="tableDataSetting")
            .right
              .iconContainer
                span.iconBackground #[mdicon(name="lock" size="24")]
                span.txt 개인정보열람
              .iconContainer
                span.iconBackground #[mdicon(name="download" size="24")]
                span.txt 다운로드
              .iconContainer(@click="visibleFilter = true")
                span.iconBackground #[mdicon(name="tune" size="24")]
                span.txt 설정 
          .tableContainer
            el-table(:data='tableDataSetting.data' style='width: 100%')
            el-table-column(v-if="column.id === true" v-for="column in tableDataSetting.columnOptions" :prop="column.prop" :width="column.width" :align="column.align" :label="column.name" )
          .paginationContainer
            .left
              span.pagingTxt 페이지 항목 수
              el-select(v-model='pageValue' placeholder='Select')
                el-option(v-for='pageOption in pagesOptions' :key='pageOption.pageValue' :label='pageOption.label' :value='pageOption.pageValue')
            .right
              span.pagingTxt Total #[span.totalNumber {{ tableDataSetting.data.length }}]
              el-pagination(ref="paging" background layout="prev, pager, next" 
                            :current-page="page"
                            :total="tableDataSetting.data.length" 
                            :page-size="pageValue"
                            @current-change="handleCurrentChange")
</template>
<script>
  import FilterComponent from "@/components/filter"
  import AddFilterComponent from "@/components/filter/addFilter"
  import "@/assets/css/filter.scss"
  import { mapGetters } from "vuex"

  export default {
    components: {
      FilterComponent,
      AddFilterComponent,
    },
    computed: {
      ...mapGetters(["code"]),
    },
    watch: {
      "$route.query": {
        immediate: true,
        async handler(newVal, oldVal) {
          if (newVal !== oldVal) {
            newVal.userStateTpcd !== undefined ? (this.form.userStateTpcd = newVal.userStateTpcd) : (this.form.userStateTpcd = [])
            this.fetchList()
          }
        },
      },
      form: {
        deep: true,
        handler(newVal) {
          const query = {
            ...this.$route.query,
            userStateTpcd: newVal.userStateTpcd,
          }
          if (!_.isEqual(this.$route.query, query)) {
            this.$router.push({ query }).catch(() => {})
          }
        },
      },
    },
    mounted() {
      if (!_.isEmpty(this.$route.query)) {
        if (this.$route.query !== undefined) {
          this.form = _.cloneDeep(this.$route.query)
          this.option = _.cloneDeep(this.$route.query)
        }
      }
    },
    data() {
      return {
        visibleFilter: false,
        tableDataSetting: {
          data: [
            {
              no: 1,
              id: "abc123123123",
              name: "김철수",
              companyName: "삼성",
              userStateTpcd: "00",
              userStateTpcd2: "04",
              lastLogin: "2023-03-29",
              sortation: "Y",
            },
            {
              no: 4211,
              id: "abc123123123",
              name: "김철수",
              companyName: "삼성",
              userStateTpcd: "01",
              userStateTpcd2: "05",
              lastLogin: "2023-03-29",
              sortation: "Y",
            },
            {
              no: 1123,
              id: "abc123123123",
              name: "김철수",
              companyName: "삼성",
              userStateTpcd: "02",
              userStateTpcd2: "06",
              lastLogin: "2023-05-29",
              sortation: "Y",
            },
            {
              no: 221,
              id: "abc123123123",
              name: "김철수",
              companyName: "삼성",
              userStateTpcd: "03",
              userStateTpcd2: "07",
              lastLogin: "2023-03-29",
              sortation: "Y",
            },
          ],
          columnOptions: [
            { prop: "no", width: "160", name: "No", type: "input", align: "center", id: true, filter: false },
            { prop: "id", width: "240", name: "ID", type: "input", align: "center", id: true, filter: false },
            { prop: "name", width: "150", name: "이름", type: "input", align: "center", id: true, filter: false },
            {
              prop: "companyName",
              name: "회사이름",
              width: "200",
              type: "input",
              align: "center",
              id: false,
              filter: false,
              // filterFunction: val => {
              //   return `<span class="box-status-primary">${val}</span>`
              // },
            },
            { prop: "userStateTpcd", width: "150", name: "상태", code: "USERSTATETPCD", type: "checkBox", align: "center", id: true, filter: false },
            {
              prop: "userStateTpcd2",
              width: "150",
              name: "상태2",
              code: "USERSTATETPCD2",
              type: "checkBox",
              align: "center",
              id: true,
              filter: false,
            },
            { prop: "sortation", width: "240", name: "마케팅정보수신 동의여부", type: "radio", align: "center", id: false, filter: false },
            { prop: "lastLogin", width: "140", name: "마지막 로그인", type: "date", align: "center", id: false, filter: false },
          ],
        },
        prop: "",
        inputType: "",

        pagesOptions: [
          {
            pageValue: 10,
            label: 10,
          },
          {
            pageValue: 20,
            label: 20,
          },
          {
            pageValue: 50,
            label: 50,
          },
          {
            pageValue: 100,
            label: 100,
          },
        ],
        page: 1,
        pageValue: 10,

        form: {
          userStateTpcd: [],
        },
        option: {},
      }
    },
    methods: {
      fetchList() {
        // 테이블 셋팅하는 로직
        this.tableDataSetting.data.slice(this.pageValue * this.page - this.pageValue, this.pageValue * this.page)
      },
      changeFilterInfo(values) {
        const arr = this.tableDataSetting.columnOptions.map(item => {
          return item
        })
        arr.filter(item => {
          const a = values.some(item2 => {
            if (item.name === item2) {
              return (item.id = true)
            }
          })
          if (!a) {
            item.id = false
          }
        })
        this.visibleFilter = false
      },
      handleCurrentChange(value) {
        this.page = value
      },
    },
  }
</script>
<style lang="scss">
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    button {
      background-color: #fff !important;
    }
  }
</style>
