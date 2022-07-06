<template>
<div>
    <div class="step-title">회원가입</div>
  
    <div>
      <input type="checkbox" value="전체동의">전체동의
      <div>서비스 이용약관 <a href="#">자세히보기</a></div>
      <div>개인정보 취급정책 <a href="#">자세히보기</a></div>
    </div>

</div>
</template>

<script>
export default {
  name: 'IntroItem',
  data(){
    return {
      
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