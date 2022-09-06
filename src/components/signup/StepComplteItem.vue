<template>
  <div class="step-two page-wrap">
    <div class="step-title">회원가입완료</div>
    <div class="welcome_txt">
      <p class="big_txt">원앤집 회원이 되신 것을 환영합니다.</p>
      <p>원앤집은 모든 유아교육 종사자들과 함께</p>
      <p>더 나은 환경을 만들어 나가기 위해 노력합니다.</p>
    </div>
    <div class="membership_notice">
      <ul>
        <li>실명(또는 별명)이 포함된 리뷰는 승인되지 않아요.</li>
        <li>욕설 및 비방, 비속어 사용 역시 승인되지 않아요.</li>
        <li>근거 없는 비방이나 모욕적 표현은 자제해 주세요.</li>
        <li>확인되지 않은 내용 적시는 법적처벌사유가 될 수 있어요.</li>
      </ul>
      <p>원앤집 이용 문의:oneandzip@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepTwoItem",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    doCheck() {
      //this.signup();
      this.$router.replace("/");
    },
    valid() {
      const rs = { isValid: true, err: "" };
      return rs;
    },
  },
  created() {
    //Appbar Option 설정
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", options);
  },
};
</script>

<style lang="scss" scoped>
.step-two {
  .step-title {
    text-align: center;
    font-size: 20px;
  }

  .welcome_txt {
    margin-top: 20px;
    text-align: center;
    .big_txt {
      font-weight: 600;
      font-size: 20px;
      color: #673ab7;
    }
    p {
      margin: 0;
    }
  }
  .membership_notice {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #cccccc;
    background: #fff;
    ul {
      padding: 0;
      li {
        display: block;
        padding: 0;
      }
    }
    p {
      margin: 20px 0 0 0;
    }
  }
}
</style>
