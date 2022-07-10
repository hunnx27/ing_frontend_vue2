<template>
<div>
    <div class="step-title">회원가입</div>
  
    <div>
      <input type="checkbox" @click="stored($event)" v-model="agree">전체동의
      <div>서비스 이용약관 <a href="#">자세히보기</a></div>
      <div>개인정보 취급정책 <a href="#">자세히보기</a></div>
    </div>
    {{agree}}

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IntroItem',
  data(){
    return {
      agree: false
    }
  },
  methods:{
    ...mapActions(['setSignupAgree']),
    stored(e){
      const agree = e.target.checked;
      console.log('m : ', agree);
      this.setSignupAgree({agree});
    }
  },
  computed:{
    ...mapGetters(['signupData']),
  },
  created: function(){
    if(this.signupData!=null){
      this.agree = this.signupData.agree!=null? this.signupData.agree : false;
    }else{
      this.agree = false;
    }
  }
}
</script>

<style>
ul {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}
</style>