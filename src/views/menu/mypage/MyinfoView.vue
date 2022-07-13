<template>
  <!-- Wrap START -->
  <div class="myinfo">
    <br/>
    관심기관
    <div>
      <input v-model="intrsOrg" name="intrsOrg" type="radio" value="ALL">전체
      <input v-model="intrsOrg" name="intrsOrg" type="radio" value="KINDERGARTEN">유치원
      <input v-model="intrsOrg" name="intrsOrg" type="radio" value="DAYCARECENTER">어린이집
    </div>

    <br/>
    출생연도
    <div>
      <select class="line" name="birthYYYY" v-model="birthYYYY">
        <option value="">1990</option>
      </select>
    </div>

    <br/>
    관심지역
    <div>
      <select class="line" name="intrsZone">
        <option value="">서울특별시</option>
      </select>
      <select class="line">
        <option value="">전체</option>
      </select>
    </div>

    <br/>
    출신학교
    <div>
      <input type="text" class="line" name="majorSchool"/>
    </div>

    <br/>
    학과
    <div>
      <input type="text" class="line" name="majorDepartment"/>
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
      intrsOrg: null,
      birthYYYY: null,
      intrsZone: null,
      majorSchool: null,
      majorDepartment: null,
    }
  },
  methods:{
    
  },
  created () {
    console.log('HELLO!');
    
  }

}
</script>
