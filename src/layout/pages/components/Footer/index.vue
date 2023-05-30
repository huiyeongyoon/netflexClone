<style lang="scss" scoped>
  footer {
    margin: 70px 915px 10px 915px;
    padding: 0 130px;
    .iconArea {
      margin-bottom: 20px;
      .mdi {
        color: #fff;
        margin: 0.6rem;
      }
    }
    .linkArea {
      .rowBox {
        line-height: 20px;
        .txtLink {
          display: inline-block;
          width: 25%;
          font-size: 0.8rem;
          text-decoration: none;
          color: grey;
          margin-bottom: 1rem;
        }
        .txtLink:hover {
          text-decoration: underline;
        }
        .border {
          margin: 50px 0;
          font-size: 0.8rem;
          text-decoration: none;
          color: grey;
          margin-bottom: 1.5rem;
          border: 1px solid grey;
          padding: 0.4rem;
        }
        .border:hover {
          text-decoration: none;
        }
      }
      .borderSize {
        margin: 30px 0;
      }
    }
    .txt {
      margin-bottom: 6px;
      font-size: 12px;
      color: grey;
    }
  }
</style>
<template lang="pug"> 
footer
  .iconArea
    a(href="javascript:;")
      mdicon(name="facebook" size="28")
    a(href="javascript:;")
      mdicon(name="instagram" size="28")
    a(href="javascript:;")
      mdicon(name="twitter" size="28")
    a(href="javascript:;")
      mdicon(name="youtube" size="28")
  .linkArea
    .rowBox
      a.txtLink(href="javascript:;") 화면해설
      a.txtLink(href="javascript:;") 고객센터
      a.txtLink(href="javascript:;") 기프트카드
      a.txtLink(href="javascript:;") 미디어 센터
    .rowBox
      a.txtLink(href="javascript:;") 투자 정보(IR)
      a.txtLink(href="javascript:;") 입사 정보
      a.txtLink(href="javascript:;") 이용 약관
      a.txtLink(href="javascript:;") 개인정보
    .rowBox
      a.txtLink(href="javascript:;") 법적 고지
      a.txtLink(href="javascript:;") 쿠키 설정
      a.txtLink(href="javascript:;") 회사 정보
      a.txtLink(href="javascript:;") 문의하기
    .rowBox.borderSize 
      a.border(href="javascript:;") 서비스 코드
    p.txt 넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587
    p.txt 대표: 레지널드 숀 톰프슨
    p.txt 이메일 주소: korea@netflix.com
    p.txt 주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
    p.txt 사업자등록번호: 165-87-00119
    p.txt 클라우드 호스팅: Amazon Web Services Inc.
</template>

<script>
  export default {}
</script>
