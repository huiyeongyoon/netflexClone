https://codepen.io/RadDog25/pen/eYNMawe
<style lang="scss" scoped>
  $vue-white: #fff;

  .card-carousel-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px;
  }

  .card-carousel {
    display: flex;
    justify-content: center;
    width: 98vw;
    &--overflow-container {
      overflow: hidden;
    }
  }

  .card-carousel-cards {
    display: flex;
    .card-carousel--card {
      position: relative;
      margin: 0 7px 0 0;
      box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
      border-radius: 4px;
      z-index: 3;
      margin-bottom: 2px;
      focus-within :hover {
        .zoom {
          transform: translateX(-25%);
        }
      }
      .top10ListNumber {
        position: absolute;
        left: 60px;
        height: 240px;
        z-index: -1;
      }
      .top10List {
        position: absolute;
        right: 30px;
        height: 240px;
        width: 170px;
        z-index: 1;
      }
      .zoom {
        height: 240px;
        width: 341px;
        position: relative;
        display: block;
        flex: 1 1 0px;
        transition: transform 500ms;
      }
      img {
        vertical-align: bottom;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: opacity 150ms linear;
        user-select: none;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
  .card-carousel-wrapper:hover {
    .card-carousel {
      &--nav__left,
      &--nav__right {
        z-index: 100;
        display: inline-block;
        width: 15px;
        height: 15px;
        padding: 10px;
        box-sizing: border-box;
        border-top: 5px solid $vue-white;
        border-right: 5px solid $vue-white;
        cursor: pointer;
        margin: 0 20px;
        transition: transform 150ms linear;
      }

      &--nav__left {
        position: absolute;
        top: calc(50% - 15px);
        left: 0px;
        transform: rotate(-135deg);
        &:active {
          transform: rotate(-135deg) scale(0.9);
        }
      }

      &--nav__right {
        position: absolute;
        top: calc(50% - 15px);
        right: 0;
        transform: rotate(45deg);
        &:active {
          transform: rotate(45deg) scale(0.9);
        }
      }

      &--overflow-container {
        overflow: hidden;
      }
    }
  }
</style>
<template lang="pug">
.card-carousel-wrapper
  .card-carousel--nav__left(
    @click="moveCarousel(-1)"
    :disabled="atHeadOfList"
  )
  .card-carousel
    .card-carousel--overflow-container
      .card-carousel-cards(:style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}")
        .card-carousel--card(v-for="item in datas")
          a.zoom(href="javascript:") 
            img.top10ListNumber(v-if="item.ranking <= 10" :src='item.rankingImage')
            img.top10List(v-if="item.ranking <= 10" :src='item.image')
            img(v-else :src='item.image')
  .card-carousel--nav__right(
    @click="moveCarousel(1)"
    :disabled="atEndOfList"
  )
</template>

<script>
  export default {
    name: "CarouscelComponent",
    props: {
      datas: {
        type: Array,
        default: () => {},
      },
    },
    data() {
      return {
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
      }
    },
    computed: {
      atEndOfList() {
        return this.currentOffset <= this.paginationFactor * -1 * (this.datas.length - this.windowSize)
      },
      atHeadOfList() {
        return this.currentOffset === 0
      },
    },
    methods: {
      moveCarousel(direction) {
        if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor
        }
      },
    },
  }
</script>
