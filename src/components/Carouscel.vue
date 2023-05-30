<style lang="scss" scoped>
  .CarouscelContainer:first-child {
    margin-top: -380px;
  }
  .CarouscelContainer {
    .title {
      position: relative;
    }
    margin: 92.16px 0;
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
    .row {
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
        overflow-x: visible;
        &:after {
          display: block;
          content: "";
          clear: both;
        }
        .detailBox {
          float: left;
          margin: 0.25rem;
          img {
            width: 481.15px;
            position: relative;
            border-radius: 10px;
          }
          img:hover {
            z-index: 101;
            transform: scale(1.5);
          }
          .detail {
            .txt {
              display: none;
              color: white;
              position: absolute;
              background: black;
            }
          }
        }
      }
    }
    .rowLarge {
      .large {
        transform: translateX(calc(0 * -100%));
        background-size: 100% 100%;
        height: 352px !important;
      }
    }
    .rowSmall {
      .small {
        transform: translateX(calc(0 * -100%));
        background-size: 100% 100%;
        height: 272px !important;
      }
    }
  }
</style>
<template lang="pug">
.CarouscelContainer
  h2.title {{ title }}
  .barContainer
    .bar(v-for="(item, index) in movieData.results" v-if="index % 6 === 0" :class="{active : index % 6 === 0 && index === move.selected }")
  .row(:class="{rowLarge: size === 'large', rowSmall: size === 'small'}")
    .arrow.leftArrow(@click="moveRow('left')") &#8249;
    .arrow.rightArrow(@click="moveRow('right')") &#8250;
    .imgContainer(:style="move")
      .detailBox(v-for="(item, index) in movieData.results" )
        img(src="@/assets/images/t.png"
            :class="{large: size === 'large', small: size === 'small'}" 
            :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}"
        )
        .detail
          p.txt 안녕11111111111111111111

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
        move: {
          number: 0,
          transform: "translateX(0%)",
          selected: 18,
        },
      }
    },
    methods: {
      moveRow(direction) {
        if (direction === "left") {
          this.move.number += 103
          this.move.transform = `translateX(${this.move.number}%)`
          this.move.selected += 6
          if (this.move.number > 0) {
            this.move.number = Number(Math.floor(this.movieData.results.length / 6) * -103)
            this.move.transform = `translateX(${this.move.number}%)`
            this.move.selected = 0
          }
        } else if (direction === "right") {
          this.move.number -= 103
          this.move.transform = `translateX(${this.move.number}%)`
          this.move.selected -= 6
          if (this.move.number < Number(Math.floor(this.movieData.results.length / 6) * -103)) {
            this.move.number = 0
            this.move.transform = `translateX(${this.move.number}%)`
            this.move.selected = 18
          }
        }
      },
    },
  }
</script>
