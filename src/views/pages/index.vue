<style lang="scss" scoped>
  .main {
    height: 100%;
    .imageArea {
      position: relative;
      height: 1700px;
      .backgroundImage {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .movieInfo {
        position: absolute;
        bottom: 30%;
        left: 60px;
        color: var(--white);
        &after {
          display: block;
          content: "";
          clear: both;
        }
        .title {
          font-size: 96px;
          max-width: 40%;
          min-height: 330px;
          line-height: 100px;
        }
        .description {
          margin-top: 32px;
          margin-bottom: 72px;
          font-size: 32px;
          max-width: 40%;
          line-height: 45px;
        }
        .playButton {
          height: 56px;
          font-size: 24px;
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
          padding-left: 32px;
          padding-right: 38.4px;
          font-size: 24px;
          background-color: rgba(109, 109, 110, 0.4);
          color: var(--white);
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
        color: var(--white);
        a {
          color: var(--white);
          margin-right: 25px;
          vertical-align: top;
          svg {
            border: 1px solid var(--white);
            border-radius: 50%;
            padding: 10px;
            &:hover {
              background-color: rgba(51, 51, 51, 0.6);
            }
          }
        }
        .videoOption {
          display: inline-block;
          background-color: rgba(51, 51, 51, 0.6);
          border: 3px #dcdcdc;
          border-left-style: solid;
          box-sizing: border-box;
          padding: 3px 107px 3px 24px;
          svg {
            vertical-align: top;
          }
        }
      }
    }
    .listArea {
      position: relative;
      z-index: 1;
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
      a(href="/")
        inline-svg(
          :src="require('@/assets/images/sound.svg')"
          width="28" 
          height="28"
          fill="black"
        ) 
      .videoOption
        inline-svg(
          :src="require('@/assets/images/age.svg')"
          width="68" 
          height="68"
          fill="black"
        ) 
  .listArea
    Carouscel(:title="'지금 뜨는 콘텐츠'" :size="'small'" :movieData="popular" @openDetail="visible = true")
    CarouscelTop(:title="'오늘 대한민국의 TOP 10 시리즈'" :size="'large'" :movieData="top"  @openDetail="visible = true")
    Carouscel(:title="'해외 시리즈'" :size="'small'" :movieData="upcoming" @openDetail="visible = true")
  Detail(:visible="visible" :data="randomMovieInfo" :movieData="popular" @close="close")
</template>

<script>
  import InlineSvg from "vue-inline-svg"
  import { trendingAllWeek, MovieTopRated, MoviePopular, movieUpcoming } from "@/api"
  import Carouscel from "@/components/Carouscel"
  import CarouscelTop from "@/components/CarouscelTop"
  import Detail from "./components/detail"
  export default {
    components: {
      InlineSvg,
      Carouscel,
      CarouscelTop,
      Detail,
    },
    data() {
      return {
        visible: false,
        randomMovieInfo: {},
        top: [],
        popular: {},
        upcoming: {},
        form: {
          language: "ko-KO",
          api_key: process.env.VUE_APP_API_KEY,
        },
      }
    },
    created() {
      // async trendingAllWeek({ api_key: "78a4d0373f1d5e9db6addc349a02b5ba", language: this.language })
      // await this.randomMovieInfo = data.results[Math.floor(Math.random() * data.results.length)]

      // const { data } = await trendingAllWeek(this.form)
      // this.randomMovieInfo = data.results[Math.floor(Math.random() * data.results.length)]
      this.fetchList()
    },
    methods: {
      async fetchList() {
        trendingAllWeek(this.form).then(res => {
          const { data } = res
          this.randomMovieInfo = data.results[Math.floor(Math.random() * data.results.length)]
        })
        // 아래 함수 3개 호출
        await MovieTopRated(this.form).then(res => {
          const { data } = res
          this.top = data.results
          // data.results.slice(10).map((item, i) => {
          //   item.rank = i + 1
          //   this.top.push(item)
          // })
        })

        // MoviePopular(this.form).then(res => {
        //   const { data } = res
        //   this.popular = this.setMovieData(data)
        // })

        // movieUpcoming(this.form).then(res => {
        //   const { data } = res
        //   this.upcoming = this.setMovieData(data)
        // })
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
