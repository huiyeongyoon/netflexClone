<template lang="pug">
.mainContentPlace
  .locationBox
    mdicon.homeIcon(name="home-variant-outline" size="20")
    mdicon.icon(name="chevron-right" size="15")
    a 대쉬보드
  .selectOptionBox
    .selectOption
      el-date-picker.editDatePicker(v-model='value' 
        type='daterange'
        range-separator="~" 
        :start-placeholder="startDate"
        :end-placeholder="endDate"
        :clearable="false"
      )
      el-select.editselectBox(v-model='value2' placeholder='고객')
        el-option(v-for='item in options' :key='item.value' :label='item.label' :value='item.value' :disabled='item.disabled')
    .selectChart
      span.orange #[mdicon.icon(name="widgets-outline" size="25")]
  .chartBox
    Dragable(v-model="orders" @end="move")
      .bottomContainer(v-for="order in orders")
        VisitTrend(v-if="order.id === 1")
        VisitShare(v-if="order.id === 2")
        SmsStatusVue(v-if="order.id === 3")
        Session(v-if="order.id === 4")
        AccountStatus(v-if="order.id === 5")
        SnsStatus(v-if="order.id === 6")
        ApiTraffic(v-if="order.id === 7")
</template>

<script>
  import VisitTrend from "@/components/visitTrend"
  import VisitShare from "@/components/visitShare"
  import SmsStatusVue from "@/components/smsStatus"
  import Session from "@/components/session"
  import AccountStatus from "@/components/accountStatus"
  import SnsStatus from "@/components/snsStatus"
  import ApiTraffic from "@/components/apiTraffic"
  import Dragable from "vuedraggable"
  export default {
    components: {
      VisitTrend,
      VisitShare,
      SmsStatusVue,
      Session,
      AccountStatus,
      SnsStatus,
      ApiTraffic,
      Dragable,
    },
    computed: {
      startDate() {
        let today = new Date()

        today.setDate(today.getDate() - 30)

        let year = today.getFullYear()
        let month = ("0" + (today.getMonth() + 1)).slice(-2)
        let day = ("0" + today.getDate()).slice(-2)

        let dateString = year + "." + month + "." + day

        return dateString
      },
      endDate() {
        let today = new Date()

        let year = today.getFullYear()
        let month = ("0" + (today.getMonth() + 1)).slice(-2)
        let day = ("0" + today.getDate()).slice(-2)

        let dateString = year + "." + month + "." + day

        return dateString
      },
    },
    data() {
      return {
        value: null,
        value2: null,
        options: [
          {
            value: "고객",
            label: "고객",
          },
          {
            value: "내부사용자",
            label: "내부사용자",
          },
          {
            value: "딜러",
            label: "딜러",
          },
          {
            value: "고객",
            label: "고객",
          },
        ],
        orders: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }],
      }
    },
    mounted() {
      if (localStorage.getItem("orders")) {
        this.orders = JSON.parse(localStorage.getItem("orders"))
      }
    },
    methods: {
      move() {
        localStorage.setItem("orders", JSON.stringify(this.orders))
      },
    },
  }
</script>
<style lang="scss" scoped>
  .selectOptionBox {
    justify-content: space-between;
    display: flex;
    align-items: flex-end;
    height: 60px;
    margin: 0 0 10px 0;
    .editDatePicker {
      margin: 0 10px 0 0;
    }
    .orange {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 60px;
      background-color: #e35b0a;
      border-radius: 100%;
      .icon {
        position: absolute;
        top: 17.5px;
        left: 17.5px;
        color: #fff;
      }
    }
  }
</style>
