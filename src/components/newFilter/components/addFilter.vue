<template lang="pug">
.filter-container
  .option
    a.addedFilter(v-for="(item, index) in options" @click="select(_.find(depth1, { prop: item }), 'filterActive', index)")
      strong {{ _.find(depth1, { prop: item}).name }}
      .info(v-if="_.find(depth1, { prop: item }).type === 'input'")
        span {{ option[item] }}
      .info(v-if="_.find(depth1, { prop: item }).type === 'radio'")
        span {{ option[item] }}
      .info(v-if="_.find(depth1, { prop: item }).type === 'checkBox'") 
        span(v-for="val of option[item]") {{ val | comCodeName(code[_.find(depth1, { prop: item }).code]) }}
      //- .info(v-if="_.find(depth1, { prop: item }).type ===' dateRange'")
      //-   span {{ option[item][0] }} ~ {{ option[item][1] }}
      .remove
        a(href="javascript:;" @click.stop="remove(item)") #[mdicon(name="close-circle")]
          
      ul.depth2(v-if="filterActive && filterActiveNum === index" v-click-outside="depthClose")
        li.keyword(v-if="_.find(depth1, { prop: item }).type === 'input'")
          el-input(v-model="form[depth2.prop]" placeHolder="Keyword" style="width: 180px;" @keyup.enter.native="submit")
        li.radio(v-if="_.find(depth1, { prop: item }).type === 'radio'")
          el-radio-group(v-model="form[depth2.prop]")
            el-radio(v-for="(item, index) of code[depth2.code]" :key="index" :label="code.YNTPCD[index]")
        li.checkbox(v-if="_.find(depth1, { prop: item }).type === 'checkBox'")
          el-checkbox-group(v-model="form[depth2.prop]")
            el-checkbox(v-for="(item, index) of code[depth2.code]" :key="index" :label="item.cmmnCode") {{ item.cmmnCodeName }}
        li.btn
          a(@click.stop="submit") Save
  .filter
    a(href="javascript:;" @click="depth1Active = true") #[mdicon(name="plus")] #[strong ADD FILTER] 
    ul.depth1(v-if="depth1Active" v-click-outside="depthClose")
      li.delbox
        a.del(@click="removeAll") 모두지우기 #[mdicon(name="close-circle" size="15")]
      li(v-for="item of depth1" @click="select(item, 'depth2Active')")
        a {{ item.name }}
    ul.depth2(v-if="depth2Active" v-click-outside="depthClose")
      li.tit
        strong {{ depth2.name }}
        a(href="javascript:;" @click="depth2Active = false") #[mdicon(name="window-close" size="17")]
      li.keyword(v-if="depth2.type === 'input'")
        el-input(v-model="form[depth2.prop]" placeHolder="Keyword" @keyup.enter.native="submit")
      li.radio(v-if="depth2.type === 'radio'")
        el-radio-group(v-model="form[depth2.prop]")
          el-radio(v-for="(item, index) of code[depth2.code]" :key="item" :label="code.YNTPCD[index]")
      li.checkbox(v-if="depth2.type === 'checkBox'" )
        el-checkbox-group(v-model="form[depth2.prop]")
          el-checkbox(v-for="(item, index) of code[depth2.code]" :key="index" :label="item.cmmnCode") {{ item.cmmnCodeName }}
      //- li.dateRange(v-if="depth2.type === 'dateRange'")
      //-   el-date-picker(
      //-     v-model="dateRange"
      //-     type="daterange"
      //-     range-separator="~"
      //-     :clearable="false"
      //-   )
      li.btn
        a(@click="submit") Save
