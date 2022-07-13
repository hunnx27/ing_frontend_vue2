<template>
  <!-- Wrap START -->
  <div class="myinfo">
    <br/>
    관심기관
    <div>
      <input v-model="intrsOrgName" name="intrsOrg" type="radio" value="all">전체
      <input v-model="intrsOrgName" name="intrsOrg" type="radio" value="kindergarten">유치원
      <input v-model="intrsOrgName" name="intrsOrg" type="radio" value="daycarecenter">어린이집
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
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: 'myinfoView',
  components:{
    
  },
  data(){
    return{
      intrsOrgName: null,
      birthYYYY: null,
      intrsZone: null,
      majorSchool: null,
      majorDepartment: null,
    }
  },
  methods:{
    ...mapActions(['refreshUser']),
    doCheck(){
      // 저장데이터 셋팅
      var saveDataObj = {
        intrsOrgName: this.intrsOrgName, 
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
          alert('내 정보가 저장되었습니다.');
          this.refreshUser();
        },
        (err) => {
          console.log("err : ", err);
          alert("FIXME : 시스템오류가 있습니다.", err);
        }
      );
      console.log("AFTER save Call");
    },
    yearRange(startFrom) {
      var today = new Date();
      var year = today.getFullYear();
      const r = [];
      for(let i = startFrom; i <= year; i++) {
        r.push(i);
      }
      return r.reverse();
    },
  },
  computed: {
    /*
     스토어의 값을 변수처리할 수 있도록 초기화함
     1. mapGetters : 스토어의 모든 Getter함수를 가져옴, 그 중 배열에 선택된 Getter함수 제한 가능
    */
    ...mapGetters(["user"]),

  },
  created () {
    const title = "내 정보";
    const options = {
          isShowCheckBtn: true,
          isShowNextBtn: false,
          isShowSearchBtn: false
    };
    this.$emit("setLayout", title, options);
    const storedMyinfo = this.user!=null? this.user.myinfo : null;
    if(storedMyinfo!=null){
      this.intrsOrgName = storedMyinfo.intrsOrg;
      this.birthYYYY = storedMyinfo.birthYYYY;
      this.intrsZone = storedMyinfo.intrsZone;
      this.majorSchool = storedMyinfo.majorSchool;
      this.majorDepartment = storedMyinfo.majorDepartment;
    }else{
      this.intrsOrgName = null;
      this.birthYYYY = null;
      this.intrsZone = null;
      this.majorSchool = null;
      this.majorDepartment = null;
    }
    
  }

}
</script>
