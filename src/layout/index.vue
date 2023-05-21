<template lang="pug">
.container 
  Gnb
  AppMain
</template>

<script>
  import Gnb from "@/layout/pages/components/Gnb"
  import AppMain from "@/layout/pages/components/AppMain"

  export default {
    components: {
      Gnb,
      AppMain,
    },
  }
</script>
