<style lang="scss" scoped>
  .CarouscelContainer:first-child {
    margin-top: -380px;
  }
  .CarouscelContainer {
    position: relative;
    margin: 92px 0;
    .title {
      position: relative;
      color: #fff;
      padding-left: 60px;
      font-size: 1.4vw;
      line-height: 1.25vw;
      vertical-align: bottom;
    }
    .barContainer {
      margin-right: 60px;
      height: 20px;
      > div {
        float: right;
      }
      .bar {
        display: inline-block;
        background-color: #fff;
        opacity: 0.4;
        margin-right: 0.1rem;
        width: 1rem;
        height: 0.2rem;
        margin-bottom: 10px;
      }
      .active {
        background-color: #fff;
        opacity: 1;
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    > .row {
      padding: 0 60px;
      position: relative;
      z-index: 100;
      .arrow {
        position: absolute;
        height: 0;
        display: none;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        color: #fff;
        border: none;
        width: 56px;
        border-radius: 5px;
        z-index: 100;
        margin: 0;
        padding: 0;
        cursor: pointer;
        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: block;
          line-height: 100%;
        }
      }
      &:hover {
        .arrow {
          display: block;
        }
      }
      .leftArrow {
        left: 0;
      }
      .rightArrow {
        right: 0;
      }
      .imgContainer {
        overflow-x: visible;
        .detailBox {
          display: inline-block;
          position: relative;
          margin: 0 0.35rem;
          width: 477.8px;
          height: 272px;
          .box {
            position: absolute;
            background-color: #222222;
            border-radius: 5px;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              position: relative;
              transform: translateX(calc(0 * -100%));
              background-size: 100% 100%;
              height: 272px;
            }
          }
          .detail {
            width: 100%;
            display: none;
            .row {
              padding: 0 15px;
              margin-bottom: 20px;
              &:after {
                content: "";
                display: block;
                clear: both;
              }
              .playButton {
                margin: 15px 8px 0 10px;
                border-radius: 50%;
                color: black;
                padding: 0;
              }
              .bordering {
                margin: 15px 8px 0 0;
                vertical-align: top;
                border: 1px solid grey;
                color: #fff;
                background-color: #222222;
                border-radius: 50%;
                padding: 8px;
                &:hover {
                  border: 1px solid #fff;
                }
              }
              .arrowBottom {
                float: right;
                margin-right: 8px;
              }
              .white {
                display: inline-block;
                font-size: 1rem;
                margin-right: 15px;
                color: #fff;
              }
              .circle {
                content: "";
                padding: 3px;
                background-color: hsla(0, 0%, 100%, 0.4);
                border-radius: 50%;
              }
              .age {
                border: 1px solid hsla(0, 0%, 100%, 0.4);
                border-radius: 3px;
                color: hsla(0, 0%, 100%, 0.9);
                font-size: 0.8em;
                white-space: nowrap;
                padding: 0 0.2rem;
              }
              .hd {
                border: 1px solid hsla(0, 0%, 100%, 0.4);
                border-radius: 3px;
                color: hsla(0, 0%, 100%, 0.9);
                font-size: 0.4em;
                white-space: nowrap;
                padding: 0 0.2rem;
              }
              .txt {
                color: grey;
              }
              .green {
                color: #46d369;
              }
            }
          }
          &:hover {
            z-index: 109;
            .box {
              border-radius: 5px;
              top: 50%;
              left: 50%;
              width: 725px;
              height: 628px;
              overflow: hidden;
              transform: translate(-50%, -58%);
              img {
                height: 470px;
              }
              .detail {
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
</style>
<template lang="pug">
.CarouscelContainer
  h2.title {{ title }}
  .barContainer
    .box
      .bar(v-for="currentCarouscelNumber in getTotalCarouscelSize" :class="{ active : currentCarouscelNumber === move.currentCarouscel }")
  .row
    .arrow.leftArrow(@click="moveRow('left')") #[mdicon(name="chevron-left" size="50")]
    .arrow.rightArrow(@click="moveRow('right')") #[mdicon(name="chevron-right" size="50")]
    .imgContainer(:style="`width: ${getItemWidth}px; transform: translateX(${move.translateXWidth}%)`")
      .detailBox(v-for="(item, index) in movieData.results")
        .box
          img(
            src="@/assets/images/t.png"
            :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}"
          )
          .detail
            .row(style="margin-bottom:10px")
              el-button.playButton
                mdicon(name="play" size="38") 
              inline-svg.bordering(
                :src="require('@/assets/images/plus.svg')"
                width="24" 
                height="24"
                fill="black"
              ) 
              inline-svg.bordering(
                :src="require('@/assets/images/like.svg')"
                width="24" 
                height="24"
                fill="black"
              )
              inline-svg.bordering.arrowBottom(
                :src="require('@/assets/images/arrowbottom.svg')"
                width="24" 
                height="24"
                fill="black"
                @click="showDetail"
              )
            .row
              span.white.txt.green 95% 일치
              span.white.txt.age 19+
              span.white.txt(style="color: grey") 2023 에피소드 
              span.white.txt.hd HD
            .row
              span.white 폭력적인
              span.white.circle 
              span.white 흥미진진
              span.white.circle
              span.white 판타지 애니메이션
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      },
      size: {
        type: String,
      },
      movieData: {
        type: Object,
        default: () => {},
      },
    },
    watch: {
      movieData(newVal) {
        if (newVal !== undefined) {
          this.listWidth = this.movieData.results.length * 489.00000000000006
        }
      },
    },
    data() {
      return {
        move: {
          translateXWidth: 0,
          currentCarouscel: 1,
        },
        transform: 0,
        listWidth: 0,
      }
    },
    computed: {
      getItemWidth() {
        return this.movieData.results !== undefined ? this.movieData.results.length * 489.00000000000006 : 0
      },
      getTotalCarouscelSize() {
        return this.movieData.results !== undefined ? Math.ceil(this.movieData.results.length / 6) : 0
      },
    },
    methods: {
      showDetail() {
        this.$emit("openDetail")
      },
      moveRow(direction) {
        let index = 0
        let totalCarouscelSize = this.getTotalCarouscelSize
        let translateXWidth = -100
        let eachCarouscelSize = translateXWidth / totalCarouscelSize
        while (totalCarouscelSize) {
          if (index * totalCarouscelSize >= translateXWidth) {
            break
          } else {
            index++
          }
        }

        if (direction === "left") {
          this.move.currentCarouscel = this.move.currentCarouscel === 1 ? this.getTotalCarouscelSize : this.move.currentCarouscel - 1
          this.move.translateXWidth += eachCarouscelSize
          if (this.move.translateXWidth === translateXWidth) {
            this.move.translateXWidth -= translateXWidth
            this.move.currentCarouscel = 1
          }
        } else if (direction === "right") {
          this.move.currentCarouscel = ++this.move.currentCarouscel
          this.move.translateXWidth += eachCarouscelSize
          if (this.move.translateXWidth === +translateXWidth) {
            this.move.translateXWidth = 0
            this.move.currentCarouscel = 1
          }
        }
      },
    },
  }
</script>
