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
