<template lang="pug">
.localNav
  ul
    li(@click="selectMenuList(index,menu)" v-for="(menu, index) in Menus")
      .box
        .depth1
          mdicon.icon(:name='menu.iconName' size="20")
          a {{ menu.MenuList }}
          mdicon.chevron(v-if="menu.icon === 1" name="chevron-right" size="15")
        .depth2
          a(v-for="item in UserMenuList" v-if="menu.active === true && index === 1" @click="movePage(item)" )  {{ item.MenuList }}
          a(v-for="item in ManageMenuList" v-if="menu.active === true && index === 2" @click="movePage(item)" )  {{ item.ManageList }}
          a(v-for="item in SystemMenulist" v-if="menu.active === true && index === 4" @click="movePage(item)" )  {{ item.systemList }}
</template>

<script>
  export default {
    data() {
      return {
        Menus: [
          { iconName: "home-variant-outline", MenuList: "DASHBOARD", path: "dashboard", icon: 0, active: false },
          { iconName: "account-cog", MenuList: "사용자/장비 관리", icon: 1, active: false },
          { iconName: "account-cog", MenuList: "운영환경관리", icon: 1, active: false },
          { iconName: "account-cog", MenuList: "APPLICATION", icon: 0, active: false },
          { iconName: "account-cog", MenuList: "시스템관리", icon: 1, active: false },
        ],
        UserMenuList: [{ MenuList: "사용자관리", path: "newUser" }, { MenuList: "장비관리" }, { MenuList: "개인정보열람이력" }],
        ManageMenuList: [
          { ManageList: "로그인정책관리" },
          { ManageList: "약관관리" },
          { ManageList: "발송메시지관리" },
          { ManageList: "다국어관리" },
        ],
        SystemMenulist: [
          { systemList: "관리자" },
          { systemList: "메뉴권한관리" },
          { systemList: "위젯권한관리" },
          { systemList: "공통코드관리" },
          { systemList: "SMS사용보고서" },
          { systemList: "메시지관리" },
        ],
      }
    },
    methods: {
      selectMenuList(index, menu) {
        if (index === 0) {
          this.movePage(menu)
        } else if (index === 1) {
          this.Menus[index].active = !this.Menus[index].active
        } else if (index === 2) {
          this.Menus[index].active = !this.Menus[index].active
        } else if (index === 4) {
          this.Menus[index].active = !this.Menus[index].active
        }
      },
      movePage(route) {
        this.$router.push(route.path).catch(() => {})
      },
    },
  }
</script>

<style lang="scss">
  .localNav {
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 100%;
    min-height: calc(100vh - 65px);
    background-color: #252627;
    ul {
      padding: 0;
      li {
        display: flex;
        .box {
          width: 100%;
          .depth1 {
            display: flex;
            align-items: center;
            .icon {
              padding: 0 0 0 20px;
              height: 20px;
              margin: 0 15px 5px 0;
              color: #fff;
            }
            .chevron {
              float: right;
              color: #fff;
            }
            a {
              display: flex;
              position: relative;
              align-items: center;
              height: 55px;
              width: 150px;
              letter-spacing: -0.45px;
              color: #fff;
              font-size: 14px;
              line-height: 1.1;
            }
          }
          .depth2 {
            a {
              display: flex;
              position: relative;
              align-items: center;
              padding: 0 0 0 35px;
              height: 55px;
              letter-spacing: -0.45px;
              color: #fff;
              font-size: 14px;
              line-height: 1.1;
            }
            a:hover {
              background-color: #606266;
            }
          }
        }
      }

      .depth1:hover {
        background-color: #000;
      }
    }
    ul:first-child {
      margin: 20px 0 0 0;
    }
  }
</style>
