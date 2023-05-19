<template lang="pug">
.filterContainer
  el-button.addedFilter(v-for="item in options")
    .content() {{ _.find(dataField.columnOptions, { prop: item }).name }} : {{ option[item] }}
  .addfilter() 
    .content(@click="openFirstFilter") #[mdicon(name="plus" size="24")] ADD FILTER
    .addfilterButtonContainer
      ul.firstFilter(v-if="depth1" v-click-outside="closeFilter")
        li(v-for="columnOption in dataField.columnOptions" @click="openSecondFilter(columnOption)") #[a {{ columnOption.name }}]
      ul.secondFilter(v-if="depth2" v-click-outside="closeFilter")
        li(v-if="column.type === 'input'")
          .filterTopContainer
            span {{ column.name }}
            span() #[mdicon(name='close')]
          .filterInputMiddleContainer
            el-input(placeholder='Keyword' v-model="form.input")
          .filterBottomContainer
            span(@click="createFilter") Save 
        li(v-if="column.type === 'checkBox'")
          .filterTopContainer
            span {{ column.name }} 
            span() #[mdicon(name='close')]
          .filterCheckMiddleContainer
            el-checkbox-group(v-model='form[filterData.prop]')
              el-checkbox(v-for="(userState, index) of code[filterData.code]" :key="index" :label="userState")
          .filterBottomContainer
            span(@click="createFilter") Save 
        li(v-if="column.type === 'radio'")
          .filterTopContainer
            span {{ column.name }}
            span() #[mdicon(name='close')]
          .filterRadioMiddleContainer
            el-radio-group(v-model="form.radio")
              el-radio(label='1') Y
              el-radio(label='2') N
          .filterBottomContainer
            span(@click="createFilter") Save 
        //- li(v-if="column.type === 'date'")
        //-   .filterTopContainer
        //-     span {{ column.name }}
        //-     span() #[mdicon(name='close')]
        //-   .filterDateMiddleContainer
        //-     el-date-picker.editFilterDatePicker(
        //-       type='daterange'
        //-       range-separator="~" 
        //-       :start-placeholder="startDate"
        //-       :end-placeholder="endDate"
        //-       :clearable="false"
        //-     )
        //-   .filterBottomContainer
        //-     span(@click="createFilter") Save 
</template>

<script>
  import vClickOutside from "v-click-outside"
  import { mapGetters } from "vuex"

  export default {
    components: {
      vClickOutside,
    },
    computed: {
      ...mapGetters(["code"]),
      startDate() {
        let today = new Date()

        today.setDate(today.getDate() - 30)

        let year = today.getFullYear()
        let month = ("0" + (today.getMonth() + 1)).slice(-2)
        let day = ("0" + today.getDate()).slice(-2)

        let dateString = year + "-" + month + "-" + day

        return dateString
      },
      endDate() {
        let today = new Date()

        let year = today.getFullYear()
        let month = ("0" + (today.getMonth() + 1)).slice(-2)
        let day = ("0" + today.getDate()).slice(-2)

        let dateString = year + "-" + month + "-" + day

        return dateString
      },
      temp() {
        return this.dataField.default.filter(item => item.filter)
      },
      options() {
        return _.keys(this.option).filter(item => {
          return _.map(this.dataField.columnOptions, "prop").includes(item)
        })
      },
    },
    watch: {
      "$route.query": {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal !== oldVal) {
            _.keys(newVal).filter(item => {
              if (_.isArray(newVal[item]) && newVal[item].length < 1) {
                delete newVal[item]
              }
            })
            this.form = _.cloneDeep(this.$route.query)
            this.option = _.cloneDeep(this.$route.query)
            this.optionNormalize()
          }
        },
      },
    },
    props: {
      tableDataSetting: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        depth1: false,
        depth2: false,
        dataField: {},
        form: {}, //1. form 객체에다가 바인딩 한다
        option: {},
        filterData: {},
      }
    },
    mounted() {
      this.dataField = _.cloneDeep(this.tableDataSetting)
      if (this.$route.query !== undefined) {
        this.form = _.cloneDeep(this.$route.query)
        this.option = _.cloneDeep(this.$route.query)
        this.optionNormalize()
      }
    },
    methods: {
      // . 메서드를 새로 만들어서 요청이 올때만 리엑티비티 되게한다
      createFilter() {
        // this.optionNormalize()
        this.option = _.clone(this.form) // 3. 새로운 객체를 만들어서 클라이언트가 요청시 화면이 변환되게한다
        this.pushQuery()
        // this.depthClose()
      },
      pushQuery() {
        this.option.page = 1
        this.$router.push({ query: this.option }).catch(() => {})
      },
      optionNormalize() {
        for (const item of _.keys(this.option)) {
          const check = _.find(this.dataField.columnOptions, { prop: item })
          if (check !== undefined && check.type === "checkBox") {
            if (!Array.isArray(this.option[item])) {
              this.option[item] = [this.option[item]]
            }
          }
        }
        // Object.keys(this.options).forEach(item => {
        //   if (item === "userStateTpcd") {
        //     this.dataField.columnOptions.forEach(item => {
        //       if (item.type === "checkBox") {
        //         item.filter = true
        //         this.options = _.merge({ name: item.name }, this.options, this.form)
        //       }
        //       if (item.filter) {
        //         this.options = _.merge({ name: item.name }, this.form)
        //       }
        //     })
        //   }
        // })
        // if (!_.isEqual(this.$route.query, this.options)) {
        //   this.$router.push({ query: this.options }).catch(() => {})
        // }
      },
      openFirstFilter() {
        this.depth1 = true
      },
      // 2번째 depth 클릭시 form데이터를 수정한다
      openSecondFilter(param) {
        if (param.type === "checkBox" && this.form[param.prop] === undefined) {
          this.form[param.prop] = []
          this.form = _.cloneDeep(this.form)
        }
        this.filterData = param
        this.column = param
        this.depth1 = false
        this.depth2 = true
      },
      closeFilter() {
        this.depth1 = false
        this.depth2 = false
      },
    },
  }
