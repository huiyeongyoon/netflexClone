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
  .carouselContainer > .row .imgArea .detailBox:hover .imgBox.firstImage {
    transform: translate(-33.5%, -50%);
  }
  .carouselContainer > .row .imgArea .detailBox:hover .imgBox.lastImage {
    transform: translate(-66.2%, -50%);
  }
</style>
<template lang="pug">
.carouselContainer
  h2.title {{ title }}
  .barArea
    .box
      .bar(v-for="currentCarouscelNumber in barSize" :class="{ active : currentCarouscelNumber === page }")
  .row
    .arrow.leftArrow(@click="prev") #[mdicon(name="chevron-left" size="50")]
    .arrow.rightArrow(@click="next") #[mdicon(name="chevron-right" size="50")]
    .imgArea(:style="`width: ${listWidth}px; transform: translateX(${translateXWidth}px)`")
      .detailBox(v-for="(item, index) in movieList" :class="{ 'disabled': checkArrowCondition }")
        p(style="color: red") {{ index + 1}}
        .imgBox(:class="getImgBoxClass(index)")
          inline-svg.numberImage(
            :src="require(`@/assets/images/${item.rank}.svg`)"
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
      // 한번만 실행되고 실행되면 안되
      movieData: {
        immediate: true,
        handler(newVal) {
          if (newVal.length !== 0) {
            newVal.slice(10).map((item, i) => {
              item.rank = i + 1
              this.movieList.push(item)
            })

            this.addDataFront = this.movieList.slice(-6)
            this.addDataBack = this.movieList.slice(0, 6)
            this.barSize = Math.ceil(this.movieList.length / 6)

            this.movieList.unshift(...this.addDataFront)
            this.movieList.push(...this.addDataBack)

            this.totalSize = this.movieList.length
            this.listWidth = this.totalSize * 489
            this.pageSize = Math.ceil(this.totalSize / 6)
            this.lastPageItemCount = this.totalSize % 6
          }
        },
      },
      // page: {
      // handler(newVal) {
      //   if (newVal === 0) {
      //     console.log("새로 만든 앞 데이터event")
      //     this.movieList.unshift(...this.addDataFront)
      //     this.totalSize = this.movieList.length
      //     this.listWidth = this.totalSize * 489
      //     this.lastPageItemCount = this.totalSize % 6
      //   } else if (newVal === this.pageSize) {
      //     console.log("새로 만든 뒷 데이터event")
      //     this.movieList.push(...this.addDataBack)
      //     this.totalSize = this.movieList.length
      //     this.listWidth = this.totalSize * 489
      //     this.lastPageItemCount = this.totalSize % 6
      //   } else {
      //     console.log("기본 데이터event")
      //   }
      // },
      // },
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
        transitionCondition: false,
      }
    },
    computed: {
      translateXWidth() {
        let itemWidth = 0
        if (this.page >= this.pageSize - 2) {
          itemWidth = this.itemWidth * (this.page - 1) * 6 * -1 - this.itemWidth * (6 - (6 - this.lastPageItemCount))
          return itemWidth
        } else {
          itemWidth = this.itemWidth * this.page * 6 * -1
          return itemWidth
        }
      },
    },
    methods: {
      stopCarouscel() {
        this.checkArrowCondition = true
        setTimeout(() => {
          this.checkArrowCondition = false
        }, 1000)
      },
      getImgBoxClass(index) {
        let result = ""
        let newItemIndex = this.page === this.pageSize ? index - this.lastPageItemCount : index
        if (newItemIndex % 6 === 0) {
          result = "firstImage"
        } else if (newItemIndex % 6 === 5) {
          result = "lastImage"
        }
        return result
      },
      showModal() {
        this.$emit("openDetail")
      },
      // 페이지가 1일떄 1 2 3 4 5 6
      // 페이지가 2일떄 5 6 7 8 9 10
      // 페이지가 3일떄 1 2 3 4 5 6
      // 페이지가 4일대 5 6 7 8 9 10
      prev() {
        if (!this.checkArrowCondition) {
          this.page--
          if (this.page === 0) {
            setTimeout(() => {
              this.page = this.pageSize - 2
            }, 1000)
          }
          this.stopCarouscel()
        }
      },
      next() {
        if (!this.checkArrowCondition) {
          this.page++
          if (this.page > this.pageSize - 2) {
            setTimeout(() => {
              this.page = 1
            }, 1000)
          }
          this.stopCarouscel()
        }
      },
    },
  }
</script>
