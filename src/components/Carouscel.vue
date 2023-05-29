<style lang="scss" scoped>
  .CarouscelContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .title {
      color: #fff;
      padding-left: 40px;
      padding: 20px 0 0 40px;
      font-size: 1.2rem;
    }
    .barContainer {
      margin-right: 18px;
    }
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
    .row {
      padding: 0 35px;
      position: relative;

      &:hover {
        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;
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
        position: relative;
        display: flex;
        width: 97%;
        img {
          position: relative;
        }
        img:hover {
          transform: scale(1.5);
          z-index: 10000;
        }
        .detailBox {
          .txt {
            display: none;
            color: white;
            position: absolute;
            z-index: 100000;
            background: black;
          }
        }
      }
    }
    .rowLarge {
      .large {
        transform: translateX(calc(0 * -97%));
        flex: 0 0 16.8%;
        aspect-ratio: 1 / 0.7;
        background-size: 100% 100%;
        margin: 0.25rem;
      }
    }
    .rowSmall {
      .small {
        transform: translateX(calc(0 * -97%));
        flex: 0 0 16.8%;
        aspect-ratio: 16 / 9;
        background-size: 100% 100%;
        margin: 0.25rem;
      }
    }
  }

  @media (max-width: 1080px) {
  }
</style>
<template lang="pug">
.CarouscelContainer
  h2.title {{ title }}
  .borContainer
    .bar(v-for="(item, index) in movieData.results" v-if="index % 6 === 0" :class="{active : index % 6 === 0 && index === move.selected }")
  .row(:class="{rowLarge: size === 'large', rowSmall: size === 'small'}")
    .arrow.leftArrow(@click="moveRow('left')") &#8249;
    .imgContainer(:style="move")
      template.detail(v-for="(item, index) in movieData.results" )
        img(:class="{large: size === 'large', small: size === 'small'}" 
            :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}"
        )
        .detailBox
          p.txt 안녕11111111111111111111

    .arrow.rightArrow(@click="moveRow('right')") &#8250;
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
