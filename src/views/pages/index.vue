<style lang="scss" scoped>
  .main {
    height: 100%;
    overflow: hidden;
    .imageArea {
      position: relative;
      height: 1700px;
      .backgroundImage {
        width: 99.9%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .movieInfo {
        position: absolute;
        bottom: 30%;
        left: 60px;
        color: #fff;
        &after {
          display: block;
          content: "";
          clear: both;
        }
        .title {
          font-size: 6rem;
          margin-bottom: 0.3rem;
          max-width: 40%;
          min-height: 330px;
          line-height: 100px;
        }
        .description {
          margin-top: 2rem;
          font-size: 2rem;
          max-width: 40%;
          margin-bottom: 4.5rem;
          line-height: 45px;
        }
        .playButton {
          height: 56px;
          font-size: 1.5rem;
          color: black;
          border: none;
          float: left;
          &:hover {
            background-color: #dcdcdc;
            transition: all 0.2s;
          }
          span {
            vertical-align: middle;
            position: relative;
            top: -10px;
          }
        }
        .detailButton {
          height: 56px;
          padding-left: 2rem;
          padding-right: 2.4rem;
          font-size: 1.5rem;
          background-color: rgba(109, 109, 110, 0.4);
          color: #fff;
          border: none;
          &:hover {
            background-color: rgba(66, 66, 66, 0.4);
            transition: all 0.2s;
          }
          span {
            vertical-align: middle;
          }
        }
      }
      .filmRating {
        position: absolute;
        bottom: 33.9%;
        right: 0px;
        color: #fff;
        .mdi {
          margin: 0 30px 20px 0;
          border: 1px solid #fff;
          border-radius: 50%;
          padding: 8px 8px 11px 8px;
        }
        .videoOption {
          display: inline-block;
          background-color: rgba(51, 51, 51, 0.6);
          border: 3px #dcdcdc;
          border-left-style: solid;
          box-sizing: border-box;
          font-size: 1.1vw;
          padding: 0.1vw 3.5vw 0.1vw 0.8vw;
          .txt {
            font-size: 1.1vw;
          }
          svg {
            vertical-align: top;
          }
        }
      }
    }
  }
</style>

<template lang="pug">
.main
  .imageArea
    img.backgroundImage(v-if="randomMovieInfo.backdrop_path !== undefined" src="@/assets/images/t.png" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovieInfo.backdrop_path})`}")
    .movieInfo
      h2.title(v-if="randomMovieInfo.name !== undefined") {{ randomMovieInfo.name  }}
      h2.title(v-if="randomMovieInfo.title !== undefined") {{ randomMovieInfo.title }}
      p.description {{ randomMovieInfo.overview }}
      el-button.playButton 
        mdicon(name="play" size="58")
        span 재생
      el-button.detailButton(@click="showDetail") 
        mdicon(name="AlertCircleOutline" size="36")
        span 상세정보
    .filmRating
      mdicon(name="Replay" size="34")  
      .videoOption
        inline-svg(
          :src="require('@/assets/images/age.svg')"
          width="68" 
          height="68"
          fill="black"
        ) 
  .topListArea
    Carouscel(:title="'오늘 대한민국의 TOP 10 시리즈'" :size="'large'" :movieData="top")
    Carouscel(:title="'지금 뜨는 콘텐츠'" :size="'small'" :movieData="popular")
    Carouscel(:title="'해외 시리즈'" :size="'small'" :movieData="upcoming" )
  Detail(:visible="visible" :data="randomMovieInfo" :movieData="popular" @close="close")
</template>

<script>
  import InlineSvg from "vue-inline-svg"
  import { trendingAllWeek, MovieTopRated, MoviePopular, movieUpcoming } from "@/api"
  import Carouscel from "@/components/Carouscel"
  import Detail from "./components/detail"
  export default {
    components: {
      InlineSvg,
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
        form: {
          language: "ko-KO",
          api_key: process.env.VUE_APP_API_KEY,
        },
      }
    },
    mounted() {
      // async trendingAllWeek({ api_key: "78a4d0373f1d5e9db6addc349a02b5ba", language: this.language })
      // await this.randomMovieInfo = data.results[Math.floor(Math.random() * data.results.length)]

      // const { data } = await trendingAllWeek(this.form)
      // this.randomMovieInfo = data.results[Math.floor(Math.random() * data.results.length)]
      this.fetchList()
    },
    methods: {
      fetchList() {
        trendingAllWeek(this.form).then(res => {
          const { data } = res
          this.randomMovieInfo = data.results[Math.floor(Math.random() * data.results.length)]
        })

        MovieTopRated(this.form).then(res => {
          const { data } = res
          this.top = data
        })

        MoviePopular(this.form).then(res => {
          const { data } = res
          this.popular = data
        })

        movieUpcoming(this.form).then(res => {
          const { data } = res
          this.upcoming = data
        })
      },
      showDetail() {
        this.visible = true
      },
      close() {
        this.visible = false
      },
    },
  }
</script>
