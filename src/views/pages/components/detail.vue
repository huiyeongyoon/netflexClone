<style lang="scss">
  .el-dialog {
    margin-top: 2vh !important;
    width: 1520px !important;
    background-color: #141414;
    .el-dialog__header {
      display: none !important;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
</style>
<style lang="scss" scoped>
  .dialogHeader {
    .iconBox {
      z-index: 10000;
      position: absolute;
      top: 20px;
      right: 20px;
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
        bottom: 10%;
        left: 50px;
        h2 {
          width: 500px;
          line-height: 70px;
          font-size: 3.5rem;
          color: #fff;
          margin-bottom: 75px;
        }
        .playButton {
          height: 42px;
          padding: 0 2rem 0 2.4rem;
          color: black;
          border: none;
          &:hover {
            background-color: #dcdcdc;
            transition: all 0.2s;
          }
        }
        .icon {
          color: #fff;
          border: 1px solid #fff;
          border-radius: 50%;
          padding: 8px 8px 12px 8px;
          background-color: rgb(46, 46, 46);
          margin-left: 5px;
        }
      }
    }
    .movieInfoBox {
      font-size: 1.1rem;
      padding: 30px 40px;
      .movieInfo {
        margin-bottom: 5px;
        &:after {
          display: block;
          content: "";
          clear: both;
        }
        .txt {
          color: #fff;

          padding: 0 10px;
        }
        .green {
          color: rgb(0, 212, 0);
          font-weight: 500;
        }
        .left {
          float: left;
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
          svg {
            margin-top: -8px;
          }
        }
        .right {
          width: 35%;
          float: right;
          span {
            vertical-align: top;
          }
        }
      }
      .maturityRatingBox {
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
        }
        .right {
          width: 35%;
          float: right;
          span {
            vertical-align: top;
          }
        }
      }
    }
    .descriptionBox {
      .txt {
        display: inline-block;
        color: #fff;
        font-size: 1.1rem;
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
          margin-bottom: 20px;
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
          font-size: 1.5rem;
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
          margin-bottom: 3px;
          width: 250px;
          min-height: 140px;
          background-size: cover;
        }
        .box {
          width: 100%;
          display: table-cell;
          vertical-align: middle;
          min-height: 140px;
          .serise {
            margin: 10px;
            font-size: 1rem;
            color: #fff;
          }
          .description {
            margin: 10px;
            font-size: 0.8rem;
            color: grey;
          }
        }
      }
    }
  }
</style>

<template lang="pug">
el-dialog(:visible='visible')
  .dialogHeader
    .iconBox(@click='close')
      mdicon(name="AlphaXCircle" size="42")
    .content
      img.mainImage(src="@/assets/images/t.png"  :style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${data.backdrop_path})` }") 
      .overImageBox
        h2 {{ data.title || data.name}}
        el-button.playButton #[mdicon(name="play" size="35")] 재생
        mdicon.icon(name="PlusCircle" size="28")
        mdicon.icon(name="ThumbUpOutline" size="28")
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
          ) 
          inline-svg(
            :src="require('@/assets/images/memo.svg')"
            width="20" 
            height="25"
            fill="black"
          )
        .right
            span 출연:
            span.txt 이시가미 시즈카, 우에무라 유토
      .maturityRatingBox
        .left
          inline-svg(
            :src="require('@/assets/images/rating1.svg')"
            width="30" 
            height="30"
            fill="black"
          )
          inline-svg(
            :src="require('@/assets/images/rating2.svg')"
            width="30" 
            height="30"
            fill="black"
          )
          inline-svg(
            :src="require('@/assets/images/rating3.svg')"
            width="30" 
            height="30"
            fill="black"
          )
          inline-svg(
            :src="require('@/assets/images/rating4.svg')"
            width="30" 
            height="30"
            fill="black"
          )
        .right
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
            p.serise {{ index + 1 }} 화 
            p.description 스토리 불라 불라 불라
      //- img 
    //- p {{ data }}
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
