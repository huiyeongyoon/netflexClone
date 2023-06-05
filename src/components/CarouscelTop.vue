<style lang="scss" scoped>
  .CarouscelContainer:first-child {
    margin-top: -380px;
  }
  .CarouscelContainer {
    position: relative;
    .title {
      color: #fff;
      font-size: 2.5rem;
      padding-left: 60px;
      margin-bottom: 10px;
    }
    .active {
      background-color: #fff;
      opacity: 1;
    }
    .barContainer {
      margin-right: 60px;
      height: 20px;
      .bar {
        float: right;
        background-color: #fff;
        opacity: 0.4;
        margin-right: 0.1rem;
        width: 1rem;
        height: 0.2rem;
        margin-bottom: 10px;
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
        &:after {
          display: block;
          content: "";
          clear: both;
        }
        .detailBox {
          width: 477.8px;
          height: 352px;
          position: relative;
          float: left;
          margin: 0 0.35rem;
          .box {
            position: absolute;
            border-radius: 5px;
            img {
              position: relative;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
              transform: translateX(calc(0 * -100%));
              background-size: 100% 100%;
              height: 352px;
              width: 50%;
            }
          }
          .detail {
            width: 100%;
            display: none;
            .row {
              padding: 0 10px;
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
                &:hover {
                  background-color: 2px solid grey;
                }
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
                padding: 5px;
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
            z-index: 1;
            .box {
              border-radius: 5px;
              top: 50%;
              left: 50%;
              width: 725px;
              height: 628px;
              overflow: hidden;
              transform: translate(-50%, -58%);
              background-color: #222222;
              img {
                width: 100%;
                height: 470px;
              }
              .detail {
                display: inline-block;
              }
              .topRateSvgImg {
                display: none;
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
    .bar(v-for="(item, index) in movieData" v-if="index % 6 === 0" :class="{active : index % 6 === 0 && index === move.selected }")
  .row(:class="{rowLarge: size === 'large', rowSmall: size === 'small'}")
    .arrow.leftArrow(@click="moveRow('left')") #[mdicon(name="chevron-left" size="50")]
    .arrow.rightArrow(@click="moveRow('right')") #[mdicon(name="chevron-right" size="50")]
    .imgContainer(:style="`width: ${itemWidth}px; transform: translateX(${move.number}%)`")
      .detailBox(v-for="(item, index) in movieData")
        .box
          inline-svg.topRateSvgImg(
            :src="require(`@/assets/images/${index + 1}.svg`)"
            width="238" 
            height="352"
            fill="black"
          ) 
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
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        move: {
          number: 0,
          selected: 6,
        },
        transform: 0,
      }
    },
    computed: {
      itemWidth() {
        return this.movieData !== undefined ? this.movieData.length * 490.00000000000003 : 0
      },
    },
    methods: {
      showDetail() {
        this.$emit("openDetail")
      },
      moveRow(direction) {
        if (direction === "left") {
          this.move.number += 50
          this.move.transform = `translateX(${this.move.number}%)`
          this.move.selected += 6
          if (this.move.number > 0) {
            this.move.number = Number(Math.floor(this.movieData.length / 6) * 50)
            this.move.transform = `translateX(${this.move.number}%)`
            this.move.selected = 0
          }
        } else if (direction === "right") {
          this.move.number -= 50
          this.move.transform = `translateX(${this.move.number}%)`
          console.log(this.move.transform)

          this.move.selected -= 6
          if (this.move.number < Number(Math.floor(this.movieData.length / 6) * 50)) {
            this.move.number = 0
            this.move.transform = `translateX(${this.move.number}%)`
            this.move.selected = 18
          }
        }
      },
    },
  }
</script>
