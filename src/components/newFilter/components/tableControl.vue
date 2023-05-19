<template lang="pug">
.control
  .filter
    add-filter(:data="data")
  .setting
    .iconContainer
      span.iconBackground #[mdicon(name="lock" size="24")]
      span.txt 개인정보열람
    .iconContainer
      span.iconBackground #[mdicon(name="download" size="24")]
      span.txt 다운로드
    .iconContainer(@click="visibleSetting = true")
      span.iconBackground #[mdicon(name="tune" size="24")]
      span.txt 설정 
  setting(:data="data" :visible="visibleSetting" @close="visibleSetting = false" @changeField="changeField")
</template>

<script>
  import Setting from "./setting"
  import AddFilter from "./addFilter"
  export default {
    components: {
      Setting,
      AddFilter,
    },
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        visibleSetting: false,
      }
    },
    methods: {
      changeField(field) {
        this.$emit("changeField", field)
        this.visibleSetting = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .setting {
      display: flex;
      height: 96px;
      position: relative;
      .iconContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #606266;
        padding: 0 15px;
        height: 79px;
        .iconBackground {
          padding: 6px;
        }
        .iconBackground:hover {
          background-color: #e1e2e4;
          border-radius: 30px;
        }
        .txt {
          font-family: Noto Sans KR;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: -0.36px;
          color: #606266;
        }
      }
    }
  }
</style>
