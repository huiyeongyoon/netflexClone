<template lang="pug">
section.bigChartCard
  .topContainer
    .left
      h2 Visit &nbsp;
      h2.orange Trend &nbsp;
      h2.grey 방문추이
    .right
      mdicon(name="dots-vertical" size="20")
  .middleContainer
    LineChart(:chartData="chartData" 
    :style="style")
  .bottomContainer
</template>
<script>
  import LineChart from "@/components/charts/line.vue"

  export default {
    name: "App",
    components: {
      LineChart,
    },
    computed: {
      style() {
        return {
          position: "relative",
          height: `${254}px`,
        }
      },
    },
    data() {
      return {
        chartData: {
          labels: ["2022.05.25", "", "", "", "2022.06.25", "", "", "", "", "2022.07.25"],
          datasets: [
            {
              label: "Fleet Management",
              backgroundColor: "#e35b0a",
              data: this.$func.generateRandomNumber(),
              parsing: {
                yAxisKey: "net",
                xAxisKey: "cogs",
              },
              borderColor: "#e35b0a",
              borderWidth: 1,
            },
            {
              label: "Degital Management",
              backgroundColor: "#f87979",
              data: this.$func.generateRandomNumber(),
              parsing: {
                yAxisKey: "net",
                xAxisKey: "cogs",
              },
              borderColor: "#f87979",
              borderWidth: 1,
            },
            {
              label: "Engine Management",
              backgroundColor: "#ffaa00",
              data: this.$func.generateRandomNumber(),
              parsing: {
                yAxisKey: "net",
                xAxisKey: "cogs",
              },
              borderColor: "#ffaa00",
              borderWidth: 1,
            },
            {
              label: "My HDI",
              backgroundColor: "#007acc",
              data: this.$func.generateRandomNumber(),
              parsing: {
                yAxisKey: "net",
                xAxisKey: "cogs",
              },
              borderColor: "#007acc",
              borderWidth: 1,
            },
          ],
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  .topContainer {
    margin: 0 0 22px 0;
  }
</style>
