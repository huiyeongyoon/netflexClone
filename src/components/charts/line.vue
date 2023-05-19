<template lang="pug">
  LineChartGenerator(
    :chart-options="chartOptions" 
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
  import { Line as LineChartGenerator } from "vue-chartjs/legacy"

  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement } from "chart.js"

  ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement)

  export default {
    name: "LineChart",
    components: {
      LineChartGenerator,
    },
    props: {
      chartId: {
        type: String,
        default: "line-chart",
      },
      datasetIdKey: {
        type: String,
        default: "label",
      },
      width: {
        type: Number,
        default: 0,
      },
      height: {
        type: Number,
        default: 0,
      },
      cssClasses: {
        default: "",
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
      chartData: {
        type: Object,
        default: () => [],
      },
      chartOption: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      }
    },
  }
</script>