</template>
bleDataSett11ing"
<script>
  import vClickOutside from "v-click-outside"
  import { mapGetters } from "vuex"

  export default {
    directives: {
      clickOutside: vClickOutside.directive,
    },
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      ...mapGetters(["code"]),
      depth1() {
        return this.dataField.columnOptions.filter(item => item.filter)
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
          }
          this.form = _.cloneDeep(newVal)
          this.option = _.cloneDeep(newVal)
          this.optionNormalize()
        },
      },
      // dateRange(newVal) {
      //   if (newVal !== null) {
      //     this.form[this.depth2.prop] = [this.$moment(newVal[0]).format("YYYY-MM-DD"), this.$moment(newVal[1]).format("YYYY-MM-DD")]
      //     this.dateRangeProp = this.depth2.prop
      //   }
      // },
    },
    data() {
      return {
        form: {},
        dataField: {},
        option: {},
        depth2: {},
        depth1Active: false,
        depth2Active: false,

        filterActive: false,
        filterActiveNum: -1,

        dateRange: null,
      }
    },
    mounted() {
      this.dataField = _.cloneDeep(this.data)
      this.optionNormalize()
    },
    methods: {
      optionNormalize() {
        for (const item of _.keys(this.option)) {
          const check = _.find(this.dataField.columnOptions, { prop: item })
          if (check !== undefined && check.type === "checkBox") {
            if (!Array.isArray(this.option[item])) {
              this.option[item] = [this.option[item]]
            }
          }
        }
      },
      select(item, visible, num) {
        console.log(item, visible, num)
        // let temp = Object.keys(this.$route.query)

        // temp.forEach(item2 => {
        //   if (item2 !== item.prop) {
        //   }
        // })

        // console.log(this.form)
        if (item.type === "checkBox" && this.form[item.prop] === undefined) {
          this.form[item.prop] = []
          this.form = _.cloneDeep(this.form)
        }
        this.depth2 = item
        this.depth1Active = false
        this[visible] = true
        this.filterActiveNum = num !== undefined ? num : -1
      },
      depthClose() {
        for (const item of _.keys(this.form)) {
          if (_.isArray(this.form[item]) && this.form[item].length < 1) {
            delete this.form[item]
          }
        }
        this.depth1Active = false
        this.depth2Active = false
        this.filterActive = false
        this.filterActiveNum = -1
      },
      submit() {
        this.option = _.clone(this.form)
        this.pushQuery()
        this.depthClose()
      },
      remove(item) {
        delete this.form[item]
        this.option = _.clone(this.form)
        this.pushQuery()
      },
      removeAll() {
        this.option = {}
        this.pushQuery()
        this.depthClose()
      },
      pushQuery() {
        this.$router.push({ query: this.option }).catch(() => {})
      },
    },
  }
</script>

<style lang="scss" scoped>
  .filter-container {
    display: flex;
    .option {
      display: flex;
      button {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
      }
      .content {
        display: flex;
        align-items: center;
      }
      .addedFilter {
        display: flex;
        align-items: center;
        position: relative;
        height: 46px;
        font-family: Noto Sans KR;
        font-size: 17px;
        font-weight: 500;
        border-radius: 30px;
        border: solid 1px #e35b0a;
        padding: 0 14px 0 20px;
        margin: 0 0 0 10px;
        strong {
          &::after {
            content: " : ";
          }
        }
        span {
          &::after {
            content: ", ";
          }
          &:last-child::after {
            content: "";
          }
        }
        .info,
        .remove {
          display: inline;
          margin: 0 10px 0 0;
        }
        .mdi {
          position: absolute;
          right: 5px;
          top: 11px;
          color: #c0c4cc;
        }
      }
    }
    a {
      text-decoration: none;
      font-family: Poppins;
      font-size: 15px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.53;
      color: #303133;
    }
    .filter {
      display: flex;
      align-items: center;
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
      margin: 0 0 0 10px;
    }
    .depth2,
    .depth1 {
      position: absolute;
      left: -1px;
      top: 40px;
      background-color: #fff;
      min-width: 200px;
      padding: 0;
      border: 1px solid #dcdfe6;
      z-index: 100;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px #dcdfe6;
        list-style: none;
        width: 100%;
        height: 40px;
      }
      .del {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #dcdfe6;
      }
      strong {
        padding: 0 18px;
      }

      a {
        padding: 0 18px;
        font-family: Noto Sans KR;
      }
      & span {
        color: #72747a;
      }
      .tit {
        padding: 0;
        margin: 0;
        border-radius: 4px;
        box-shadow: 0 3px 9px 0 rgba(48, 49, 51, 0.05);
        list-style: none;
        background-color: #f5f7fb;
      }
      .keyword {
        padding: 10px;
        width: 180px;
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
      .radio {
        height: 100%;
        .el-radio-group {
          width: 100%;
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
      }
      .checkbox {
        height: 100%;
        .el-checkbox-group {
          display: flex;
          flex-direction: column;
          width: 100%;
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
      .dateRange {
        height: 100%;
        padding: 10px;
        .el-date-editor--daterange {
          width: 260px;
        }
      }
      .btn {
        a {
          width: 100%;
          text-align: right;
          color: #e35b0a;
        }
      }
    }
  }
</style>