</script>
<style lang="scss">
  .el-select {
    width: 60px;
    margin: 0 0 0 10px;
    .el-input__inner {
      padding-right: 0;
    }
    .el-input__suffix {
      right: 0;
    }
  }
</style>
<style lang="scss" scoped>
  .filterContainer {
    display: flex;
    .content {
      display: flex;
      align-items: center;
    }
    .addedFilter {
      height: 46px;
      font-family: Noto Sans KR;
      font-size: 17px;
      font-weight: 500;
      border-radius: 30px;
      border: solid 1px #e35b0a;
      padding: 0 14px 0 20px;
      .specialCharacter {
        // max-width: 105px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
      .icon {
        margin-left: 5px;
      }
    }
    .addfilter {
      display: flex;
      align-content: center;
      height: 46px;
      font-family: Noto Sans KR;
      font-size: 15px;
      font-weight: 500;
      border-radius: 30px;
      border: 1px dashed #e35b0a;
      padding: 0 28px 0 20px;
      color: #303133;
      position: relative;
      z-index: 100;
    }
    .addfilterButtonContainer {
      position: absolute;
      left: 0;
      top: 50px;
      background-color: #fff;
      min-width: 200px;
      .firstFilter {
        padding: 0;
        margin: 0;
        border: solid 1px #dcdfe6;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: solid 1px #dcdfe6;
          list-style: none;
          height: 40px;
          a,
          span {
            padding: 0 18px;
            font-family: Noto Sans KR;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: -0.45px;
            color: #72747a;
          }
        }
        .mdicon {
          background-color: #303133;
        }
        .liHeader {
          background-color: #dcdfe6;
        }
      }
      .secondFilter {
        padding: 0;
        margin: 0;
        border-radius: 4px;
        box-shadow: 0 3px 9px 0 rgba(48, 49, 51, 0.05);
        border: solid 1px #dcdfe6;
        list-style: none;
        .filterTopContainer {
          text-indent: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f5f7fb;
          height: 47px;
          span {
            font-family: "Noto Sans KR";
            font-size: 17px;
            font-weight: 500;
            color: #303133;
          }
          .mdi {
            padding: 0 10px;
            color: #909399;
          }
        }
        .filterInputMiddleContainer {
          padding: 9.2px;
          border-top: solid 1px #dcdfe6;
          border-bottom: solid 1px #dcdfe6;
          .el-input__inner,
          .el-input--medium {
            height: 36px !important;
          }
          .el-input__inner::placeholder {
            width: 62px;
            height: 21px;
            font-family: Poppins;
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2.73;
            letter-spacing: -0.45px;
            text-align: left;
            color: #303133;
          }
        }
        .filterCheckMiddleContainer {
          padding: 0;
          border-top: solid 1px #dcdfe6;
          border-bottom: solid 1px #dcdfe6;
          .el-checkbox-group {
            display: flex;
            flex-direction: column;
            .el-checkbox {
              display: flex;
              align-items: center;
              margin: 0;
              height: 40px;
              padding: 0 15px;
              border-bottom: 1px solid #e4e7ed;
              &:last-child {
                border-bottom: 0;
              }
            }
          }
        }
        .filterRadioMiddleContainer {
          display: flex;
          flex-direction: column;
          .el-radio {
            display: flex;
            align-items: center;
            height: 40px;
            padding: 0 15px;
            margin: 0;
            border-top: solid 1px #dcdfe6;
            border-bottom: solid 1px #dcdfe6;
          }
        }
        .filterBottomContainer {
          display: flex;
          justify-content: flex-end;
          align-items: end;
          height: 52px;
          span {
            font-size: 15px;
            font-weight: 500;
            color: #e35b0a;
            margin: 0 15px 11px 0;
          }
        }
      }
    }
  }
</style>
