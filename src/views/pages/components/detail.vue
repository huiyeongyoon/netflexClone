<style lang="scss">
  .el-dialog {
    width: 85% !important;
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
    display: flex;
    flex-direction: column;
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
        min-height: 60vh;
        background-size: cover;
      }
      .overImageBox {
        position: absolute;
        bottom: 25%;
        left: 40px;
        h2 {
          width: 500px;
          line-height: 120%;
          font-size: 3.5rem;
          color: #fff;
          margin-bottom: 30px;
        }
        .playButton {
          display: inline-flex;
          align-items: center;
          height: 38px;
          padding: 0.4rem 1.2rem 0.4rem 1.2rem;
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
    .descriptionBox {
      padding: 30px;
      .box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .columnBox {
        display: flex;
        flex-direction: column;
        width: 50%;
        .box {
          display: flex;
          justify-content: flex-start;
          .txt {
            margin-bottom: 20px;
            padding: 0 10px;
          }
        }
      }
      .txt {
        display: inline-block;
        color: #fff;
        font-size: 1.1rem;
      }
      .green {
        color: rgb(0, 212, 0);
        font-weight: 500;
      }
    }
    .sereisInfoBox {
      padding: 30px;
      h3 {
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 20px;
      }
      h4 {
        font-size: 1.5rem;
        color: #fff;
        margin: 30px;
      }
      .seriseImage {
        margin-bottom: 20px;
      }
      .box {
        display: flex;
        flex-direction: column;
        .row {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid rgb(83, 83, 83);
          .box {
            display: flex;
            .serise {
              display: block;
              margin: 10px;
              font-size: 0.8rem;
              color: #fff;
            }
            .description {
              display: block;
              margin: 10px;
              font-size: 0.8rem;
              color: #fff;
            }
          }
        }
      }
      img {
        width: 200px;
        min-height: 120px;
        background-size: cover;
      }
    }
  }
</style>

<template lang="pug">
el-dialog(:visible='visible' width='30%')
  .dialogHeader
    .iconBox(@click='close')
      mdicon(name="AlphaXCircle" size="42")
    .content
      img.mainImage(:style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${data.backdrop_path})` }") 
      .overImageBox
        h2 {{ data.title || data.name}}
        el-button.playButton #[mdicon(name="play" size="35")] 재생
        mdicon.icon(name="PlusCircle" size="28")
        mdicon.icon(name="ThumbUpOutline" size="28")
    .descriptionBox
      .box
        .columnBox
          p.txt.green {{ data.vote_average }} 점수
        .columnBox(style="margin-left:10%;")
          .box
            span 출연: 
            p.txt 이시가미 시즈카, 우에무라 유토
          .box
            span 장르:
            p.txt 애니메이션
      p.txt(style="width: 50%") {{ data.overview }}
    .sereisInfoBox
      h3 회차
      .box
        .row(v-for="(item, index) in movieData.results")
          h4 {{ index + 1}} 
          img.seriseImage(:style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${item.backdrop_path})` }")
          .box
            span.serise {{ index + 1 }} 화 
            span.description 스토리 불라 불라 불라
      //- img 
    //- p {{ data }}
</template>

<script>
  export default {
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
    mounted() {
      console.log(this.movieData)
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
