<template lang="pug">
section.smallChartCard
  .titleBox
    .text
      h2 Visit &nbsp;
      h2.orange share &nbsp;
      h2.grey 방문점유율
    .icon
      mdicon(name="dots-vertical" size="20")
  .middleContainer
    doughnut-component(
      :chartData="chartData"
      :width="width"
      :height="height")
  .contentsBox
    .row
      .box
        span.square 
        span.mark 
        span Fleet Management &nbsp;
        span.number 27
        span.special %
      .box
        span.square 
        span.mark 
        span Degital Flatform &nbsp;
        span.number 23
        span.special %
</template>

<script>
  import DoughnutComponent from "@/components/charts/doughnut"
  export default {
    components: {
      DoughnutComponent,
    },
    data() {
      return {
        chartData: {
          datasets: [
            {
              backgroundColor: ["#e35b0a", "#ffaa00", "#00cf53", "#007acc"],
              data: [2500, 4885, 6000, 4210],
              borderWidth: 0,
            },
          ],
        },
        width: 430,
        height: 217,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .middleContainer {
    display: flex;
    justify-content: center;
    margin: 24px 0 32px 0;
  }
  .contentsBox {
    display: inline-block;
    .row {
      display: flex;
      align-items: center;
      .box {
        position: relative;
        width: 240px;
        height: 36px;
        .square {
          position: absolute;
          top: 16px;
          left: 3px;
          width: 6px;
          height: 6px;
          background-color: red;
        }
        .mark {
          background-color: red;
          display: inline-block;
          width: 12px;
          height: 2px;
          margin: 0 5px 4px 0;
        }
        span {
          font-size: 15px;
          color: #303133;
          font-family: Poppins;
        }
        .number {
          font-size: 26px;
          font-weight: 600;
          color: #303133;
        }
        .special {
          font-size: 18px;
        }
      }
    }
  }
</style>
