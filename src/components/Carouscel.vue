<style lang="scss" scoped>
  .detailBox {
    height: 272px;
    img {
      display: block;
      width: 100%;
      position: relative;
      transform: translateX(calc(0 * -100%));
      background-size: 100% 100%;
      height: 272px;
    }
  }

  .CarouscelContainer > .row .imgArea .detailBox:hover .imgBox.firstImage {
    transform: translate(-30%, -58%);
  }

  .lastImage {
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
      //- .detailBox(v-for="(item, index) in movieData.results" @mouseout="detailActive = null" @mouseover="showDetail(index)")
      //-   .imgBox(:class="{ firstImage: detailActive === 2, lastImage: detailActive === 3 }")
      .detailBox(v-for="(item, index) in movieData.results")
        .imgBox(:class="{ firstImage: index === 0 || (index !== 0 && index % 6 === 0), lastImage: index % 5 === 0 }")
          img(
            src="@/assets/images/t.png"
            :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}"
          )
          //- span(style="color:#fff").
          //-   {{ (index % 6 === 0) ? 'left' : '' }}
          //-   {{ (index % 5 === 0) ? 'right' : '' }}
          //-   {{ index }}, {{ index % 5 }}, {{ index % 6 }}
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
                @click="showModal"
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
          selected: 1,
        },
        transform: 0,
        listWidth: 0,
      }
    },
    computed: {
      getItemWidth() {
        return this.movieData.results !== undefined ? this.movieData.results.length * 489.00000000000006 : 0
      },
      getMovieCount() {
        return this.movieData.results !== undefined ? Math.ceil(this.movieData.results.length / 6) : 0
      },
    },
    methods: {
      showModal() {
        this.$emit("openDetail")
      },
      moveRow(direction) {
        let index = 0
        let pageSize = Math.ceil(this.movieData.results.length / 6)
        let translateXWidth = 100
        while (pageSize) {
          if (index * pageSize >= translateXWidth) {
            break
          } else {
            index++
          }
        }
        if (direction === "left") {
          this.move.selected -= 1
          this.move.translateXWidth += index
          if (this.move.selected < 1) {
            this.move.translateXWidth -= translateXWidth
            this.move.selected = pageSize
          }
        } else if (direction === "right") {
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
