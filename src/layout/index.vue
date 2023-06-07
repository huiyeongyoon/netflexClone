<style scoped lang="scss">
  .container {
    overflow: hidden;
  }
</style>
<template lang="pug">
.container 
  Gnb
  AppMain
  Footer
</template>

<script>
  import Gnb from "@/layout/pages/components/Gnb"
  import AppMain from "@/layout/pages/components/AppMain"
  import Footer from "@/layout/pages/components/Footer"

  export default {
    components: {
      Gnb,
      AppMain,
      Footer,
    },
  }
</script>
