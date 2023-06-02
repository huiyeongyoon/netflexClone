<style lang="scss" scoped>
  .hovered {
    z-index: 1000;
  }
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
      .bar {
        float: right;
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
      &:hover {
        .arrow {
          height: 100%;
          font-size: 5rem;
          color: #fff;
          border: none;
          width: 56px;
          border-radius: 5px;
          height: 100%;
          z-index: 100;
          margin: 0;
          padding: 0;
          cursor: pointer;
          transition: font-size 150ms ease-in-out;
          line-height: 240px;
        }
      }
      .leftArrow {
        position: absolute;
        left: 0;
        top: 0;
        background-color: black;
        opacity: 0.4;
        z-index: 50;
      }
      .rightArrow {
        position: absolute;
        right: 0;
        top: 0;
        background-color: black;
        opacity: 0.4;
        z-index: 50;
      }
      .imgContainer {
        width: 9783px;
        overflow-x: visible;
        .detailBox {
          display: inline-block;
          position: relative;
          margin: 0.25rem;
          width: 481.15px;
          height: 272px;
          .box {
            position: absolute;
            background-color: #222222;
            border-radius: 5px;
            overflow: hidden;
            img {
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
                border: 1px solid #fff;
                color: #fff;
                background-color: #222222;
                border-radius: 50%;
                padding: 8px;
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
.CarouscelContainer(:class="{ 'hovered': isHovered }")
  h2.title {{ title }}
  .barContainer
    .bar(v-for="(item, index) in movieData.results" v-if="index % 6 === 0" :class="{ active : index % 6 === 0 && index === move.selected }")
  .row
    .arrow.leftArrow(@click="moveRow('left')") &#8249;
    .arrow.rightArrow(@click="moveRow('right')") &#8250;
    .imgContainer(:style="`transform: translateX(${move.number}%)`")
      .detailBox(v-for="(item, index) in movieData.results")
        .box
          img(@mouseover="selectedHover"
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
    data() {
      return {
        isHovered: false,
        move: {
          number: 0,
          selected: 18,
        },
        transform: 0,
      }
    },
    methods: {
      selectedHover() {
        this.isHovered = true
      },
      moveRow(direction) {
        if (direction === "left") {
          this.move.number += 25
          this.move.selected += 6
          if (this.move.number > 0) {
            this.move.number = Number(Math.floor(this.movieData.results.length / 6) * -25)
            this.move.selected = 0
          }
        } else if (direction === "right") {
          this.move.number -= 25
          this.move.selected -= 6
          if (this.move.number < Number(Math.floor(this.movieData.results.length / 6) * -25)) {
            this.move.number = 0
            this.move.selected = 18
          }
        }
      },
    },
  }
</script>
