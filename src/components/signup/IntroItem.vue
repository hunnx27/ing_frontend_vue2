<template>
  <div class="stap-wrap">
    <div class="step-title">회원가입</div>

    <div>
      <label for="allCheckSignup" class="">
        <input
          type="checkbox"
          id="allCheckSignup"
          name="allCheckSignup"
        />전체동의
      </label>
      <div class="checkbox-wrap d-flex">
        <label for="checkSignupService">
          <input
            type="checkbox"
            id="checkSignupService"
            name="checkSignupService"
          />서비스 이용약관
        </label>
        <a class="text_view" href="#">자세히보기</a>
      </div>

      <div class="checkbox-wrap d-flex">
        <label for="CheckSignupPrivacy">
          <input
            type="checkbox"
            id="CheckSignupPrivacy"
            name="CheckSignupPrivacy"
          />개인정보 취급정책
        </label>
        <a class="text_view" href="#">자세히보기</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroItem",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.stap-wrap {
  padding: 30px 15px 15px;

  .step-title {
    font-size: 20px;
  }
}
.checkbox-wrap {
  align-items: center;
  margin-top: 10px;
  padding: 10px 10px;
  border: 1px solid #673ab7;
  border-radius: 10px;

  .text_view {
    flex: end;
    color: #666;
  }
}
</style>
