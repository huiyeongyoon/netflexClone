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
      }
    }
  }
</style>

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
