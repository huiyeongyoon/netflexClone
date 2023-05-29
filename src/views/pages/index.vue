<style lang="scss" scoped>
  .main {
    height: 100%;
    overflow: hidden;
    .imageArea {
      position: relative;
      height: 80vh;
      .backgroundImage {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .movieInfo {
        position: absolute;
        top: 45%;
        left: 40px;
        color: #fff;
        .title {
          font-size: 3rem;
          margin-bottom: 0.3rem;
        }
        .description {
          width: 45rem;
          margin-top: 2rem;
          font-size: 0.8rem;
          max-width: 380px;
          margin-bottom: 1.4rem;
        }
        .playButton {
          display: inline-flex;
          align-items: center;
          height: 42px;
          padding: 0.4rem 1.2rem 0.4rem 1.2rem;
          color: black;
          border: none;
          &:hover {
            background-color: #dcdcdc;
            transition: all 0.2s;
          }
        }
        .detailButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          padding: 0.4rem 1.2rem 0.4rem 1.2rem;
          background-color: rgba(109, 109, 110, 0.4);
          color: #fff;
          border: none;
          &:hover {
            background-color: rgba(66, 66, 66, 0.4);
            transition: all 0.2s;
          }
        }
      }
      .box {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 17%;
        right: 0px;
        color: #fff;
        .mdi {
          margin-right: 20px;
        }
        .videoOption {
          display: flex;
          align-items: center;
          background-color: rgba(51, 51, 51, 0.6);
          border: 3px #dcdcdc;
          border-left-style: solid;
          box-sizing: border-box;
          font-size: 1.1vw;
          height: 2.4vw;
          padding: 0.5vw 4.3vw 0.5vw 0.8vw;
          .txt {
            font-size: 1.1vw;
          }
        }
      }
    }
    @media (max-width: 1280px) {
      .imageArea {
        height: 55vh;
      }
    }
  }
</style>

<template lang="pug">
.main
  .imageArea
    img.backgroundImage(:style="{ backgroundImage: `url( https://image.tmdb.org/t/p/original${randomMovieInfo.backdrop_path} )` }") 
    .movieInfo
      h2.title(v-if="randomMovieInfo.name !== undefined") {{ randomMovieInfo.name  }}
      h2.title(v-if="randomMovieInfo.title !== undefined") {{ randomMovieInfo.title }}
      p.description {{ randomMovieInfo.overview }}
      el-button.playButton #[mdicon(name="play" size="35")] 재생
      el-button.detailButton(@click="showDetail") #[mdicon(name="AlertCircleOutline" size="28")] 상세정보
    .box
      mdicon(name="Replay" size="25")  
      .videoOption
        span.txt 18
  .topListArea
    Carouscel(:title="'오늘 대한민국의 TOP 10 시리즈'" :size="'large'" :movieData="top")
    Carouscel(:title="'지금 뜨는 콘텐츠'" :size="'small'" :movieData="popular")
    Carouscel(:title="'해외 시리즈'" :size="'small'" :movieData="upcoming" )
  Detail(:visible="visible" :data="randomMovieInfo" :movieData="popular" @close="close")
</template>

<script>
  import { movieInfo, top, popular, upcoming } from "@/api"
  import Carouscel from "@/components/Carouscel"
  import Detail from "./components/detail"
  export default {
    components: {
      Carouscel,
      Detail,
    },
    data() {
      return {
        visible: false,
        randomMovieInfo: {},
        top: {},
        popular: {},
        upcoming: {},
        form: [],
      }
    },
    mounted() {
      movieInfo().then(res => {
        const { data } = res
        this.randomMovieInfo = data.results[Math.floor(Math.random() * data.results.length - 1)]
        console.log(this.randomMovieInfo)
      })
      top().then(res => {
        const { data } = res
        this.top = data
      })
      popular().then(res => {
        const { data } = res
        this.popular = data
      })
      upcoming().then(res => {
        const { data } = res
        this.upcoming = data
      })
    },
    methods: {
      showDetail() {
        this.visible = true
        // let random = Math.floor(Math.random() * (10 - 0) + 1)
        // this.form.forEach(item => {
        //   if (item.random === random) {
        //     this.selected = item
        //   }
        // })
      },
      close() {
        this.visible = false
      },
    },
  }
</script>
