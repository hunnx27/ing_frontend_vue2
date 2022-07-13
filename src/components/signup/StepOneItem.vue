<template>
  <div class="step-wrap page-wrap">
    <div class="step-title">회원가입</div>

    <div class="mgt20">
      <label for="allCheckSignup" class="">
        <input
          type="checkbox"
          id="allCheckSignup"
          name="allCheckSignup"
          @click="clickAllCheckSignup($event)"
          v-model="allCheckSignup"
        />전체동의
      </label>
      <div class="checkbox-wrap">
        <label for="checkSignupService">
          <input
            type="checkbox"
            id="checkSignupService"
            name="checkSignupService"
            @click="clickCheckSignupService($event)"
            v-model="checkSignupService"
          />서비스 이용약관
        </label>
        <a class="text_view" href="#">자세히보기</a>
      </div>

      <div class="checkbox-wrap">
        <label for="CheckSignupPrivacy">
          <input
            type="checkbox"
            id="checkSignupPrivacy"
            name="checkSignupPrivacy"
            @click="clickCheckSignupPrivacy($event)"
            v-model="checkSignupPrivacy"
          />개인정보 취급정책
        </label>
        <a class="text_view" href="#">자세히보기</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "IntroItem",
  data() {
    return {
      allCheckSignup: false,
      checkSignupService: false,
      checkSignupPrivacy: false,
      socialId: null,
      snsTypeCode: null,
    };
  },
  methods: {
    ...mapActions([
      "setAllCheckSignup",
      "setCheckSignupService",
      "setCheckSignupPrivacy",
    ]),
    clickAllCheckSignup(e) {
      const allCheckSignup = e.target.checked;
      const checkSignupService = allCheckSignup;
      const checkSignupPrivacy = allCheckSignup;
      console.log("methods : ", allCheckSignup);
      this.setAllCheckSignup({ allCheckSignup });
      this.setCheckSignupService({ checkSignupService });
      this.setCheckSignupPrivacy({ checkSignupPrivacy });
    },
    clickCheckSignupService(e) {
      const checkSignupService = e.target.checked;
      console.log("methods : ", checkSignupService);
      this.setCheckSignupService({ checkSignupService });
    },
    clickCheckSignupPrivacy(e) {
      const checkSignupPrivacy = e.target.checked;
      console.log("methods : ", checkSignupPrivacy);
      this.setCheckSignupPrivacy({ checkSignupPrivacy });
    },
    valid() {
      var isValid = false;
      var err = "";

      if (this.socialId == null || this.snsTypeCode == null) {
        isValid = false;
        err = "인증정보가 유효하지 않습니다. 로그인을 다시 시도하세요.";
        return { isValid, err: err };
      }
      if (this.allCheckSignup != true) {
        isValid = false;
        err = "모든 약관에 동의하셔야 합니다.";
        return { isValid, err: err };
      }

      // 통과
      return { isValid: true, err: "" };
    },
  },
  computed: {
    /*
     스토어의 값을 변수처리할 수 있도록 초기화함
     1. mapGetters : 스토어의 모든 Getter함수를 가져옴, 그 중 배열에 선택된 Getter함수 제한 가능
    */

    ...mapGetters(["signupData"]),
    storeAllCheckSignup() {
      return this.signupData.allCheckSignup;
    },
    storeCheckSignupService() {
      return this.signupData.checkSignupService;
    },
    storeCheckSignupPrivacy() {
      return this.signupData.checkSignupPrivacy;
    },
  },
  watch: {
    /*
     Data 혹은 Computed의 값의 변경 이벤트를 감지함
    */

    storeAllCheckSignup(val, oldVal) {
      //console.log('watch : ', val, oldVal);
      this.allCheckSignup = val;
    },
    storeCheckSignupService(val, oldVal) {
      //console.log('watch : ', val, oldVal);
      this.checkSignupService = val;
    },
    storeCheckSignupPrivacy(val, oldVal) {
      //console.log('watch : ', val, oldVal);
      this.checkSignupPrivacy = val;
    },
  },
  created: function () {
    /**
     * 최초 실행
     */

    // Appbar Option 설정
    // const options = {isShowCheckBtn: false,isShowNextBtn: true,isShowSearchBtn: false};
    // this.$emit('setLayout',options);

    // 스토어 저장된 데이터 로드
    if (this.signupData != null) {
      this.socialId =
        this.signupData.socialId != null ? this.signupData.socialId : null;
      this.snsTypeCode =
        this.signupData.snsTypeCode != null
          ? this.signupData.snsTypeCode
          : null;
      this.allCheckSignup =
        this.signupData.allCheckSignup != null
          ? this.signupData.allCheckSignup
          : false;
      this.checkSignupService =
        this.signupData.checkSignupService != null
          ? this.signupData.checkSignupService
          : false;
      this.checkSignupPrivacy =
        this.signupData.checkSignupPrivacy != null
          ? this.signupData.checkSignupPrivacy
          : false;

      if (this.checkSignupService == true && this.checkSignupPrivacy == true) {
        this.allCheckSignup = true;
      } else {
        this.allCheckSignup = false;
      }
    } else {
      this.allCheckSignup = false;
      this.checkSignupService = false;
      this.checkSignupPrivacy = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.step-wrap {
  .step-title {
    font-size: 20px;
  }
}
.checkbox-wrap {
  position: relative;
  align-items: center;
  margin-top: 10px;
  padding: 10px 10px;
  background: #fff;
  border: 1px solid #673ab7;
  border-radius: 10px;

  .text_view {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    color: #666;
  }
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
