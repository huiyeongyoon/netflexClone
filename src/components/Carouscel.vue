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
  .carouselContainer > .row .imgArea .detailBox:hover .imgBox.firstImage {
    transform: translate(-33.5%, -50%);
  }
  .carouselContainer > .row .imgArea .detailBox:hover .imgBox.lastImage {
    transform: translate(-66.3%, -50%);
  }
</style>
<template lang="pug">
.carouselContainer
  h2.title {{ title }}
  .barArea
    .box
      .bar(v-for="currentCarouscelNumber in barSize"
          :class="{ active : currentCarouscelNumber === page || page === barSize + 1 && currentCarouscelNumber === 1 || page === 0 && currentCarouscelNumber === barSize }")
  .row
    .arrow.leftArrow(@click="prev") #[mdicon(name="chevron-left" size="50")]
    .arrow.rightArrow(@click="next") #[mdicon(name="chevron-right" size="50")]
    .imgArea(:class="{ 'replace': transitionCondition }" :style="`width: ${listWidth}px; transform: translateX(${translateXWidth}px)`")
      .detailBox(v-for="(item, index) in movieList" :class="{ 'disabled': checkArrowCondition }")
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
        handler(newVal) {
          if (newVal.results.length !== 0) {
            this.movieList = newVal.results
            this.addDataFront = newVal.results.slice(-6)
            this.addDataBack = newVal.results.slice(0, 6)

            this.movieList.unshift(...this.addDataFront)
            this.movieList.push(...this.addDataBack)

            this.totalSize = this.movieList.length
            this.listWidth = this.totalSize * 489
            this.pageSize = Math.ceil(this.totalSize / 6)
            this.barSize = this.pageSize - 2
            this.lastPageItemCount = this.totalSize % 6
          }
        },
      },
    },
    data() {
      return {
        addDataFront: [],
        addDataBack: [],
        movieList: [],
        listWidth: 0,
        itemWidth: 489,
        totalSize: 0,
        page: 1,
        barSize: 0,
        pageSize: 0,
        lastPageItemCount: 0,
        checkArrowCondition: false,
        transitionCondition: true,
        direction: "next",
      }
    },
    computed: {
      translateXWidth() {
        const itemCount = 6
        const pregentTranslateXPlace = this.itemWidth * (this.page - 1) * itemCount * -1 // index가 0 부터 시작 하기때문에 -1해줌
        const remainingItemstranslateXSize = this.itemWidth * (itemCount - (itemCount - this.lastPageItemCount))
        let transLateCoordination = this.itemWidth * this.page * itemCount * -1

        if (this.page >= this.pageSize - 2) {
          transLateCoordination = pregentTranslateXPlace - remainingItemstranslateXSize
        }

        if (this.direction === "prev") {
          if (this.page > 1) {
            transLateCoordination = pregentTranslateXPlace - remainingItemstranslateXSize
          }
        }
        return transLateCoordination
      },
    },
    methods: {
      getImgBoxClass(index) {
        let result = ""
        let newItemIndex = null

        if (this.direction === "next") {
          newItemIndex = this.page === this.pageSize - 2 ? index - this.lastPageItemCount : index
        } else if (this.direction === "prev") {
          newItemIndex = this.page === 1 ? index : index - this.lastPageItemCount
        }

        if (newItemIndex % 6 === 0) {
          result = "firstImage"
        } else if (newItemIndex % 6 === 5) {
          result = "lastImage"
        }
        return result
      },

      prev() {
        if (!this.checkArrowCondition) {
          this.direction = "prev"
          this.page--
          this.transitionCondition = true

          if (this.page < 1) {
            this.setTransitionTime(this.direction)
          }
          this.stopCarouscel()
        }
      },

      next() {
        if (!this.checkArrowCondition) {
          this.direction = "next"
          this.page++
          this.transitionCondition = true

          if (this.page > this.pageSize - 2) {
            this.setTransitionTime(this.direction)
          }
          this.stopCarouscel()
        }
      },

      stopCarouscel() {
        this.checkArrowCondition = true
        setTimeout(() => {
          this.checkArrowCondition = false
        }, 1000)
      },

      setTransitionTime(direction) {
        setTimeout(() => {
          this.transitionCondition = false
          if (direction === "prev") {
            this.page = this.pageSize - 2
          } else if (direction === "next") {
            this.page = 1
          }
        }, 1000)
      },

      showModal() {
        this.$emit("openDetail")
      },
    },
  }
</script>
