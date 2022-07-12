<template>
  <!-- Wrap START -->
  <div class="myinfo">
    <br/>
    관심기관
    <div>
      <input name="organizationType" type="radio" value="all">전체
      <input name="organizationType" type="radio" value="유치원">유치원
      <input name="organizationType" type="radio" value="어린이집">어린이집
    </div>

    <br/>
    출생연도
    <div>
      <select class="line">
        <option value="">1990</option>
      </select>
    </div>

    <br/>
    관심지역
    <div>
      <select class="line">
        <option value="">서울특별시</option>
      </select>
      <select class="line">
        <option value="">전체</option>
      </select>
    </div>

    <br/>
    출신학교
    <div>
      <input type="text" class="line"/>
    </div>

    <br/>
    학과
    <div>
      <input type="text" class="line"/>
    </div>

    
  </div>
  <!-- Wrap END -->

</template>

<style>
.line{
  border:1px solid
}
</style>
<script>
import accountApi from '@/api/account'

export default {
  name: 'myinfoView',
  components:{
    
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  created () {
    console.log('HELLO!');
    
  }

}
</script>
