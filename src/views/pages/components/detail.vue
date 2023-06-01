<style lang="scss">
  .el-dialog {
    margin-top: 2vh !important;
    width: 1570px !important;
    background-color: #141414;
    padding-bottom: 20px;
    border-radius: 10px !important;
    overflow: hidden;
    margin-bottom: 0;
    .el-dialog__header {
      display: none !important;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
</style>
<style lang="scss" scoped>
  h3 {
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 20px;
  }
  .el-dialog__wrapper {
    z-index: 100000 !important;
    .el-dialog {
      border-radius: 10px !important;
      .dialog {
        .imageBox {
          position: relative;
          &after {
            content: "";
            display: block;
            clear: both;
          }
          .closeIcon {
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
          .mainImage {
            width: 100%;
            min-height: 850px !important;
            background-size: cover;
          }
          .bordering {
            margin: 5px;
            vertical-align: middle;
            border: 2px solid hsla(0, 0%, 100%, 0.5);
            color: #fff;
            background-color: #181818;
            border-radius: 50%;
            padding: 8px;
            &:hover {
              border: 2px solid #fff;
            }
          }
          .gra {
            background-image: linear-gradient(0deg, #181818, transparent 50%);
          }
          .left {
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
          }
          .right {
            position: absolute;
            bottom: 8%;
            right: 50px;
            float: right;
          }
        }
        .movieInfoBox {
          font-size: 1.1rem;
          padding: 60px 48px;
          .row {
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
                color: #46d369;
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
              width: 30%;
              float: right;
              font-size: 0.9rem;
              span {
                line-height: 40px;
                vertical-align: top;
              }
            }
          }
          .box {
            margin-top: 5px;
            &:after {
              display: block;
              content: "";
              clear: both;
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
          .box {
            .row {
              min-height: 140px;
              border-bottom: 2px solid rgb(83, 83, 83);
              display: table;
              width: 100%;
              .row:after {
                display: table;
                content: "";
                clear: both;
              }
            }
            .selected {
              background-color: #2f2f2f;
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
              display: table-cell;
              vertical-align: middle;
              min-height: 140px;
              width: 100%;
              :after {
                content: "";
                display: block;
                clear: both;
              }
              span {
                display: inline-block;
                height: 150px;
                vertical-align: top;
              }
              .time {
                width: 15%;
                vertical-align: top;
                color: #fff;
                font-size: 16px;
                float: right;
              }
              .serise {
                height: 100%;
                margin: 0 10px 10px 10px;
                font-size: 1rem;
                color: #fff;
              }
              .description {
                line-height: 22px;
                font-size: 0.9rem;
                color: grey;
              }
            }
          }
        }
        .extendAreaBox {
          text-align: center;
          .arrowBottom {
            vertical-align: middle;
            border: 2px solid #fff;
            color: #fff;
            border-radius: 50%;
            padding: 5px;
            opacity: 0.7;
          }
        }
        .movieListBox {
          float: left;
          padding: 16px 48px;
          color: #d2d2d2;
          margin-bottom: -20px;
          border-bottom: 2px solid rgb(83, 83, 83);
          &:after {
            content: "";
            display: block;
            clear: both;
          }
          .card {
            width: 470px;
            height: 465px;
            background-color: #2f2f2f;
            float: left;
            margin: 10px;
            .episode {
              position: relative;
              top: 3%;
              right: 5%;
              height: 0;
              text-align: right;
              color: #fff;
              font-size: 16px;
            }
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
          .otherOption {
            background: none;
            height: 320px;
            p {
              padding: 1rem;
              color: #fff;
              font-size: 1em;
              font-weight: 500;
            }
          }
        }
        .hide {
          max-height: 1200px;
          overflow: hidden;
        }
        .bottomBox {
          padding: 0 60px;
          .row {
            margin: 10px 0;
            svg {
              position: relative;
              top: 10px;
            }
            .txt {
              color: #fff;
              padding: 10px;
            }
          }
        }
      }
    }
  }
</style>

<template lang="pug">
el-dialog(:visible='visible' @close="close")
  .dialog
    .imageBox
      .closeIcon(@click='close')
        inline-svg(
            :src="require('@/assets/images/x.svg')"
            width="20" 
            height="20"
            fill="black"
          ) 
      img.mainImage(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${data.backdrop_path})` }") 
      .gra
      .left
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
      .right
        inline-svg.bordering(
          :src="require('@/assets/images/speaker.svg')"
          width="20" 
          height="20"
          fill="black"
        ) 
    .movieInfoBox
      .row
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
        span.txt(style="width: 62%") {{ data.overview }}
    .sereisInfoBox
      h3 회차
      .box
        .row(v-for="(item, index) in movieData.results" :class="{ selected: index === 0 }")
          h4 {{ index+1}} 
          img.seriseImage(src="@/assets/images/t.png" :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})` }")
          .box
            span.time 22분
            span.serise {{ item.title || item.name }}
            p.description {{ item.overview }}
    .movieListBox.hide
      h3 함께 시청된 콘텐츠
      .card(v-for="(item, index) in movieData.results")
        p.episode 에피소드 10
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
    .extendAreaBox
      inline-svg.arrowBottom(
        :src="require('@/assets/images/arrowbottom.svg')"
        width="25" 
        height="25"
        fill="black"
      )
    .movieListBox(style="border-bottom: none")
      h3 예고편 및 다른 영상
      .card.otherOption(v-for="(item, index) in movieData.results")
        img(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})` }") 
        p 시즌1 예고편 최후통첩: 쿼어러브
    .bottomBox
      .row
        span 출연:
        span.txt 이시가미 시즈카, 우에무라 유토
      .row
        span 장르:
        span.txt 애니메이션
      .row
        span 시리즈 특징:
        span.txt 도발적인, 거부할 수 없는 이끌림
      .row(style="margin-top:-10px;")
        span 관람등급:
        inline-svg(
          :src="require('@/assets/images/age.svg')"
          width="25" 
          height="25"
          fill="black"
        )
        span.txt 청소년관람 불가
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
        this.$emit("close")
      },
    },
  }
</script>
