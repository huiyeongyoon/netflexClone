<template lang="pug">
 el-dialog(:visible="visible" title='원하는 컬럼과 순서를 설정하세요' width='30%' @close="$emit('close', false)")
    button.filterResetButton(@click="defaultCategoryList") #[mdicon(name="history" size="16") ] 초기값 복원
    el-checkbox.Header(v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange") 컬럼명
    el-checkbox-group(v-model='checked' @change="selectedCategory")
      Dragable
        el-checkbox(v-for='filterName in tableDataSetting' :key='filterName.name' :label='filterName.name') {{ filterName.name }}
    template(#footer='')
      span.dialog-footer
        span.saveButton(@click="$emit('save', checked)") Save 
        span.closeButton(@click="$emit('close')") Close 
</template>
<script>
  import Dragable from "vuedraggable"

  export default {
    components: {
      Dragable,
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      tableDataSetting: {
        type: Array,
        default: () => {},
      },
    },
    data() {
      return {
        checkAll: [],
        isIndeterminate: true,
        checked: [],
        category: this.tableDataSetting,
      }
    },
    mounted() {
      this.tableDataSetting.forEach(item => {
        if (item.id === true) {
          this.checked.push(item.name)
        }
      })
    },
    methods: {
      defaultCategoryList() {
        this.tableDataSetting.forEach(item => {
          if (item.id === true) {
            this.checked.push(item.name)
          }
        })
      },
      handleCheckAllChange(value) {
        const name = this.category.map(item => {
          return item.name
        })
        this.checked = value ? name : []
        this.isIndeterminate = false
      },
      selectedCategory(value) {
        const checkedCount = value.length
        this.checkAll = checkedCount === this.category.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.category.length
      },
    },
  }
</script>

<style lang="scss">
  .el-dialog {
    min-width: 450px;
    max-height: 710px;
    border-radius: 20px;
    background-color: #f5f7fb;
    .el-dialog__title {
      font-family: Noto Sans KR;
      font-size: 23px;
      font-weight: 500;
      letter-spacing: -1.15px;
      color: #303133;
    }
    .el-dialog__header,
    .el-dialog__body,
    .el-dialog__footer {
      margin: 0 30px;
    }
    .el-dialog__header {
      padding: 20px 0;
      .el-dialog__close {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        margin-right: 5px;
      }
      .el-dialog__close:before {
        color: #909399;
      }
    }
    .el-dialog__body {
      display: flex;
      flex-direction: column;
      padding: 30px 30px 43px 30px;
      border-radius: 10px;
      background-color: #fff;
      .filterResetButton {
        width: 127px;
        height: 44px;
        border: solid 2px #909399;
        font-family: Noto Sans KR;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.45px;
        color: #909399;
        border-radius: 5px;
        background-color: #fff;
      }

      .Header {
        display: flex;
        align-items: center;
        margin: 20px 0 0 0;
        padding: 15px 20px;
        background-color: #e3e6ee;
        .el-checkbox__inner {
          display: flex;
          align-items: center;
          border-radius: 4px;
          background-color: #fff;
        }
        span.is-checked > span.el-checkbox__inner {
          background-color: #303133 !important;
          border-radius: 4px;
        }
        span.el-checkbox__inner::before {
          top: 8px;
        }
        .el-checkbox__input {
          height: 20px;
        }
        .el-checkbox__label {
          display: block;
          width: 100%;
          height: 20px;
          padding-left: 0;
          text-align: center;
        }
      }
      .el-checkbox-group {
        display: flex;
        flex-direction: column;
        max-height: 378px;
        overflow: auto;
        .el-checkbox {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          height: 51.5px;
          white-space: nowrap;
          border-bottom: solid 1px var(--silver-30);
          margin: 0;
        }
        .el-checkbox:hover {
          background-color: #f5f7fb;
        }
        .el-checkbox__input {
          .el-checkbox__inner {
            margin: 0 40px 0 20px;
          }
        }
        .el-checkbox__label {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0;
          &::after {
            content: "";
            position: absolute;
            top: calc(50% - 5px);
            right: 20px;
            width: 18px;
            height: 10px;
            background: no-repeat url("../../assets/images/icn_reorder.svg");
          }
        }
      }
      .el-checkbox__label {
        font-family: Noto Sans KR;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.45px;
        color: #303133;
      }
    }
    .el-dialog__footer {
      padding: 17px 0 20px 0;
      .saveButton {
        width: 59px;
        height: 29px;
        margin: 0 40px 0 0;
        font-size: 21px;
        font-weight: 500;
        line-height: 2.24;
        color: #e35b0a;
      }
      .closeButton {
        width: 59px;
        height: 29px;
        font-size: 21px;
        font-weight: 500;
        line-height: 2.24;
        color: #909399;
      }
    }
  }
</style>
