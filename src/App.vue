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
