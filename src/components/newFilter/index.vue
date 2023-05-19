<template lang="pug">
.table-grid-container
  table-control(:data="data" @changeField="changeField" @excelDownLoad="$emit('excelDownLoad')")
      template(slot="setting-button")
        slot(name="setting-button")
  .table
    el-table.default-table(:data="data.list")
      slot(name="before-table-row")
      el-table-column(
        v-for="field of data.columnOptions"
        v-if="field.id === true"
        :prop="field.prop"
        :type="field.type === undefined ? 'string' : field.type"
        :label="field.name === undefined ? '' : field.name"
        :width="field.width"
        :align="field.align"
      )
    pagination(:data="data")
</template>

<script>
  import VRuntimeTemplate from "v-runtime-template"
  import TableControl from "./components/tableControl"
  import Pagination from "@/components/pagination"
  import { mapGetters } from "vuex"

  export default {
    components: {
      VRuntimeTemplate,
      Pagination,
      TableControl,
    },
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      ...mapGetters(["code"]),
    },
    mounted() {
      this.data.list.forEach((item, index) => {
        item.userStateTpcd = this.code.USERSTATETPCD[index].cmmnCodeName
        item.userStateTpcd2 = this.code.USERSTATETPCD2[index].cmmnCodeName
      })
    },
    methods: {
      changeField(feild) {
        this.$emit("changeField", feild)
      },
    },
  }
</script>

<style></style>
