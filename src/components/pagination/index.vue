<template lang="pug">
.paginationBox
  .TalbeItemNumberBox
    span 페이지 항목 수
    el-select(v-model='data.pagination.rowCount')
      el-option(v-for='item in rows' :key='item' :label='item' :value='item')
  .PageNumberBox
    span Total
    em {{ this.data.pagination.totalCount }}
    el-pagination(:page-size='data.pagination.totalCaount' @current-change="currentChange" :pager-count='11' layout='prev, pager, next' :total='data.pagination.totalCount')
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        rows: [10, 20, 50, 100],
      }
    },
    methods: {
      currentChange() {},
    },
  }
</script>

<style lang="scss" scoped>
  .paginationBox {
    padding: 20px 0 30px 0;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .TalbeItemNumberBox {
      float: left;
      > span {
        font-size: 12px;
        color: #909399;
        padding-right: 10px;
      }
      .el-select {
        width: 70px !important;
      }
    }
    .PageNumberBox {
      display: flex;
      align-items: center;
      float: right;
      > span {
        font-size: 12px;
        color: #909399;
        padding-right: 10px;
      }
      em {
        font-style: normal;
        font-size: 13px;
        color: #303133;
      }
    }
  }
</style>
