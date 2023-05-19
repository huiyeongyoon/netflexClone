<style lang="scss" scoped>
  .main {
    height: 100%;
    .imageArea {
      z-index: -100;
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
          height: 42px;
          padding: 0 2rem 0 2.4rem;
          color: black;
          border: none;
        }
        .detailButton {
          height: 42px;
          padding: 0 2rem 0 2.4rem;
          background-color: rgba(109, 109, 110, 0.4);
          color: #fff;
          border: none;
        }
      }
      .box {
        position: absolute;
        bottom: 17%;
        right: 0px;
        color: #fff;
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
    .listArea {
      .title {
        padding: 10px 0 10px 10px;
      }
      ul {
        display: flex;
        li {
          margin: 0 5px;
          border: 3px solid purple;
          width: 300px;
          height: 200px;
        }
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
      el-button.playButton 재생
      el-button.detailButton 상세정보 (상세 페이지)
    .box
      .videoOption
        span.txt 18
  .listArea
    h3.title 드라마
    ul
      li 영화 리스트
      li 영화 리스트
      li 영화 리스트
  .listArea
    h3.title 드라마
    ul
      li 영화 리스트
      li 영화 리스트
      li 영화 리스트
  .listArea
    h3.title 드라마
    ul
      li 영화 리스트
      li 영화 리스트
      li 영화 리스트
</template>

<script>
  export default {}
</script>
