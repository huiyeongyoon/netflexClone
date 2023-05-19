<template lang="pug">
section.bigChartCard
  .topContainer
    .left
      .firstLine
        h2 Account &nbsp;
        h2.orange Status &nbsp;
        h2.grey 계정현황
      .secondLine
        span 본 계정현황은 날짜검색의 영향을 받지 않습니다.
    .right
      mdicon(name="dots-vertical" size="20")
  .middleContainer
    .box
      .top
        .left
          span 2,337
        .right
          span.text Last 7day
          span.number 77
      .bottom
        span 사용자
    .box
      .top
        .left
          span 35
        .right
          span.text Last 7day
          span.number 7
      .bottom
        span 대기사용자
    .box
      .top
        .left
          span 27
        .right
          span.text Last 7day
          span.number 3
      .bottom
        span Lock 사용자
    .box
      .top
        .left
          span 7
        .right
          span.text Last 7day
          span.number 0
      .bottom
        span 휴면사용자
  .bottomContainer
</template>
<script>
  export default {
    name: "App",
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .topContainer {
    margin: 0 0 108px 0;
    align-items: center;
    .left {
      flex-direction: column;
      .firstLine {
        display: flex;
        flex-direction: row;
      }
      .secondLine {
        margin: 17px 0 0 0;
        span {
          font-family: Noto Sans KR;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.45px;
          color: #909399;
        }
      }
    }
  }
  .middleContainer {
    display: flex;
    justify-content: space-between;
    margin: 0 82px;
    .box {
      flex-direction: column;
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 3px 0;
        .left {
          margin: 0 13px 0 0;
          span {
            font-size: 53px;
            font-weight: 600;
            color: #303133;
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          .text {
            font-size: 15px;
            color: #72747a;
          }
          .number {
            font-size: 22px;
            font-weight: 500;
            color: #72747a;
          }
        }
        border-bottom: 1px solid #c0c4cc;
      }
      .bottom {
        text-align: center;
        margin: 10px 0 0 0;
      }
    }
  }
</style>
