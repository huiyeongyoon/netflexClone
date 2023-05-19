<template lang="pug">
Doughnut(:chart-options="chartOptions"
  :chart-data="chartData"
  :chart-id="chartId"
  :dataset-id-key="datasetIdKey"
  :plugins="plugins"
  :css-classes="cssClasses"
  :styles="styles"
  :width="width"
  :height="height")
</template>

<script>
  import { Doughnut } from "vue-chartjs/legacy"

  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js"

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  export default {
    name: "DoughnutChart",
    components: {
      Doughnut,
    },
    props: {
      chartData: {
        type: Object,
        default: () => {},
      },
      chartId: {
        type: String,
      },
      datasetIdKey: {
        type: String,
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      cssClasses: {
        type: String,
      },
      styles: {
        type: Object,
        default: () => {},
      },
      plugins: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          rotation: -90,
          circumference: 180,
        },
      }
    },
  }
</script>
