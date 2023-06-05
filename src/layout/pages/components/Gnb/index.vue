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
    z-index: 100;
    height: 68px;
    width: calc(100% - 80px);
    padding: 15px 2.5rem;
    &:after {
      clear: both;
      content: "";
      display: block;
    }
    .mainArea {
      width: 100%;
      height: 68px;
      color: #e5e5e5;
      &:after {
        clear: both;
        content: "";
        display: block;
      }
      .gnbBox {
        margin: 3px 23px 0px 15px;
        float: left;
        &:after {
          clear: both;
          content: "";
          display: block;
        }
        h1 {
          float: left;
        }
        .logoImage {
          width: 99.5px;
        }
        ul {
          float: left;
          margin-left: 35px;
          &:after {
            clear: both;
            content: "";
            display: block;
          }
          li {
            float: left;
            list-style: none;
            padding: 5px 10px;
          }
        }
      }
      .utilBox {
        float: right;
        position: relative;
        > ul {
          > li {
            display: inline-block;
            vertical-align: middle;
            list-style: none;
            color: #fff;
            padding: 2px 10px 0 10px;
            &.hoverAlrat {
              .card {
                display: none;
                position: absolute;
                top: 10px;
                left: -272px;
                padding: 35px 10px;
                .alartMenuDown {
                  position: absolute;
                  top: 17px;
                  right: 13px;
                }
                ul {
                  border-top: 2px solid #fff;
                  width: 400px;
                  min-height: 100px;
                  background-color: rgba(0, 0, 0, 0.6);
                  text-align: center;
                }
                li {
                  display: inline-block;
                  p {
                    padding: 20px;
                  }
                }
              }
            }
            &.hoverAlrat:hover {
              .card {
                display: block;
              }
            }
            &.hoverProfileInfo {
              .icon {
                width: 32px;
                height: 32px;
                border-radius: 4px;
              }
              .mdi {
                margin-left: 3px;
                svg {
                  vertical-align: top;
                }
              }
              .card {
                display: none;
                position: absolute;
                top: 20px;
                left: -27px;
                padding: 15px 10px;
                padding-top: 30px;
                .profileMenuDown {
                  position: absolute;
                  top: 10px;
                  right: 30px;
                }
                ul {
                  width: 200px;
                  padding: 10px;
                  background-color: rgba(0, 0, 0, 0.6);
                  font-size: 13px;
                  li {
                    position: relative;
                    margin-bottom: 10px;
                    a {
                      img {
                        margin-right: 15px;
                      }
                      .mdi {
                        position: relative;
                        bottom: 5px;
                        margin-right: 15px;
                      }
                      .imgTxt {
                        position: relative;
                        bottom: 8px;
                        color: #fff;
                      }
                      .mdiTxt {
                        position: relative;
                        top: 3px;
                        color: #fff;
                      }
                    }
                  }
                }
                .borderLine {
                  border-top: 1px solid hsla(0, 0%, 100%, 0.25);
                  padding: 20px 0 0 0;
                }
              }
            }
            &.hoverProfileInfo:hover {
              .card {
                display: block;
              }
            }
            a {
              position: relative;
            }
          }
        }
      }
    }
  }
</style>

<template lang="pug">
  header
    .mainArea
      .gnbBox
        h1
          a(href="/")
            img.logoImage(src="@/assets/images/logo.png")
        ul
          li
            a(href="javascript:;") 홈
          li
            a(href="javascript:;") 시리즈
          li
            a(href="javascript:;") 영화
          li
            a(href="javascript:;") NEW!요즘 대세 콘텐츠
          li
            a(href="javascript:;") 내가 찜한 콘텐츠
          li
            a(href="javascript:;") 언어별로 찾아보기
      .utilBox
        ul
          li
            a(href="javascript:;") #[mdicon(name="magnify" size="30")]
          li
            a(href="javascript:;") 키즈
          li.hoverAlrat
            a(href="javascript:;") #[mdicon(name="bell-outline" size="24")]
            .card
              mdicon.alartMenuDown(name="menu-up" size="30")
              ul
                li
                  a
                    p 최근알림 메시지가 없습니다.
          li.hoverProfileInfo
            a(href="javascript:;") #[img.icon(src="@/assets/images/profile.jpg")]  #[mdicon(name="menu-down" size="30") ]
            .card
              mdicon.profileMenuDown(name="menu-up" size="30")
              ul
                li
                  a(href="javascript:;")
                    img.icon(src="@/assets/images/profile.jpg")
                    span.imgTxt 게스트1
                li
                  a(href="javascript:;")
                    img.icon(src="@/assets/images/profile.jpg")
                    span.imgTxt 게스트2
                li
                  a(href="javascript:;")
                    mdicon(name="PencilCircleOutline" size="28")
                    span.mdiTxt 프로필 관리
                li
                  a(href="javascript:;")
                    mdicon(name="FaceMan" size="28")
                    span.mdiTxt 프로필 이전
                li
                  a(href="javascript:;")
                    mdicon(name="AccountOutline" size="28")
                    span.mdiTxt 계정
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
