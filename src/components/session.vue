<template lang="pug">
section.bigChartCard
  .topContainer
    .left
      h2 Sessions &nbsp;
      h2.orange by Country &nbsp;
      h2.grey 국가별 가입자
    .right
      mdicon(name="dots-vertical" size="20")
  .middleContainer
    .left
      img(src="@/assets/images/global_map@3x.png")
    .right
      .top
        h3 + 단위(명)
      .rest
        .row
          span.text korea
          span.number 4,520
        .row
          span.text USA
          span.number 3,387
        .row
          span.text China
          span.number 2,708
        .row
          span.text Chile
          span.number 2,004
        .row
          span.text Japan
          span.number 4,087
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
    margin: 0 0 3px 0;
  }
  .middleContainer {
    display: flex;
    .top {
      text-align: center;
    }
    .left {
      margin: 0 80px 0 0;
      img {
        margin: 45px 0 0 0;
        width: 640px;
        height: 319px;
      }
    }
    .right {
      width: 249px;
      .top {
        margin: 0 0 20px 0;
        h3 {
          margin: 0;
          font-family: Noto Sans KR;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.18;
          letter-spacing: -0.51px;
          color: #303133;
        }
      }
      .rest {
        width: 237px;
        margin: 0 0 0 12px;
        .row {
          height: 43px;
          width: 100%;
          margin: 0 0 18px 0;
          .text {
            display: inline-block;
            font-size: 15px;
            color: #303133;
            width: 43px;
            margin: 0 50px 0 0;
          }
          .number {
            font-size: 30px;
            font-weight: 600;
            color: #303133;
          }
        }
      }
    }
  }
</style>
