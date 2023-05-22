<style lang="scss" scoped>
  .main {
    height: 100%;
    .imageArea {
      position: relative;
      .backgroundImage {
        margin-top: 68px;
        width: 100%;
        height: 88vh;
      }
      .movieInfo {
        position: absolute;
        bottom: 11.5%;
        left: 60px;
        color: #fff;
        .title {
          font-size: 90px;
          margin: 0 0 30px 0;
        }
        .rankingTxt {
          font-size: 36px;
          margin: 0 0 20px 0;
        }
        .txt {
          max-width: 700px;
          font-size: 24px;
          margin: 0 0 30px 0;
        }
        .playButton {
          display: inline-flex;
          align-items: center;
          height: 42px;
          width: 120px;
          color: black;
          font-size: 16px;
          border: none;
        }
        .detailButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          width: 160px;
          background-color: rgba(109, 109, 110, 0.4);
          color: #fff;
          border: none;
          font-size: 16px;
          .mdi {
            span {
              display: flex;
              align-items: center;
            }
            margin-right: 9px;
          }
        }
      }
      .box {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 17%;
        right: 0px;
        color: #fff;
        .mdi {
          margin-right: 20px;
        }
        .videoOption {
          display: flex;
          align-items: center;
          background-color: rgba(51, 51, 51, 0.6);
          border: 3px #dcdcdc;
          border-left-style: solid;
          box-sizing: border-box;
          font-size: 1.1vw;
          height: 2.4vw;
          padding: 0.5vw 4.3vw 0.5vw 0.8vw;
          .txt {
            font-size: 1.1vw;
          }
        }
      }
    }
    .listArea,
    .topListArea {
      .title {
        color: #e5e5e5;
        display: inline-block;
        font-size: 1.4vw;
        font-weight: 500;
        min-width: 6em;
        text-decoration: none;
      }
    }
  }
</style>

<template lang="pug">
.main
  .imageArea
    img.backgroundImage(src="@/assets/images/backgroundImage.png")
    .movieInfo
      h2.title 블랙미러
      p.rankingTxt 시리즈 순위
      p.txt Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      el-button.playButton #[mdicon(name="play" size="35")] 재생
      el-button.detailButton(@click="showDetail") #[mdicon(name="AlertCircleOutline" size="28")] 상세정보
    .box
      mdicon(name="Replay" size="25")  
      .videoOption
        span.txt 18
  .topListArea
    h3.title 오늘 대한민국의 TOP10 시리즈
    Carouscel-Component(:datas='form2')
  .listArea
    h3.title 드라마
    Carouscel-Component(:datas='form')
  .listArea
    h3.title 지금 뜨는 콘텐츠
    Carouscel-Component(:datas='form')
  Detail(:visible="visible" :selected="selected")
</template>

<script>
  import CarouscelComponent from "@/components/CarouscelComponent"
  import Detail from "./components/detail"
  export default {
    components: {
      CarouscelComponent,
      Detail,
    },
    data() {
      return {
        visible: false,
        form: [
          {
            title: "피지컬100",
            ranking: 12,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/1.png"),
            random: 1,
          },
          {
            title: "나쁜엄마",
            ranking: 22,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/2.png"),
            random: 2,
          },
          {
            title: "김씨네편의점",
            ranking: 33,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/3.png"),
            random: 4,
          },
          {
            title: "지옥락",
            ranking: 41,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/4.png"),
            random: 6,
          },
          {
            title: "피지컬100",
            ranking: 12,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/1.png"),
            random: 6,
          },
          {
            title: "나쁜엄마",
            ranking: 94,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/2.png"),
            random: 8,
          },
          {
            title: "김씨네편의점",
            ranking: 23,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/3.png"),
            random: 3,
          },
          {
            title: "지옥락",
            ranking: 14,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/4.png"),
            random: 1,
          },
          {
            title: "피지컬100",
            ranking: 12,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/1.png"),
            random: 9,
          },
          {
            title: "나쁜엄마",
            ranking: 23,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/2.png"),
            random: 7,
          },
          {
            title: "김씨네편의점",
            ranking: 43,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/3.png"),
            random: 1,
          },
          {
            title: "지옥락",
            ranking: 42,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/4.png"),
            random: 7,
          },
          {
            title: "피지컬100",
            ranking: 81,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/1.png"),
            random: 8,
          },
          {
            title: "나쁜엄마",
            ranking: 62,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/2.png"),
            random: 6,
          },
          {
            title: "김씨네편의점",
            ranking: 37,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/3.png"),
            random: 6,
          },
          {
            title: "지옥락",
            ranking: 47,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/4.png"),
            random: 1,
          },
        ],
        form2: [
          {
            title: "나쁜엄마",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top1.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "택배기사",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top2.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "차정숙",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top3.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "구미호뎐",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top4.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "차정숙",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top3.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "구미호뎐",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top4.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "차정숙",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top3.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "구미호뎐",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top4.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "차정숙",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top3.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "구미호뎐",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top4.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "차정숙",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top3.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "구미호뎐",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top4.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "차정숙",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top3.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "구미호뎐",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top4.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
          {
            title: "종이달",
            ranking: 1,
            sugesstion: "82%",
            season: 1,
            stroy: 12,
            favorite: 300,
            like: 200,
            filmRating: 15,
            kind: "힐링",
            image: require("@/assets/images/top5.png"),
            rankingImage: require("@/assets/images/ranking.png"),
            random: 1,
          },
        ],
        selected: {},
      }
    },
    methods: {
      showDetail() {
        this.visible = true
        let random = Math.floor(Math.random() * (10 - 0) + 1)
        this.form.forEach(item => {
          if (item.random === random) {
            this.selected = item
          }
        })
        console.log(this.selected)
      },
    },
  }
</script>
