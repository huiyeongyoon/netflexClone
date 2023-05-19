<template lang="pug">
section.app-main
  router-view(:key="key")
</template>

<script>
  export default {
    computed: {
      key() {
        return this.$route.path
      },
    },
  }
</script>
<<<<<<< HEAD
=======
<style lang="scss" scoped>
  .app-main {
    margin: 65px auto 0;
    max-width: 1680px;
  }
</style>
>>>>>>> fa0b73bc7be1d990081570065eef96f8eadbd8d5
