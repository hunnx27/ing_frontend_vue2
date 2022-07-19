<template>
  <!-- Wrap START -->
  <div class="myinfo page-wrap">
    <div class="step-title">관심기관</div>
    <div>
      <input
        v-model="interestOrgName"
        name="intrsOrg"
        type="radio"
        value="all"
        id="allChoice"
      />
      <label for="allChoice">전체</label>
      <input
        v-model="interestOrgName"
        name="intrsOrg"
        type="radio"
        value="kindergarten"
        id="kindergartenChoice"
      />
      <label for="kindergartenChoice">유치원</label>
      <input
        v-model="interestOrgName"
        name="intrsOrg"
        type="radio"
        value="daycarecenter"
        id="careCenterChoice"
      />
      <label for="careCenterChoice">어린이집</label>
    </div>

    <div class="step-title">출생연도</div>
    <div class="column">
      <select class="line" name="birthYYYY" v-model="birthYYYY">
        <option value="">선택하세요.</option>
        <option
          :value="n"
          v-for="n in yearRange(1953)"
          :key="n"
          :selected="n == birthYYYY"
        >
          {{ n }}
        </option>
      </select>
    </div>
    <div class="step-title">관심지역</div>
    <div class="column--col2">
      <select class="line" name="interestZonePrefix" attr="sido_code" v-model='interestSidoCode' @change="getAddressBySido">
        <option v-for="(item) in sidoList" :value="item.sidoCode" :key="item.sidoCode" >{{item.sidoName}}</option>
      </select>
      <select
        class="line"
        name="interestZone"
        v-model="interestZone"
        attr="sigungu_code"
      >
        <option value="">전체</option>
        <option 
          v-for="(item) in sigugunList" 
          :value="item.sigunguCode" 
          :key="item.id"
          :selected="item.sidoCode == interestZone"
        >{{item.sigunguName}}
        </option>
      </select>
    </div>

    <div class="step-title">출신학교</div>
    <div class="column">
      <input
        type="text"
        class="line"
        name="majorSchool"
        v-model="majorSchool"
      />
    </div>

    <div class="step-title">학과</div>
    <div class="column">
      <input
        type="text"
        class="line"
        name="majorDepartment"
        v-model="majorDepartment"
      />
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import accountApi from '@/api/account'
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: 'myinfoView',
  components:{
    
  },
  data(){
    return{
      interestOrgName: null,
      birthYYYY: null,
      interestSidoCode: null,
      interestZone: null,
      majorSchool: null,
      majorDepartment: null,
      sidoList: [],
      sigugunList: []
    };
  },
  methods:{
    ...mapActions(['refreshUser']),
    doCheck(){
      // 저장데이터 셋팅
      var saveDataObj = {
        interestOrgName: this.interestOrgName, 
        birthYYYY: this.birthYYYY, 
        interestZone: this.interestZone, 
        majorSchool: this.majorSchool, 
        majorDepartment: this.majorDepartment
      }

      console.log("saveData : " + saveDataObj);
      var isOk = confirm("저장하시겠습니까?");
      if (isOk) {
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
    getAddressSido(){
      accountApi.getAddressSido((body)=>{
        console.log(body);
        this.sidoList = body;
        this.getAddressBySido();
      });
    },
    getAddressBySido(){
      accountApi.getAddressBySido(this.interestSidoCode, (body)=>{
        console.log(body);
        this.sigugunList = body;
      });
    },
  },
  computed: {
    /*
     스토어의 값을 변수처리할 수 있도록 초기화함
     1. mapGetters : 스토어의 모든 Getter함수를 가져옴, 그 중 배열에 선택된 Getter함수 제한 가능
    */
    ...mapGetters(["user"]),
    intrsSido(){
      return "";
    }

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
      this.interestOrgName = storedMyinfo.interestOrg;
      this.birthYYYY = storedMyinfo.birthYYYY;
      const storeinterestZone = storedMyinfo.interestZone;
      this.interestZone = storeinterestZone;
      this.interestSidoCode = storeinterestZone!=null && storeinterestZone!='' ? storeinterestZone.substr(0, 2) : null;
      this.majorSchool = storedMyinfo.majorSchool;
      this.majorDepartment = storedMyinfo.majorDepartment;
      
    }else{
      this.interestOrgName = null;
      this.birthYYYY = null;
      this.interestSidoCode = null;
      this.interestZone = null;
      this.majorSchool = null;
      this.majorDepartment = null;
    }
    this.getAddressSido();
  }

}

</script>

<style lang="scss" scoped>
.line {
  border: 1px solid #d8d8d8;
}
.step-title {
  font-size: 20px;
  font-weight: 600;
}
input[type="radio"] {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
input[type="text"] {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
select {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
.column {
  input[type="text"] {
    width: 100%;
  }
  select {
    width: 100%;
  }
  &--col2 {
    input[type="text"] {
      width: 50%;
    }
    select {
      width: 50%;
    }
  }
}

label {
  margin-right: 10px;
}
</style>
