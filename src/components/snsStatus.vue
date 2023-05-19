<template lang="pug">
section.smallChartCard
  .titleBox2
    .firstline
      h2 
        span.orange sns 
        span status 
        span.grey sns연동현황
    .secondline 본 계정현황은 날짜검색의 영향을 받지 않습니다.본 계정현황은 날짜검색의 영향을 받지 않습니다.
    .icon
      mdicon(name="dots-vertical" size="20")
  .rowBox
    .text
      span SNS
      span Total
    .number
      span 2,307
  .columnBox
    .textRowBox
      .box
        span 707
      .box
        span 203
      .box
        span 700
    .bottom
      .rowBox
        img(src="@/assets/images/symbol_google_ss.png")
        span Google
      .rowBox
        img(src="@/assets/images/symbol_apple_ss.png")
        span Apple
      .rowBox
        img(src="@/assets/images/symbol_facebook_ss.png")
        span Facebook
</template>

<script>
  export default {
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .smallChartCard {
    padding: 26px 30px !important;
  }
  .titleBox2 {
    position: relative;
    width: 100%;
    padding-right: 40px;
    margin: 0 0 52px 0;
    align-items: center;
    border: 1px solid #000;
    box-sizing: border-box;
    // flex-direction: column;
    // width: 100%;
    .firstline {
      display: flex;
      flex-direction: row;

      h2 {
        font-family: Poppins;
        font-weight: 600;
        font-size: 26px;
        margin: 0;
        // margin: 26px 0 0 0;
        line-height: 36px;
        .orange {
          color: #e35b0a;
        }
        .grey {
          font-family: Noto Sans KR;
          font-weight: 500;
          font-size: 22px;
          letter-spacing: -1.32px;
          color: #909399;
        }
      }
    }
    .secondline {
      margin: 17px 0 0 0;

      font-family: Noto Sans KR;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: -0.45px;
      color: #909399;
    }
    .icon {
      position: absolute;
      top: 30px;
      right: 10px;
    }
  }
  .rowBox {
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      display: flex;
      flex-direction: column;
      margin: 0 16px 0 0;
      span {
        font-size: 18px;
        font-weight: 500;
        text-align: right;
        color: #303133;
      }
    }
    .number {
      img {
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 52px;
        font-weight: 600;
        color: #303133;
      }
    }
  }
  .columnBox {
    display: flex;
    flex-direction: column;
    .textRowBox {
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin: 52px 0 0 0;
      .box {
        span {
          font-size: 36px;
          font-weight: 600;
          color: #303133;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      .rowBox {
        padding: 15px 0 0 0;
        border-top: 1px solid #c0c4cc;
        img {
          margin: 0 8px 0 0;
        }
      }
    }
  }
</style>
