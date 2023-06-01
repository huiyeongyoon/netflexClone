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
      font-size: 2.5rem;
      padding-left: 60px;
      margin-bottom: 10px;
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
          font-size: 5rem;
          color: #fff;
          border: none;
          width: 38px;
          height: 100%;
          z-index: 100;
          margin: 0;
          padding: 0;
          cursor: pointer;
          transition: font-size 150ms ease-in-out;
          &:hover {
            font-size: 6rem;
          }
        }
      }
      .leftArrow {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: black;
        opacity: 0.4;
        z-index: 50;
      }
      .rightArrow {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        background-color: black;
        opacity: 0.4;
        z-index: 50;
      }
      .imgContainer {
        //489.15px 개당
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
            border-radius: 10px;
            background-color: #3d3d3dc4;
          }
          img {
            width: 100%;
            position: relative;
            border-radius: 10px;
            transform: translateX(calc(0 * -100%));
            background-size: 100% 100%;
            height: 272px !important;
          }
          .detail {
            width: 100%;
            display: none;
            .row {
              margin: 20px 0;
              &:after {
                content: "";
                display: block;
                clear: both;
              }
              .playButton {
                margin-left: 8px;
                border-radius: 50%;
                color: #141414c4;
                padding: 0;
              }
              .bordering {
                margin-left: 8px;
                vertical-align: middle;
                border: 1px solid #fff;
                color: #fff;
                background-color: #2f2f2f;
                border-radius: 50%;
                padding: 8px;
              }
              .arrowBottom {
                float: right;
                margin-right: 8px;
              }
              .white {
                display: inline-block;
                font-size: 0.8rem;
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
              border-radius: 10px;
              transition: 0.5s;
              top: -70px;
              // width: 700px;
              // height: 400px;
              // left: 50%;
              // top: 50%;
              overflow: hidden;
              transform: scale(1.45);
              .detail {
                padding: 15px 0;
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
    .imgContainer(:style="move")
      .detailBox(v-for="(item, index) in movieData.results")
        .box
          img(@mouseover="selectedHover"
            src="@/assets/images/t.png"
            :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}"
          )
          .detail
            .row
              el-button.playButton
                mdicon(name="play" size="30") 
              inline-svg.bordering(
                :src="require('@/assets/images/plus.svg')"
                width="14" 
                height="14"
                fill="black"
              ) 
              inline-svg.bordering(
                :src="require('@/assets/images/like.svg')"
                width="14" 
                height="14"
                fill="black"
              )
              inline-svg.bordering.arrowBottom(
                :src="require('@/assets/images/arrowbottom.svg')"
                width="14" 
                height="14"
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
          transform: "translateX(0%)",
          selected: 18,
        },
      }
    },
    methods: {
      selectedHover() {
        this.isHovered = true
      },
      moveRow(direction) {
        if (direction === "left") {
          this.move.number += 25
          this.move.transform = `translateX(${this.move.number}%)`
          this.move.selected += 6
          if (this.move.number > 0) {
            this.move.number = Number(Math.floor(this.movieData.results.length / 6) * -25)
            this.move.transform = `translateX(${this.move.number}%)`
            this.move.selected = 0
          }
        } else if (direction === "right") {
          this.move.number -= 25
          this.move.transform = `translateX(${this.move.number}%)`
          this.move.selected -= 6
          if (this.move.number < Number(Math.floor(this.movieData.results.length / 6) * -25)) {
            this.move.number = 0
            this.move.transform = `translateX(${this.move.number}%)`
            this.move.selected = 18
          }
        }
        console.log(this.move.selected)
      },
    },
  }
</script>
