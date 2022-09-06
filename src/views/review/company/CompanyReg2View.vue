<template>
  
  <!-- Wrap START -->
  <div class="CompanyReg2View">
    <div class="page-txt" style="padding:30px 15px 15px">
      <p>
        <span style="color: red">원앤집은 선택형 리뷰 시스템으로</span><br />
        <span style="color: orange">익명을 보장합니다.</span>
      </p>
    </div>
    <div class="page_txt" style="height:150px;position:relative;background-size:cover;background-repeat: no-repeat;" :style="{backgroundImage: `url('/resources/images/review_bg.jpg')`}">
      <p style="color:white;line-height:26px;text-align:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">
        <span style="font-size:18px;font-weight:bolder">{{companyName}}</span><br/>
        <span style="">{{sigugunName}}</span><br/>
        <span style="">{{establishmentTypeName}}</span><br/>
      </p>
    </div>

    <div class="page-wrap" style="padding-top:15px;">
      <div class="step-title" style="display:flex;justify-content: space-between;align-items: center;">
        한줄평가
        <span style="font-weight: normal;font-size: 14px;color: #888;">최소20자 최대300자</span>
      </div>
      <div class="column" style="margin-top: 10px">
        <textarea v-model="txt" name="" id="" cols="0" rows="0"></textarea>
      </div>

      
      <div class="step-title">계속 근무하고 싶나요?</div>
      <CheckLikeItem style="flex: 0.5 1 auto;margin-top:20px;" :selected="likeCode" uid="work" @change="onChangeLikeCode"></CheckLikeItem>
    </div>
    
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import CheckLikeItem from "@/components/company/CheckLikeItem.vue";

export default {
  name: "CompanyReg2View",
  components:{
    CheckLikeItem
  },
  data() {
    return {
      companyName:null, //선택한 기관명
      sigugunName: null, //선택한 기관의 시군구명
      establishmentTypeName: null,//선택한 기관의 기관유형

      txt:null, //한줄평가
      likeCode: null, //좋아요
    };
  },
  methods: {
    ...mapActions('CompanyReview',['setReq2']),
    ...mapActions('CompanySearch',{setCompanySearchReq:'setReq'}),
    doNext() {
      //FIXME need Validation
      this.setStore();
      this.$router.push("/review/company/companyReg3");
    },
    onChangeLikeCode(value){
      this.likeCode = value;
    },
    setStore(){
      const txt = this.txt;
      const likeCode = this.likeCode
      this.setReq2({txt, likeCode})
    }
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters("CompanyReview",["reqData"]),
    ...mapGetters("CompanySearch",{companySearch:"reqData"}),
  },
  created() {
    if (this.reqData != null) {
      const company = this.reqData;
      //if(yearamt.workExpOpenYn) this.workExpOpenYn = yearamt.workExpOpenYn;
      if(company.txt) this.txt = company.txt;
      if(company.likeCode) this.likeCode = company.likeCode;
    }
    if(this.companySearch != null){
      const companySearch = this.companySearch;
      if(companySearch.companyName) this.companyName = companySearch.companyName;
      if(companySearch.sigugunName) this.sigugunName = companySearch.sigugunName;
      if(companySearch.establishmentTypeName) this.establishmentTypeName = companySearch.establishmentTypeName;
    }
    const title = this.companyName? this.companyName : "-";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: true,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
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
    font-size: 14px;
    color: #f2a33c;
    font-weight: 600;
  }
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
  
  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #d8d8d8;
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

.btn-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .step-title {
    margin-top:0
    // position: absolute;
    // left: 0;
    // top: 50%;
    // transform: translate(0, -50%);
    // margin-top: 0;
  }
}

label {
  margin-right: 10px;
}

</style>
