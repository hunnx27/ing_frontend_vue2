<template>
<div>
  <component
    :is="this.stepsList[this.currentStep]" ref="childform" @setLayout="setLayout"
  ></component>

  <div>
    <v-btn @click="stepUp()">step up</v-btn> 
    <v-btn @click="stepDown()">step down</v-btn>
  </div>
</div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

import StepOneItem from '@/components/signup/StepOneItem.vue'
import StepTwoItem from '@/components/signup/StepTwoItem.vue'
import StepComplteItem from '@/components/signup/StepComplteItem.vue'
import accountApi from "@/api/account";

const title = "회원가입";
const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false
};

export default {
  name: 'SginupView',
  components:{
    StepOneItem, StepTwoItem, StepComplteItem
  },
  data(){
    return{
      currentStep: 0,
      stepsList: ['StepOneItem', 'StepTwoItem','StepComplteItem'],
    }
  },
  methods:{
    ...mapActions(["setSignupGubn",'fetchUser','clearSignup']),
    ...mapMutations(['setToken']),
    stepUp(){
      if( (this.stepsList.length-1)>this.currentStep ){
        this.currentStep++;
      }
      
    },
    stepDown(){
      if(this.currentStep>0){
        this.currentStep--;
      }
    },
    doCheck(){
      // Child Component의 DoCheck호출!
      if(this.$refs.childform.doCheck !=null){
        this.$refs.childform.doCheck();
      }
    },
    doNext(){
      // Child Component의 DoCheck호출!
      const rsValid = this.$refs.childform.valid();
      console.log('##isValid : ', rsValid)
      if(!rsValid.isValid){
        alert(rsValid.err);
        return;
      }

      if(this.currentStep == 1){
        // 회원가입 요청
        this.signup();
      }else if( (this.stepsList.length-1)>this.currentStep ){
        this.currentStep++;
      }
    },
    signup() {
      console.log("BEFORE Signup Call");
      debugger;
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
          if(body.accessToken != null){
            this.clearSignup();
            this.setToken(body.accessToken);
            this.fetchUser();
            alert('회원가입에 성공하였습니다.');
          }else{
            alert('엑세스토큰이 없습니다. 다시 시도하세요.')
          }
          this.currentStep++;
        },
        (err) => {
          console.log("err : ", err);
        }
      );
      console.log("AFTER Signup Call");
    },
    setLayout(options){
      console.log(options);
      this.$emit("setLayout", title, options);
    },
  },
  computed: {
    ...mapGetters(["signupData"]),
    isFirstStep() {
      return this.currentStep === 0
    },
    isLastStep() {
      return this.currentStep === this.stepsList.length - 1
    }
  },
  created() {
    const isAuth = this.$route.query.isAuth;
    if(!isAuth){
      this.clearSignup();
    }
    this.setLayout(options)
  },
}
</script>

<style>
.step-title{
  font-weight: bolder;
}
</style>
