<template>
<div class="step-one">
  <div class="step-title">회원가입</div>
  <div>
    <input name="gubn" type="radio" value="A" @change="stored($event)"/>유아교사<br/>
    <p>원앤집의 모든 기능을 이용할 수 있습니다.</p>
  </div>
  <div>
    <input name="gubn" type="radio" value="I" @change="stored($event)"/>예비교사/학부모<br/>
    <p>기관리뷰 작성을 제외한 모든 기능을 이용할 수 있습니다.</p>
  </div>
  {{gubn}}





</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StepOneItem',
  components: {

  },
  props: {

  },
  data() {
    return {
      gubn: ""
    }
  },
  methods: {
    ...mapActions(['setSignupGubn']),
    stored(e){
      console.log(e.target.value);
      const gubn = e.target.value; 
      this.gubn = gubn;
      this.setSignupGubn({gubn});
    }
  },
  computed: {

  }
}
</script>

<style>
.step-title{
  font-weight: bolder;
}
</style>