<template lang="pug">
#app
  router-view(:key="key")
</template>

<script>
  export default {
    name: "App",
    computed: {
      key() {
        return this.$route.path
      },
    },
  }
</script>

<style lang="scss" scoped>
  #app {
    min-width: 1280px;
  }
</style>
