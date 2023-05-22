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
      position: relative;
      .icon {
        width: 28px;
        height: 28px;
        border-radius: 5px;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          list-style: none;
          color: #fff;
          margin: 0 15px 0 0;
          a {
            position: relative;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 62px;
    left: -50px;
    width: 210px;
    padding: 15px 10px;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
    .box {
      opacity: 1;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .icon {
        margin-right: 10px;
      }
      .mdi {
        margin-right: 10px;
      }
      span {
        color: #fff;
      }
    }
    .box:nth-last-child(2) {
      margin: 0;
      padding-bottom: 10px;
      border-bottom: 1px solid #fff;
    }
    .box:last-child {
      padding-top: 10px;
      margin-left: 38px;
      margin-bottom: 10px;
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
        li(@mouseover='profileDetail = true' @mouseleave='profileDetail = false')
          a(href="javascript:;") #[img.icon(src="@/assets/images/profile.jpg")]  #[mdicon(name="menu-down" size="24") ]
      .card(v-show='profileDetail')
        .box
          img.icon(src="@/assets/images/profile.jpg")
          span 게스트1
        .box
          img.icon(src="@/assets/images/profile.jpg")
          span 게스트2
        .box
          mdicon(name="PencilCircleOutline" size="28")
          span 프로필 관리
        .box
          mdicon(name="FaceMan" size="28")
          span 프로필 이전
        .box
          mdicon(name="AccountOutline" size="28")
          span 계정
        .box
          mdicon(name="ChatQuestionOutline" size="28")
          span 고객센터
        .box
          span 넷플릭스에서 로그아웃
</template>
<script>
  export default {
    data() {
      return {
        categories: ["홈", "시리즈", "NEW!요즘 대세 콘텐츠", "내가 찜한 콘텐츠", "언어별로 찾아보기"],
        profileDetail: false,
      }
    },
  }
</script>
