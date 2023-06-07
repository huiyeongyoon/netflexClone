<style lang="scss" scoped>
  .detailBox {
    height: 352px;
    img {
      position: relative;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      transform: translateX(calc(0 * -100%));
      background-size: 100% 100%;
      height: 352px;
      width: 50%;
    }
    :hover {
      img {
        width: 100%;
      }
      .numberImage {
        display: none;
      }
    }
  }
</style>
<template lang="pug">
.CarouscelContainer
  h2.title {{ title }}
  .barArea
    .box
      .bar(v-for="index in getMovieCount" :class="{ active : index === move.selected }")
  .row
    .arrow.leftArrow(@click="moveRow('left')") #[mdicon(name="chevron-left" size="50")]
    .arrow.rightArrow(@click="moveRow('right')") #[mdicon(name="chevron-right" size="50")]
    .imgArea(:style="`width: ${getItemWidth}px; transform: translateX(${move.translateXWidth}%)`")
      .detailBox(v-for="(item, index) in movieData")
        .imgBox
          inline-svg.numberImage(
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
          translateXWidth: 0,
          selected: 1,
        },
        transform: 0,
        listWidth: 0,
      }
    },
    computed: {
      getItemWidth() {
        return this.movieData !== undefined ? this.movieData.length * 490.00000000000003 : 0
      },
      getMovieCount() {
        return this.movieData !== undefined ? Math.ceil(this.movieData.length / 6) : 0
      },
    },
    methods: {
      showDetail() {
        this.$emit("openDetail")
      },
      moveRow(direction) {
        let index = 0
        let pageSize = Math.ceil(this.movieData.length / 6)
        let translateXWidth = 100
        while (pageSize) {
          if (index * pageSize >= translateXWidth) {
            break
          } else {
            index++
          }
        }
        if (direction === "left") {
          console.log("left")
          this.move.selected -= 1
          this.move.translateXWidth += index
          if (this.move.selected < 1) {
            this.move.translateXWidth -= translateXWidth
            this.move.selected = pageSize
          }
        } else if (direction === "right") {
          console.log("right")
          this.move.selected += 1
          this.move.translateXWidth -= index
          if (this.move.selected > pageSize) {
            this.move.translateXWidth = 0
            this.move.selected = 1
          }
        }
      },
    },
  }
</script>
