<template lang="pug">
.mainContentPlace
  .locationBox
    mdicon.icon(name="home" size="17")
    a 사용자관리
  .tableBox
    .leftContainer
      .smallCard
        h3 QUICK FILTER
        el-checkbox-group.check-box(v-model="form.userStateTpcd") <!-- checkbox 사용시 배열을 요구하기떄문에 빈배열을 만들어줘야한다-->
          el-checkbox(v-for="(item, index) of code.USERSTATETPCD" :key="index" :label="item.cmmnCode") {{ item.cmmnCodeName }}
    .rightContainer
      .bigCard
        .tableContainer
          table-grid(:data="tableDataSetting")
            el-table-column(slot="before-table-row" label="No" type="index" width="120" align="center")
</template>
<script>
  import TableGrid from "@/components/newFilter"
  import "@/assets/css/filter.scss"
  import { mapGetters } from "vuex"

  export default {
    components: {
      TableGrid,
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
    data() {
      return {
        form: {
          userStateTpcd: [],
        },
        tableDataSetting: {
          list: [
            {
              id: "abc123123123",
              name: "김철수",
              companyName: "삼성",
              userStateTpcd: "00",
              userStateTpcd2: "04",
              lastLogin: "2023-03-29",
              sortation: "Y",
            },
            {
              id: "abc123123123",
              name: "김철수",
              companyName: "삼성",
              userStateTpcd: "01",
              userStateTpcd2: "05",
              lastLogin: "2023-03-29",
              sortation: "Y",
            },
            {
              id: "abc123123123",
              name: "김철수",
              companyName: "삼성",
              userStateTpcd: "02",
              userStateTpcd2: "06",
              lastLogin: "2023-05-29",
              sortation: "Y",
            },
            {
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
            { prop: "id", width: "120", name: "ID", type: "input", align: "center", id: true, filter: true },
            { prop: "name", width: "", name: "이름", type: "input", align: "center", id: true, filter: true },
            {
              prop: "companyName",
              name: "회사이름",
              width: "200",
              type: "input",
              align: "center",
              id: false,
              filter: true,
            },
            { prop: "userStateTpcd", width: "120", name: "상태", code: "USERSTATETPCD", type: "checkBox", align: "center", id: true, filter: true },
            {
              prop: "userStateTpcd2",
              width: "120",
              name: "상태2",
              code: "USERSTATETPCD2",
              type: "checkBox",
              align: "center",
              id: true,
              filter: true,
            },
            { prop: "dateRange", width: "120", name: "마지막 로그인", type: "dateRange", align: "center", id: false, filter: true },
            {
              prop: "sortation",
              width: "240",
              name: "마케팅정보수신 동의여부",
              code: "YNTPCD",
              type: "radio",
              align: "center",
              id: false,
              filter: true,
            },
          ],
          default: [
            { prop: "id", width: "120", name: "ID", type: "input", align: "center", id: true, filter: true },
            { prop: "name", width: "", name: "이름", type: "input", align: "center", id: true, filter: true },
            {
              prop: "companyName",
              name: "회사이름",
              width: "200",
              type: "input",
              align: "center",
              id: false,
              filter: true,
            },
            { prop: "userStateTpcd", width: "120", name: "상태", code: "USERSTATETPCD", type: "checkBox", align: "center", id: true, filter: true },
            {
              prop: "userStateTpcd2",
              width: "120",
              name: "상태2",
              code: "USERSTATETPCD2",
              type: "checkBox",
              align: "center",
              id: true,
              filter: true,
            },
            { prop: "dateRange", width: "120", name: "마지막 로그인", type: "dateRange", align: "center", id: false, filter: true },
            {
              prop: "sortation",
              width: "240",
              name: "마케팅정보수신 동의여부",
              code: "YNTPCD",
              type: "radio",
              align: "center",
              id: false,
              filter: true,
            },
          ],
          pagination: {
            page: 1,
            rowCount: 10,
            totalCount: 30,
          },
        },
      }
    },
    methods: {
      fetchList() {
        console.log("백엔드로 데이터 주고 받아서 테이블 데이터 갱신")
      },
      // indexMethod(index) {
      //   return this.tableData.pagination.totalCount - index - this.tableData.pagination.rowCount * (this.tableData.pagination.page - 1)
      // },
    },
  }
</script>
