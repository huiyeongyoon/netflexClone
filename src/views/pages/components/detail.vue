<style lang="scss">
  .el-dialog {
    margin-top: 2vh !important;
    width: 1570px !important;
    background-color: #141414;
    padding-bottom: 20px;
    .el-dialog__header {
      display: none !important;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
</style>
<style lang="scss" scoped>
  .el-dialog__wrapper {
    z-index: 100000 !important;
    .el-dialog {
      border-radius: 10px !important;
      .dialogHeader {
        .iconBox {
          z-index: 10000;
          position: absolute;
          top: 15px;
          right: 15px;
          svg {
            color: #fff;
            background-color: #181818;
            border-radius: 50%;
            padding: 8px;
          }
        }
        .content {
          position: relative;
          .mainImage {
            width: 100%;
            min-height: 850px !important;
            background-size: cover;
          }
          .overImageBox {
            position: absolute;
            bottom: 6%;
            left: 50px;
            h2 {
              width: 500px;
              line-height: 70px;
              font-size: 3.5rem;
              color: #fff;
              margin-bottom: 75px;
            }
            .playButton {
              vertical-align: middle;
              font-size: 1.4rem;
              max-height: 42px;
              min-height: 32px;
              padding-left: 1.6rem;
              padding-right: 2rem;
              color: black;
              border: none;
              &:hover {
                background-color: #dcdcdc;
                transition: all 0.2s;
              }
              span {
                vertical-align: middle;
                position: relative;
                top: -15px;
              }
            }
            .bordering {
              margin: 5px;
              vertical-align: middle;
              border: 2px solid #fff;
              color: #fff;
              background-color: #181818;
              border-radius: 50%;
              padding: 8px;
            }
          }
        }
        .movieInfoBox {
          font-size: 1.1rem;
          padding: 60px 48px;
          .movieInfo {
            &:after {
              display: block;
              content: "";
              clear: both;
            }
            .txt {
              color: #fff;
              padding: 0 10px;
            }
            .left {
              float: left;
              .green {
                color: rgb(0, 212, 0);
                font-weight: 500;
                padding-left: 5px;
              }
              span {
                vertical-align: top;
                padding: 0 3px;
              }
              .hd {
                border: 1px solid hsla(0, 0%, 100%, 0.4);
                border-radius: 3px;
                color: hsla(0, 0%, 100%, 0.9);
                font-size: 0.8em;
                white-space: nowrap;
                padding: 0 0.2rem;
              }

              .box {
                .svgIcon {
                  margin-left: 5px;
                }
              }
            }
            .right {
              width: 35%;
              float: right;
              span {
                line-height: 50px;
                vertical-align: top;
              }
            }
          }
          .box {
            margin-bottom: 30px;
            &:after {
              display: block;
              content: "";
              clear: both;
            }
            .txt {
              color: #fff;
              padding: 0 10px;
            }
            .left {
              float: left;
              svg {
                margin-left: 5px;
              }
            }
          }
        }
        .descriptionBox {
          .txt {
            display: inline-block;
            color: #fff;
            font-size: 1.1rem;
            line-height: 25px;
          }
        }
        .sereisInfoBox {
          padding: 40px;
          h3 {
            font-size: 1.8rem;
            color: #fff;
            margin-bottom: 20px;
          }
          .box {
            .row {
              min-height: 140px;
              border-bottom: 1px solid rgb(83, 83, 83);
              display: table;
              width: 100%;
              .row:after {
                display: table;
                content: "";
                clear: both;
              }
            }
            h4 {
              display: table-cell;
              vertical-align: middle;
              font-size: 1.6rem;
              color: #fff;
              min-width: 60px;
              text-align: right;
              padding: 0 20px;
              min-height: 140px;
            }
            .seriseImage {
              display: table-cell;
              vertical-align: middle;
              float: left;
              box-sizing: border-box;
              margin: 16px;
              width: 266px;
              min-height: 156px;
              background-size: cover;
            }
            .box {
              width: 100%;
              display: table-cell;
              vertical-align: middle;
              min-height: 140px;
              :after {
                content: "";
                display: block;
                clear: both;
              }
              .time {
                color: #fff;
                font-size: 16px;
                float: right;
              }
              .serise {
                margin: 10px;
                font-size: 1rem;
                color: #fff;
              }
              .description {
                margin: 10px;
                line-height: 22px;
                font-size: 0.9rem;
                color: grey;
              }
            }
          }
        }
        .MovieListBox {
          padding: 16px 48px;
          color: #d2d2d2;
          border-bottom: 1px solid rgb(83, 83, 83);
          &:after {
            content: "";
            display: block;
            clear: both;
          }
          h3 {
            font-size: 1.8rem;
            color: #fff;
            margin-bottom: 20px;
          }
          .card {
            width: 470px;
            height: 465px;
            background-color: #2f2f2f;
            float: left;
            margin: 10px;
            &:after {
              content: "";
              display: block;
              clear: both;
            }
            img {
              background-size: cover;
              width: 100%;
              height: 270px;
            }
            .bordering {
              margin: 20px 15px 0 0;
              vertical-align: middle;
              border: 2px solid #fff;
              color: #fff;
              background-color: #2f2f2f;
              border-radius: 50%;
              padding: 8px;
              float: right;
            }
            .box {
              padding: 0 15px;
              margin-top: 40px;
              span {
                position: relative;
                top: -12px;
                left: 7px;
              }
              p {
                margin-top: 20px;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-word;
                line-height: 21px;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
              }
            }
            .txt {
              color: #d2d2d2;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>

<template lang="pug">
el-dialog(:visible='visible' @close="close")
  .dialogHeader
    .iconBox(@click='close')
       inline-svg(
          :src="require('@/assets/images/x.svg')"
          width="20" 
          height="20"
          fill="black"
        ) 
    .content
      img.mainImage(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${data.backdrop_path})` }") 
      .overImageBox
        h2 {{ data.title || data.name}}
        el-button.playButton
          mdicon(name="play" size="52") 
          span 재생
        inline-svg.bordering(
          :src="require('@/assets/images/plus.svg')"
          width="20" 
          height="20"
          fill="black"
        ) 
        inline-svg.bordering(
          :src="require('@/assets/images/like.svg')"
          width="20" 
          height="20"
          fill="black"
        ) 
    .movieInfoBox
      .movieInfo
        .left
          span.txt.green {{ data.vote_average }}% 일치 
          span.txt(style="color: grey") 2023 에피소드 
          span.txt.hd HD
          inline-svg(
            :src="require('@/assets/images/ad.svg')"
            width="50" 
            height="30"
            fill="black"
            style="margin-top: -8px;"
          ) 
          inline-svg(
            :src="require('@/assets/images/memo.svg')"
            width="20" 
            height="25"
            fill="black"
            style="margin-top: -8px;"
          )
          .box
            inline-svg.svgIcon(
              :src="require('@/assets/images/rating1.svg')"
              width="30" 
              height="30"
              fill="black"
            )
            inline-svg.svgIcon(
              :src="require('@/assets/images/rating2.svg')"
              width="30" 
              height="30"
              fill="black"
            )
            inline-svg.svgIcon(
              :src="require('@/assets/images/rating3.svg')"
              width="30" 
              height="30"
              fill="black"
            )
            inline-svg.svgIcon(
              :src="require('@/assets/images/rating4.svg')"
              width="30" 
              height="30"
              fill="black"
            )
        .right
            .row
              span 출연:
              span.txt 이시가미 시즈카, 우에무라 유토
            .row
              span 장르:
              span.txt 애니메이션
      .descriptionBox
        span.txt(style="width: 50%") {{ data.overview }}
    .sereisInfoBox
      h3 회차
      .box
        .row(v-for="(item, index) in movieData.results")
          h4 {{ index+1}} 
          img.seriseImage(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})` }")
          .box
            p.time 22분
            p.serise {{ item.title || item.name }}
            p.description {{ item.overview }}
    .MovieListBox
      h3 함께 시청된 콘텐츠
      .card(v-for="(item, index) in movieData.results")
        img(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})` }") 
        inline-svg.bordering(
            :src="require('@/assets/images/plus.svg')"
            width="24" 
            height="24"
            fill="black"
            )
        .box
          inline-svg(
            :src="require('@/assets/images/age.svg')"
            width="35" 
            height="35"
            fill="black"
          )
          span 2019
          p {{ item.overview }}
   
</template>

<script>
  import InlineSvg from "vue-inline-svg"

  export default {
    components: {
      InlineSvg,
    },
    props: {
      visible: {
        type: Boolean,
      },
      data: {
        type: Object,
        default: () => {},
      },
      movieData: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {}
    },
    methods: {
      close() {
        console.log("close")
        this.$emit("close")
      },
    },
  }
</script>
