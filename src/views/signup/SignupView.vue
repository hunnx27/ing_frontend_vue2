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
import { mapActions } from "vuex";
import IntroItem from '@/components/signup/IntroItem.vue'
import StepOneItem from '@/components/signup/StepOneItem.vue'
import StepTwoItem from '@/components/signup/StepTwoItem.vue'

const title = "회원가입";
const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false
};

export default {
  name: 'SginupView',
  components:{
    IntroItem, StepOneItem, StepTwoItem
  },
  data(){
    return{
      currentStep: 0,
      stepsList: ['IntroItem', 'StepOneItem', 'StepTwoItem'],
    }
  },
  methods:{
    ...mapActions(['clearSignup']),
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
      if( (this.stepsList.length-1)>this.currentStep ){
        this.currentStep++;
      }
    },
    setLayout(options){
      console.log(options);
      this.$emit("setLayout", title, options);
    },
  },
  computed: {
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
