<style lang="scss">
  .el-dialog {
    margin-top: 2vh !important;
    width: 1570px !important;
    background-color: #141414;
    padding-bottom: 20px;
    border-radius: 5px !important;
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
    font-size: 24px;
    color: var(--white);
    margin-bottom: 20px;
  }
  .el-dialog__wrapper {
    .el-dialog {
      border-radius: 5px !important;
    }
  }
  .hoverPlayButton {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .imageArea {
    position: relative;
    &after {
      content: "";
      display: block;
      clear: both;
    }
    .closeIcon {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 1;
      svg {
        color: var(--white);
        background-color: #181818;
        border-radius: 50%;
        padding: 8px;
      }
    }
    .mainImageBox {
      .mainImage {
        position: relative;
        img {
          width: 100%;
          min-height: 850px !important;
          background-size: cover;
        }
        .gradient {
          position: absolute;
          z-index: 1;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(0deg, #181818, transparent 10%);
        }
      }
      .left {
        position: absolute;
        bottom: 10%;
        left: 50px;
        h2 {
          width: 500px;
          line-height: 70px;
          font-size: 56px;
          color: var(--white);
          margin-bottom: 75px;
        }
        .playButton {
          vertical-align: middle;
          font-size: 22.4px;
          max-height: 42px;
          min-height: 32px;
          padding-left: 25.6px;
          padding-right: 32px;
          color: black;
          border: none;
          margin-right: 10px;
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
        bottom: 12%;
        right: 50px;
        float: right;
      }
      .bordering {
        margin-right: 10px;
        vertical-align: middle;
        border: 2px solid hsla(0, 0%, 100%, 0.5);
        color: var(--white);
        background-color: #2f2f2f;
        border-radius: 50%;
        padding: 8px;
        &:hover {
          border-color: var(--white);
        }
      }
    }
  }
  .movieInfoBox {
    font-size: 17.6px;
    padding: 60px 48px;
    .row {
      &:after {
        display: block;
        content: "";
        clear: both;
      }
      .txt {
        color: var(--white);
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
          font-size: 14.08px;
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
        font-size: 14.4px;
        span {
          line-height: 30px;
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
    margin-top: 20px;
    .txt {
      display: inline-block;
      color: var(--white);
      font-size: 17.6px;
      line-height: 25px;
    }
  }
  .sereisInfoBox {
    padding: 40px;
    .box {
      display: table;
      .row {
        display: table-inline;
        border-radius: 5px;
        border-bottom: 1px solid #404040;
        &.selected {
          border-radius: 5px;
          background-color: #2f2f2f;
        }
        &:first-child {
          border-radius: 5px;
          border-top: 1px solid #404040;
        }
        &:last-child {
          border-radius: 0;
          border-bottom: 2px solid #404040;
        }
        > * {
          height: 180px;
          vertical-align: middle;
        }
        &:hover {
          .hoverPlayButton {
            display: block;
          }
        }
      }
      h4 {
        display: table-cell;
        font-size: 1.6rem;
        color: var(--white);
        min-width: 60px;
        text-align: right;
        padding: 0 20px;
        min-height: 140px;
      }
      .seriseImage {
        position: relative;
        display: table-cell;
        box-sizing: border-box;
        padding: 16px;
        .thumb {
          display: block;
          width: 266px;
          height: 156px;
          background-size: cover;
          border-radius: 5px;
        }
        .playButton {
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          color: var(--white);
          border: 1px solid var(--white);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        &:hover {
          .playButton {
            display: block;
          }
        }
      }
      .seriseInfo {
        display: table-cell;
        vertical-align: middle;
        padding-right: 100px;
        width: 100%;
        .info {
          overflow: hidden;
          margin-bottom: 10px;
          color: var(--white);
          .serise {
            float: left;
          }
          .time {
            float: right;
          }
        }
        .time {
          text-align: right;
          font-size: 16px;
        }
        .serise {
          font-size: 1rem;
        }
        .description {
          line-height: 1.4;
          font-size: 14px;
          color: grey;
        }
      }
    }
  }
  .extendAreaBox {
    position: relative;
    bottom: 15px;
    text-align: center;
    height: 0;
    .arrowBottom {
      vertical-align: middle;
      border: 1px solid var(--white);
      color: var(--white);
      border-radius: 50%;
      padding: 5px;
      opacity: 0.7;
    }
  }
  .watchedTogetherMovieListBox {
    color: #d2d2d2;
    border-bottom: 2px solid rgb(83, 83, 83);
    padding: 40px 40px 0 40px;
    &.hide {
      .list {
        max-height: 1200px;
        overflow: hidden;
      }
    }
    .list {
      padding-bottom: 40px;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
    }
    .card {
      position: relative;
      width: 470px;
      height: 465px;
      background-color: #2f2f2f;
      float: left;
      margin: 10px;
      border-radius: 5px;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .sumnail {
        position: relative;
        img {
          height: 268px;
        }
      }
      .edgeborder {
        display: inline-block;
        position: absolute;
        padding: 20px;
        right: 0;
        color: var(--white);
        font-size: 16px;
        z-index: 1;
        background-image: linear-gradient(198deg, rgba(0, 0, 0, 0.9), hsla(0, 0%, 9%, 0.5) 20%, transparent 28%);
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        border-top-right-radius: 5px;
      }
      img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-size: cover;
        width: 100%;
        height: 270px;
      }
      .bordering {
        margin: 20px 15px 0 0;
        vertical-align: middle;
        border: 1px solid var(--white);
        color: var(--white);
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
      &:hover {
        .hoverPlayButton {
          display: block;
        }
      }
      .txt {
        color: #d2d2d2;
        font-size: 14px;
      }
    }
  }
  .trailerMovieListBox {
    padding: 40px;
    color: #d2d2d2;
    border-bottom: 2px solid rgb(83, 83, 83);
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .card {
      width: 470px;
      height: 326px;
      background-color: #2f2f2f;
      float: left;
      margin: 10px;
      .sumnail {
        position: relative;
        img {
          width: 100%;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background-size: cover;
          height: 228px;
        }
      }
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      &:hover {
        .hoverPlayButton {
          display: block;
        }
      }
      .txt {
        color: #d2d2d2;
        font-size: 14px;
      }
    }
    .otherOption {
      background: none;
      p {
        padding: 16px;
        color: var(--white);
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .bottomBox {
    padding: 0 60px;
    .row {
      margin: 10px 0;
      svg {
        position: relative;
        top: 10px;
        padding-left: 10px;
      }
      .txt {
        color: var(--white);
        padding: 10px;
      }
    }
  }
</style>
<template lang="pug">
el-dialog(:visible='visible' @close="close")
  .dialog
    .imageArea
      .closeIcon(@click='close')
        inline-svg(
            :src="require('@/assets/images/x.svg')"
            width="20" 
            height="20"
            fill="black"
          ) 
      .mainImageBox
        .mainImage
          img(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${data.backdrop_path})` }") 
          .gradient
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
        .row(v-for="(item, index) in movieData.results" :class="{ selected: index === 1 }")
          h4 {{ index+1}} 
          .seriseImage
            span(class="thumb" :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})`}") 
            a.hoverPlayButton #[mdicon(name="play" size="42") ]
          .seriseInfo
            p.info
              span.serise {{ item.title || item.name }}
              span.time 22분
            p.description {{ item.overview }}
    .watchedTogetherMovieListBox(:class="showAndHideContent ? '' : 'hide'")
      h3 함께 시청된 콘텐츠
      .list
        .card(v-for="(item, index) in movieData.results")
          span.edgeborder 에피소드 10개
          .sumnail
            img(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})` }") 
            a.hoverPlayButton #[mdicon(name="play" size="42") ]
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
          @click="showAndHideContents"
        )
    .trailerMovieListBox(style="border-bottom: none")
      h3 예고편 및 다른 영상
      .card.otherOption(v-for="(item, index) in movieData.results")
        .sumnail
          img(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})` }") 
          a.hoverPlayButton #[mdicon(name="play" size="42") ]
        .box
          p 시즌1 예고편 최후통첩: 쿼어러브
    .bottomBox
      .row
        h3 쿼어러브
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
      return {
        showAndHideContent: false,
      }
    },
    methods: {
      showAndHideContents() {
        this.showAndHideContent = !this.showAndHideContent
      },
      close() {
        this.$emit("close")
      },
    },
  }
</script>
