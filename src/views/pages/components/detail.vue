<style lang="scss">
  .el-dialog {
    width: 95%;
    min-height: 80%;
    margin-top: 10vh;
    background-color: #141414;

    .el-dialog__header {
      padding: 0;
      .el-dialog__close {
        display: none;
      }
    }
    .el-dialog__body {
      position: relative;
      padding: 0;
      color: #fff;
      font-size: 16px;
      .header {
        .mdi {
          position: absolute;
          top: 10px;
          right: 10px;
          color: black;
        }
        img {
          width: 100%;
        }
        .txtBox {
          display: flex;
          justify-content: space-evenly;
          .left {
            width: 65%;
          }
          .right {
            width: 35%;
          }
        }
      }
    }
  }
</style>
<template lang="pug">
el-dialog(:visible='visible')
  .header
    mdicon(name="AlphaXCircle" size="40")
    img(:src="selected.image")
    .txtBox
      .left
        span {{ selected.sugesstion }} 일치
        span 2019 시즌 {{ selected.season }}개
        p 스토리: he 1500s, when an unknown  when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print when an unknown print tookp intLorem Ipsum.
      .right
        span 출연: 가브리엘
        span 장르: {{ selected.kind }}
        span 시리즈 특징: {{ selected.kind }}

    //- p {{ selected }}
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      selected: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>
