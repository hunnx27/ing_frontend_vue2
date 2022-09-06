<template>
  <!-- Wrap START -->
  <div class="InterviewReg1View page-wrap">
    <div class="page-txt">
      <p>
        <span style="color: #000">철저한 익명을 보장합니다.</span>
        <br />
        원앤집 리뷰는 작성자 추정이 되지 않습니다. 기관에 대한 진솔한 정보를
        공유하세요.
      </p>
    </div>
    <div class="step-title">관심기관</div>
    <CheckCompanyItem :selected="interestCompanyName" isShowAll='false' @change="onChangeCompany" ref="CheckCompanyItem"></CheckCompanyItem>
    <div class="column" style="margin-top: 10px">
      <input type="text" class="line" name="" readonly placeholder="기관명을 두 글자 이상 입력하세요." @click="searchCompany" v-model="companyName" style="text-align:center;font-weight:bolder;cursor:pointer;"/>
    </div>

    <div class="step-title">근무시 교사연차</div>
    <div class="column">
      <input type="number" class="line" name="" @change="onChangeWorkExp($event)" :value="workExp"/>
      <p class="discription">재직중이면 현재 연차를 입력해요(3년차는 3)</p>
    </div>

    <div class="btn-wrap">
      <div class="step-title">연차공개설정</div>
      <CheckOpenYNItem style="flex: 0.5 1 auto;" :selected="workExpOpenYn" @change="onChangeWorkExpOpenYn"></CheckOpenYNItem>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import CheckCompanyItem from "@/components/common/CheckCompanyItem.vue";
import CheckOpenYNItem from "@/components/common/CheckOpenYNItem.vue";

export default {
  name: "InterviewReg1View",
  data() {
    return {
      interestCompanyName:'kindergarten',
      workExpOpenYn:'Y',
      workExp:null,
      companyName:null,
    };
  },
  components:{
    CheckCompanyItem, CheckOpenYNItem
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions('InterviewReview',['setReq1', 'clearReq', 'setCompany']),
    ...mapActions('CompanySearch',{clearCompanySearch: 'clearReq'}),
    doNext() {
      //FIXME need Validation
      this.setStore();
      this.$router.push("/review/interview/interviewReg2");
    },
    goBack(){
      this.clearReq();
      this.clearCompanySearch();
      this.$router.go(-1);
    },
    searchCompany(){
      this.$router.push('/common/searchCompany')
      
    },
    onChangeCompany(value){
      this.interestCompanyName = value;
      this.setStore();
    },
    onChangeWorkExp(event){
      this.workExp = event.target.value;
      this.setStore();
    },
    onChangeWorkExpOpenYn(value){
      this.workExpOpenYn = value;
      this.setStore();
    },
    setStore(){
      const interestCompanyName = this.interestCompanyName;
      const workExp = this.workExp
      const workExpOpenYn = this.workExpOpenYn
      this.setReq1({interestCompanyName, workExp, workExpOpenYn})
    }

  },
  computed: {
    ...mapGetters("InterviewReview",["reqData"]),
    ...mapGetters("CompanySearch",{companySearch:"reqData"}),
  },
  created() {
    const title = "면접리뷰 작성";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: true,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
    if (this.reqData != null) {
      const interview = this.reqData;
      if(interview.interestCompanyName) this.interestCompanyName = interview.interestCompanyName;
      if(interview.workExp) this.workExp = interview.workExp;
      if(interview.workExpOpenYn) this.workExpOpenYn = interview.workExpOpenYn;
    }
    if(this.companySearch != null){
      const companySearch = this.companySearch;
      if(companySearch.companyId) this.setCompany({companyId:companySearch.companyId});
      if(companySearch.companyName) this.companyName = companySearch.companyName;
    }
  },
};
</script>

<style lang="scss" scoped>
.line {
  border: 1px solid #d8d8d8;
}
.page-txt {
  padding-bottom: 20px;
  border-bottom: 1px solid #a1a1a1;
  text-align: center;

  p {
    font-size: 18px;
    color: #f2a33c;
    font-weight: 600;
  }
}
.step-title {
  font-size: 20px;
  font-weight: 600;
}

input[type="text"],
input[type="number"] {
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
  input[type="text"],
  input[type="number"] {
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
  &.exposed-setting {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .step-title {
      margin-top: 0;
    }
    .radio-wrap {
      width: 100px;
    }
  }
}
.discription {
  font-size: 14px;
  color: #6200ea;
}
</style>
