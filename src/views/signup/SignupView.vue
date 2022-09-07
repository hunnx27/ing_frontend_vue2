<template>
  <div style="height: ">
    <component
      :is="this.stepsList[this.currentStep]"
      ref="childform"
      @setLayout="setLayout"
    ></component>

    <div style="position: fixed; bottom: 0; padding: 15px; width: 100%">
      <v-btn
        style="
          width: 100%;
          border-color: #9c27b0;
          background: #9c27b0;
          color: #fff;
        "
        @click="submit"
        >{{ btnList[this.currentStep] }}</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

import StepOneItem from "@/components/signup/StepOneItem.vue";
import StepTwoItem from "@/components/signup/StepTwoItem.vue";
import StepComplteItem from "@/components/signup/StepComplteItem.vue";
import accountApi from "@/api/account";

const title = "회원가입";
const options = {
  isShowCheckBtn: false,
  isShowNextBtn: false,
  isShowSearchBtn: false,
  isShowStarBtn: false,
  isShowChartBoxBtn: false,
};

export default {
  name: "SginupView",
  components: {
    StepOneItem,
    StepTwoItem,
    StepComplteItem,
  },
  data() {
    return {
      currentStep: 0,
      stepsList: ["StepOneItem", "StepTwoItem", "StepComplteItem"],
      btnList: ["확인", "선택완료", "완료"],
    };
  },
  methods: {
    ...mapActions(["fetchUser", "clearSignup"]),
    ...mapMutations(["setToken"]),
    stepUp() {
      if (this.stepsList.length - 1 > this.currentStep) {
        this.currentStep++;
      }
    },
    submit() {
      const rsValid = this.$refs.childform.valid();
      console.log("##isValid : ", rsValid);
      if (!rsValid.isValid) {
        alert(rsValid.err);
        return;
      }

      if (this.currentStep == 0) {
        this.currentStep++;
      } else if (this.currentStep == 1) {
        // 회원가입 요청
        var gubnCode = this.signupData.gubnCode;
        var gubn = "유아교사";
        if (gubnCode == "A") {
          gubn = "유아교사";
        } else if (gubnCode == "I") {
          gubn = "예비교사/학부모";
        }
        if (confirm(gubn + "로 가입하시겠습니까?")) this.signup();
      } else if (this.currentStep == 2) {
        this.$router.replace("/");
      }
    },
    doCheck() {
      //Child Component의 DoCheck호출!
      if (this.$refs.childform.doCheck != null) {
        this.$refs.childform.doCheck();
      }
    },
    doNext() {
      // Child Component의 DoCheck호출!
      // const rsValid = this.$refs.childform.valid();
      // console.log('##isValid : ', rsValid)
      // if(!rsValid.isValid){
      //   alert(rsValid.err);
      //   return;
      // }
      // if(this.currentStep == 1){
      //   // 회원가입 요청
      //   this.signup();
      // }else if( (this.stepsList.length-1)>this.currentStep ){
      //   this.currentStep++;
      // }
    },
    goBack(){
      this.clearSignup();
      this.$router.push('/login')
    },
    signup() {
      console.log("BEFORE Signup Call");
      accountApi.signup(
        {
          socialId: this.signupData.socialId,
          gubnCode: this.signupData.gubnCode,
          snsTypeCode: this.signupData.snsTypeCode,
          allCheckSignup: this.signupData.allCheckSignup,
          checkSignupService: this.signupData.checkSignupService,
          checkSignupPrivacy: this.signupData.checkSignupPrivacy,
        },
        (body) => {
          console.log("succss.body : ", body);
          console.log("signup data Clear!");
          if (body.data.accessToken != null) {
            this.clearSignup();
            this.setToken(body.data.accessToken);
            this.fetchUser();
            this.currentStep++;
          } else {
            alert("엑세스토큰이 없습니다. 다시 시도하세요.");
          }
        },
        (err) => {
          console.log("err : ", err);
        }
      );
      console.log("AFTER Signup Call");
    },
    setLayout(options) {
      console.log(options);
      this.$emit("setLayout", title, options);
    },
  },
  computed: {
    ...mapGetters(["signupData"]),
  },
  created() {
    const isAuth = this.$route.query.isAuth;
    if (!isAuth) {
      this.clearSignup();
    }
    this.setLayout(options);
  },
};
</script>

<style lang="scss" scoped></style>
