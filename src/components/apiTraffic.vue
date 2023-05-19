<template lang="pug">
section.smallChartCard
  .titleBox
    .text
      h2.orange API traffic &nbsp;
      h2 status &nbsp;
      h2.grey API 트래픽현황
    .icon
      mdicon(name="dots-vertical" size="20")
  .contentsBox
    .box.rowLine
      .left
        img(src="@/assets/images/doosn_apps_1_dash.png")
      .right
        .rightBox
          span.number 2,337
          .line
          span.text Fleet Management
    .box.rowLine
      .left
        img(src="@/assets/images/doosn_apps_2_dash.png")
      .right
        .rightBox
          span.number 3,096
          .line
          span.text Digital Platform
</template>

<script>
  export default {
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .topContainer {
    margin: 0 0 71px 0;
  }
  .contentsBox {
    display: flex;
    flex-wrap: wrap;
    .rowLine {
      margin: 40px 0;
    }
    .box {
      display: flex;
      .left {
        margin: 0 20px 0 0;
      }
      .right {
        display: flex;
        flex-direction: column;
        .rightBox {
          width: 120px;
          height: 90px;
          .number {
            font-size: 36px;
            font-weight: 600;
            color: #303133;
          }
          .line {
            margin: 2px 0 5px 0;
            height: 1px;
            background-color: #c0c4cc;
          }
          .text {
            font-size: 16px;
            font-weight: normal;
            line-height: 1.35;
            color: #303133;
          }
        }
      }
    }
  }
</style>
