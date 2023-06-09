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
  .CarouscelContainer > .row .imgArea .detailBox:hover .imgBox.firstImage {
    transform: translate(-33.5%, -50%);
  }
  .CarouscelContainer > .row .imgArea .detailBox:hover .imgBox.lastImage {
    transform: translate(-66.2%, -50%);
  }
</style>
<template lang="pug">
.CarouscelContainer
  h2.title {{ title }}
  .barArea
    .box
      .bar(v-for="currentCarouscelNumber in pageSize" :class="{ active : currentCarouscelNumber === page }")
  .row
    .arrow.leftArrow(@click="prev") #[mdicon(name="chevron-left" size="50")]
    .arrow.rightArrow(@click="next") #[mdicon(name="chevron-right" size="50")]
    .imgArea(:style="`width: ${listWidth}px; transform: translateX(${translateXWidth}px)`")
      .detailBox(v-for="(item, index) in movieData")
        .imgBox(v-if="page === pageSize" :class="{ firstImage:(index + 6 - (6 - pageSize)) % 6 === 0, lastImage: (index + 6 - (6 - pageSize)) % 6 === 5}")
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
        .imgBox(v-else :class="{ firstImage:index % 6 === 0, lastImage: index % 6 === 5}")
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
        type: Array,
        default: () => [],
      },
    },
    watch: {
      movieData: {
        immediate: true,
        handler(newVal) {
          if (newVal !== undefined) {
            this.listWidth = newVal.length * 489
            this.pageSize = Math.ceil(newVal.length / 6)
            this.lastPageItemCount = this.movieData.length % 6
          }
        },
      },
    },
    data() {
      return {
        move: {
          translateXWidth: 0,
        },
        page: 1,
        listWidth: 0,
        pageSize: 0,
        lastPageItemCount: 0,
        itemSize: 489,
      }
    },
    computed: {
      translateXWidth() {
        if (this.page === this.pageSize) {
          console.log(this.itemSize * (this.page - 2) * 6 * -1 - this.itemSize * (6 - (6 - this.lastPageItemCount)))
          return this.itemSize * (this.page - 2) * 6 * -1 - this.itemSize * (6 - (6 - this.lastPageItemCount))
        } else {
          return this.itemSize * (this.page - 1) * 6 * -1
        }
      },
    },
    methods: {
      showModal() {
        this.$emit("openDetail")
      },
      prev() {
        this.page--
        if (this.page < 1) {
          this.page = this.pageSize
        }
      },
      next() {
        this.page++
        if (this.page > this.pageSize) {
          this.page = 1
        }
      },
    },
  }
</script>
