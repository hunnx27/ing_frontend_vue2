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
        <option value="">선택하세요.</option>
        <option :value="n" v-for="n in yearRange(1953)" :key="n" :selected="n == birthYYYY">{{n}}</option>
      </select>
    </div>

    <br/>
    관심지역
    <div>
      <select class="line" name="intrsZonePrefix" attr="sido_code">
        <option value="11">서울특별시</option>
      </select>
      <select class="line" name="intrsZone" v-model="intrsZone" attr="sigungu_code">
        <option value="">전체</option>
        <option value="11680">강남구</option>
        <option value="error">FIXME: ADDRESS Table처리필요</option>
      </select>
    </div>

    <br/>
    출신학교
    <div>
      <input type="text" class="line" name="majorSchool" v-model="majorSchool"/>
    </div>

    <br/>
    학과
    <div>
      <input type="text" class="line" name="majorDepartment" v-model="majorDepartment"/>
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
const title = "내 정보";
const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false
};

export default {
  name: 'myinfoView',
  components:{
    
  },
  data(){
    return{
      intrsOrg: null,
      birthYYYY: 2021,
      intrsZone: null,
      majorSchool: null,
      majorDepartment: null,
    }
  },
  methods:{
    yearRange(startFrom) {
      var today = new Date();
      var year = today.getFullYear();
      const r = [];
      for(let i = startFrom; i <= year; i++) {
        r.push(i);
      }
      return r.reverse();
    },
    setLayout(options){
      console.log(options);
      this.$emit("setLayout", title, options);
    },
    doCheck(){
      // 저장데이터 셋팅
      var saveDataObj = {
        intrsOrg: this.intrsOrg, 
        birthYYYY: this.birthYYYY, 
        intrsZone: this.intrsZone, 
        majorSchool: this.majorSchool, 
        majorDepartment: this.majorDepartment
      }
      console.log("saveData : " + saveDataObj);
      var isOk = confirm("저장하시겠습니까?");
      if(isOk){
        this.save(saveDataObj);
      }
    },
    save(paramObj) {
      console.log("BEFORE save Call");
      accountApi.saveMyinfo(
        paramObj,
        (body) => {
          console.log("succss.body : ", body);
          alert("fixme : 저장후 처리 로직 추가 하세요." , body);
        },
        (err) => {
          console.log("err : ", err);
          alert("FIXME : 에러처리하세요.", err);
        }
      );
      console.log("AFTER save Call");
    },
  },
  created () {
    console.log('HELLO!');
    this.setLayout(options);
  }

}
</script>
