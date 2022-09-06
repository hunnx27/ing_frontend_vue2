<template>
  <!-- Wrap START -->
  <div class="myinfo page-wrap">
    <div class="step-title">관심기관</div>
    <CheckCompanyItem :selected="interestCompanyName" isShowAll='true' @change="onChangeOrg" ref="CheckCompanyItem"></CheckCompanyItem>

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
    <SelectAddressZone :selected='interestZone' @change="onChangeZone" ref="selectAddressZone"></SelectAddressZone>

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
import CheckCompanyItem from "@/components/common/CheckCompanyItem.vue";
import SelectAddressZone from "@/components/common/SelectAddressZone.vue";

export default {
  name: 'myinfoView',
  components:{
    CheckCompanyItem,SelectAddressZone
  },
  data(){
    return{
      birthYYYY: null,
      majorSchool: null,
      majorDepartment: null,
      interestCompanyName: null,
      interestZone: null,
    };
  },
  methods:{
    ...mapActions(['refreshUser']),
    doCheck(){
      // 저장데이터 셋팅
      var saveDataObj = {
        interestCompanyName: this.interestCompanyName,
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
    onChangeOrg(value){
      this.interestCompanyName = value;
    },
    onChangeZone(value){
      this.interestZone = value;
    }
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
          isShowSearchBtn: false,
          isShowStarBtn: false,
          isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
    const storedMyinfo = this.user!=null? this.user.myinfo : null;
    if(storedMyinfo!=null){
      this.birthYYYY = storedMyinfo.birthYYYY;
      this.majorSchool = storedMyinfo.majorSchool;
      this.majorDepartment = storedMyinfo.majorDepartment;
      this.interestCompanyName = storedMyinfo.interestCompany;
      this.interestZone = storedMyinfo.interestZone;
    }else{
      this.birthYYYY = null;
      this.majorSchool = null;
      this.majorDepartment = null;
      this.interestCompanyName = null;
      this.interestZone = null;
    }
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
</style>
