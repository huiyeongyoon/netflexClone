<template lang="pug">
section.smallChartCard
  .titleBox
    .text
      h2.orange SMS &nbsp;
      h2 Status &nbsp;
      h2.grey SMS발송현황
    .icon
      mdicon(name="dots-vertical" size="20")
  .rowBox
    .box
      span.number 32
      span 국내 SMS
    .box
      span.number 890
      span 국제 SMS
    .box
      span.number 977
      span 합계 SMS
  .columnBox
    .row(style="textAlign:right")
      span 단위 (원)
    .row
      span + 국내 메시지 전송실패 &nbsp;
      span.red 7
    .row
      span + 국제 메시지 전송실패 &nbsp;
      span.red 30
    .row
      span + 합계 비용 &nbsp;
      span.red 30
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .rowBox {
    display: flex;
    align-items: center;
    height: 230px;
    .box {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      width: 100%;
      height: 75px;
      span {
        font-family: Poppins;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        color: #303133;
      }
      & .number {
        border-bottom: 1px solid #c0c4cc;
        font-size: 53px;
        margin: 0 0 10px 0;
      }
    }
  }
  .columnBox {
    .row {
      height: 34px;
      padding: 0 10px;
      span {
        font-family: Noto Sans KR;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: -0.51px;
        color: #72747a;
      }
      .red {
        font-family: Poppins;
        font-size: 26px;
        letter-spacing: -0.78px;
        color: #ff5252;
      }
    }
  }
</style>
