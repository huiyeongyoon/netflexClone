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
    z-index: 100000;
    justify-content: space-between;
    height: 68px;
    width: calc(100% - 120px);
    padding: 0 60px;
    background-color: #141414;
    .mainArea {
      display: flex;
      align-items: center;
      height: 68px;
      .lgoBox {
        margin: 5px 20px 0 0;
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
    .userInfoArea {
      position: relative;
      .icon {
        width: 28px;
        height: 28px;
        border-radius: 5px;
      }
      > ul {
        display: flex;
        align-items: center;
        > li {
          list-style: none;
          color: #fff;
          margin: 0 15px 0 0;
          &.hoverAlrat {
            .card {
              display: none;
              position: absolute;
              top: 8px;
              left: -316px;
              padding-top: 52px;
              // background-color: red;
              ul {
                width: 400px;
                min-height: 100px;
                padding: 10px;
                background-color: rgba(0, 0, 0, 0.6);
                font-size: 13px;
              }
              li {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100px;
              }
            }
          }
          &.hoverAlrat:hover {
            .card {
              display: block;
            }
          }
          &.hiverProfileIngo {
            .card {
              display: none;
              position: absolute;
              top: 28px;
              left: -20px;
              padding: 15px 10px;
              padding-top: 30px;
              // background-color: red;
              ul {
                width: 200px;
                padding: 10px;
                background-color: rgba(0, 0, 0, 0.6);
                font-size: 13px;
              }
              li {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                img,
                .mdi {
                  margin-right: 15px;
                }
                span {
                  color: #fff;
                }
              }
              .borderLine {
                border-top: 1px solid hsla(0, 0%, 100%, 0.25);
                padding: 20px 0 0 0;
              }
            }
          }
          &.hiverProfileIngo:hover {
            .card {
              display: block;
            }
          }
          a {
            position: relative;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
</style>

<template lang="pug">
  header
    .mainArea
      .lgoBox
        h1
          a(href="/")
            img(src="@/assets/images/logo.png")
      .categoryInfoArea
        ul
          li
            a(href="javascript:;") 홈
          li
            a(href="javascript:;") 시리즈
          li
            a(href="javascript:;") NEW!요즘 대세 콘텐츠
          li
            a(href="javascript:;") 내가 찜한 콘텐츠
          li
            a(href="javascript:;") 언어별로 찾아보기
    .userInfoArea
      ul
        li
          a(href="javascript:;") #[mdicon(name="magnify" size="28")]
        li
          a(href="javascript:;") 키즈
        li.hoverAlrat
          a(href="javascript:;") #[mdicon(name="bell-outline" size="28")]
          .card
            ul
              li
                a
                  span 최근알림 메시지가 없습니다.
        li.hiverProfileIngo
          a(href="javascript:;") #[img.icon(src="@/assets/images/profile.jpg")]  #[mdicon(name="menu-down" size="24") ]
          .card
            ul
              li
                a(href="javascript:;")
                  img.icon(src="@/assets/images/profile.jpg")
                  span 게스트1
              li
                a(href="javascript:;")
                  img.icon(src="@/assets/images/profile.jpg")
                  span 게스트2
              li
                a(href="javascript:;")
                  mdicon(name="PencilCircleOutline" size="28")
                  span 프로필 관리
              li
                a(href="javascript:;")
                  mdicon(name="FaceMan" size="28")
                  span 프로필 이전
              li
                a(href="javascript:;")
                  mdicon(name="AccountOutline" size="28")
                  span 계정
              li
                a(href="javascript:;")
                  mdicon(name="ChatQuestionOutline" size="28")
                  span 고객센터
              li.borderLine
                a(href="javascript:;")
                  span 넷플릭스에서 로그아웃
</template>
<script>
  export default {
    data() {
      return {}
    },
  }
</script>
