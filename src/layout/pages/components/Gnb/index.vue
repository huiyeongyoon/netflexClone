<<<<<<< HEAD
<style lang="scss" scoped>
  a {
    font-weight: 500;
    font-size: 14px;
  }
  a:link {
    color: #fff;
    text-decoration: none;
  }
  a:visited {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #ddd;
    text-decoration: none;
  }
  header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    width: calc(100% - 120px);
    padding: 0 60px;
    background-color: #141414;
    .headerMainArea {
      display: flex;
      align-items: center;
      height: 68px;
      .logoBox {
        margin: 5px 25px 0 0;
        img {
          width: 98.5px;
          height: 35px;
        }
      }
      .categoryInfoArea {
        ul {
          display: flex;
          align-items: center;
          li {
            list-style: none;
            margin: 0 0 0 20px;
            color: #fff;
          }
        }
      }
    }
    .userInfoInfoArea {
      ul {
        display: flex;
        align-items: center;
        li {
          list-style: none;
          color: #fff;
          margin: 0 15px 0 0;
        }
=======
<template lang="pug">
.globalNav
  .logoBox
    img(src="@/assets/images/logo-eng-b@3x.png") 
  .optionBox
    span KR
    mdicon(name="help-circle-outline" size="30")
    mdicon(name="account-circle" size="30")
</template>

<script></script>
<style lang="scss" scoped>
  .globalNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 65px;
    width: 100%;
    z-index: 10000;
    .logoBox {
      display: flex;
      align-items: center;
      height: inherit;
      padding: 0 0 0 30px;
      img {
        width: 130px;
        height: 37px;
      }
    }
    .optionBox {
      span {
        margin: 0 7px;
        font-size: 20px;
        font-weight: bold;
        color: #909399;
>>>>>>> fa0b73bc7be1d990081570065eef96f8eadbd8d5
      }
    }
  }
</style>
<<<<<<< HEAD

<template lang="pug">
  header
    .headerMainArea
      .logoBox
        h1
          a(href="/")
            img(src="@/assets/images/logo.png")
      .categoryInfoArea
        ul
          li(v-for="category in categories") 
            a(href="javascript:;") {{ category }}
    .userInfoInfoArea
      ul
        li 
          a(href="javascript:;") #[mdicon(name="magnify" size="24")]
        li 
          a(href="javascript:;") 키즈
        li 
          a(href="javascript:;") #[mdicon(name="bell-outline" size="24")]
        li 
          a(href="javascript:;") 프로필사진  #[mdicon(name="menu-down" size="24") ]
</template>
<script>
  export default {
    data() {
      return {
        categories: ["홈", "시리즈", "NEW!요즘 대세 콘텐츠", "내가 찜한 콘텐츠", "언어별로 찾아보기"],
      }
    },
  }
</script>
=======
>>>>>>> fa0b73bc7be1d990081570065eef96f8eadbd8d5
