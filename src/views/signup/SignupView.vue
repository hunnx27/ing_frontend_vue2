<template>
<div>
  <component
    :is="this.stepsList[this.currentStep]" ref="signform"
  ></component>

  <div>
    <v-btn @click="stepUp()">step up</v-btn> 
    <v-btn @click="stepDown()">step down</v-btn>
  </div>
</div>
</template>

<script>

import IntroItem from '@/components/signup/IntroItem.vue'
import StepOneItem from '@/components/signup/StepOneItem.vue'
import StepTwoItem from '@/components/signup/StepTwoItem.vue'

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
      if(this.$refs.signform.doCheck !=null){
        this.$refs.signform.doCheck();
      }
    }

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
    const options = {
      title: '회원가입',
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false
    };
    this.$emit("setLayout", options);
  },
}
</script>

<style>
.step-title{
  font-weight: bolder;
}
</style>
