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
    transform: translate(-33.5%, -50%);
  }
  .CarouscelContainer > .row .imgArea .detailBox:hover .imgBox.lastImage {
    transform: translate(-66.3%, -50%);
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
      .detailBox(v-for="(item, index) in movieData.results")
        .imgBox(:class="getImgBoxClass(index)")
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
        type: Object,
        default: () => {},
      },
    },
    watch: {
      movieData: {
        immediate: true,
        handler(newVal) {
          if (newVal.results !== undefined) {
            this.totalSize = newVal.results.length
            this.listWidth = this.totalSize * 489
            this.pageSize = Math.ceil(this.totalSize / 6)
            this.lastPageItemCount = this.totalSize % 6
          }
        },
      },
    },
    data() {
      return {
        listWidth: 0,
        itemWidth: 489,
        totalSize: 0,
        page: 1,
        pageSize: 0,
        lastPageItemCount: 0,
        checkLastPage: false,
        // translateXWidth: 0,
      }
    },
    computed: {
      translateXWidth() {
        if (this.page === this.pageSize) {
          this.setCheckLastPage(true)
          return this.itemWidth * (this.page - 2) * 6 * -1 - this.itemWidth * (6 - (6 - this.lastPageItemCount))
        } else {
          this.setCheckLastPage(false)
          return this.itemWidth * (this.page - 1) * 6 * -1
        }
      },
    },
    methods: {
      getImgBoxClass(index) {
        let result = ""
        if (!this.checkLastPage) {
          if (index % 6 === 0) {
            result = "firstImage"
          } else if (index % 6 === 5) {
            result = "lastImage"
          }
        } else if (this.checkLastPage) {
          if ((index - this.lastPageItemCount) % 6 === 0) {
            result = "firstImage"
          } else if ((index - this.lastPageItemCount) % 6 === 5) {
            result = "lastImage"
          }
        }
        // if ((!this.checkLastPage && index % 6 === 0) || ((index - this.lastPageItemCount) % 6 === 0)) {
        //   result = "firstImage"
        // } else if ((!this.checkLastPage && index % 6 === 5) || (index - this.lastPageItemCount) % 6 === 5) {
        //   result = "lastImage"
        // }

        // if ((!this.checkLastPage && index % 6 === 0) || (this.checkLastPage && (index + 6 - (6 - this.pageSize)) % 6 === 0)) {
        //   result = "firstImage"
        // } else if ((!this.checkLastPage && index % 6 === 5) || (this.checkLastPage && (index + 6 - (6 - this.pageSize)) % 6 === 5)) {
        //   result = "lastImage"
        // }
        return result
      },
      showModal() {
        this.$emit("openDetail")
      },
      setCheckLastPage(val) {
        this.checkLastPage = val
      },
      // getTransLateWidthLength() {
      //   let currentPageTranslateWidth = this.itemWidth * (this.page - 1) * 6 * -1
      //   let lastPageTranslateWidth = this.itemWidth * (this.page - 2) * 6 * -1 - this.itemWidth * (6 - (6 - this.lastPageItemCount))

      //   if (this.page === this.pageSize) {
      //     this.translateXWidth = lastPageTranslateWidth
      //     this.checkLastPage = true
      //   } else {
      //     this.translateXWidth = currentPageTranslateWidth
      //     this.checkLastPage = false
      //   }
      // },
      prev() {
        this.page--
        if (this.page < 1) {
          this.page = this.pageSize
        }
        // this.getTransLateWidthLength()
      },
      next() {
        this.page++
        if (this.page > this.pageSize) {
          this.page = 1
        }
        // this.getTransLateWidthLength()
      },
    },
  }
</script>
