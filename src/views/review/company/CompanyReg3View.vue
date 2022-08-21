<template>
  <!-- Wrap START -->
  <div class="CompanyReg3View page-wrap">
    <div class="page-txt">
      <p style="color:red;margin-bottom:5px">원앤집은 선택형 리뷰 시스템으로</p>
      <p style="color:red"><span style="color:orange">익명</span>을 보장합니다.</p>
    </div>
    <hr/>

    <div class="step-title">업무량</div>
    <div class="column">
      <v-select v-model="item_b1" :items="getListByCode('B10')" label="행사 횟수" item-text="value" item-value="code" 
        persistent-hint solo  hint="생일잔치는 행사횟수에 포함하지 않아요"></v-select>
    </div>
    <div class="column">
      <v-select v-model="item_b2" :items="getListByCode('B20')" label="서류업무" item-text="value" item-value="code" 
       persistent-hintdense solo hide-details color="red"></v-select>
    </div>
    <div class="column">
      <v-select v-model="item_b3" :items="getListByCode('B30')" label="일과 내 수업준비시간" item-text="value" item-value="code"
       persistent-hint solo hide-details></v-select>
    </div>

    <div class="step-title">직무만족</div>
    <div class="column">
      <v-select v-model="item_c1" :items="getListByCode('C10')" label="개인PC" item-text="value" item-value="code" 
       persistent-hint solo hide-details></v-select>
    </div>
    <div class="column">
      <v-select item-color="red" v-model="item_c2" :items="getListByCode('C20')" label="자기개발" item-text="value" item-value="code"
       persistent-hint solo hide-details></v-select>
    </div>
    <div class="column">
      <v-select v-model="item_c3" :items="getListByCode('C30')" label="육아휴직 허용 분위기" item-text="value" item-value="code" 
       persistent-hint solo hide-details></v-select>
    </div>

    <div class="step-title">원내분위기</div>
    <div class="column">
      <v-select v-model="item_d1" :items="getListByCode('D10')" label="동료관계" item-text="value" item-value="code" 
       persistent-hint solo hide-details></v-select>
    </div>
    <div class="column">
      <v-select v-model="item_d2" :items="getListByCode('D20')" label="원장리더쉽" item-text="value" item-value="code" 
       persistent-hint solo hide-details></v-select>
    </div>

    <div class="step-title">사진첨부(최대5장) 선택사항</div>
    <v-img :src="url"></v-img>
    <v-file-input
          :rules=[]
          accept="image/png, image/jpeg, image/bmp"
          placeholder="이미지를 첨부하세요"
          prepend-icon="mdi-camera"
          multiple
          label="이미지"
          class="hidden"
          ref="image"          
          v-model="image"
        ></v-file-input>
  </div>
  <!-- Wrap END -->
</template>

<style></style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "CompanyReg3View",
  data() {
    return {
      list: ["test1","test2"],
      url: null,
      image: null,
      item_b1: null,
      item_b2: null,
      item_b3: null,
      item_c1: null,
      item_c2: null,
      item_c3: null,
      item_d1: null,
      item_d2: null,
      codeList: [
        {"code":"B101","value":"연 4회 이하"},
        {"code":"B102","value":"연 5~10회"},
        {"code":"B103","value":"연 10~20회"},
        {"code":"B104","value":"연 20회 이상"},
        {"code":"B201","value":"많아요"},
        {"code":"B202","value":"적당해요"},
        {"code":"B203","value":"없어요"},
        {"code":"B301","value":"시간없음"},
        {"code":"B302","value":"1시간 미만 "},
        {"code":"B303","value":"1~2시간 미만"},
        {"code":"B304","value":"5시간 이상"},
        {"code":"C101","value":"있어요"},
        {"code":"C102","value":"함께 써요"},
        {"code":"C103","value":"없어요"},
        {"code":"C201","value":"대학원 진학 허용해요"},
        {"code":"C202","value":"교육비 지원/연수 3회 이상"},
        {"code":"C203","value":"교육비 지원/연수 1회 이상"},
        {"code":"C204","value":"없어요"},
        {"code":"C301","value":"육휴사용 교사 3명 이상"},
        {"code":"C302","value":"육휴사용 교사 2명 이하"},
        {"code":"C303","value":"육휴사용 교사 없어요"},
        {"code":"D101","value":"경쟁적"},
        {"code":"D102","value":"상호격려 및 협동"},
        {"code":"D103","value":"개인주의"},
        {"code":"D201","value":"허용"},
        {"code":"D202","value":"민주"},
        {"code":"D203","value":"방임"},
        {"code":"D204","value":"권위"},
      ]
    }
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions('CompanyReview',['setReq3', 'clearReq']),
    doCheck(){
      console.log('doCheck!');
    },
    getListByCode(code){
      return this.codeList.filter(item => item.code.substring(0,3) == code);
    },
    setStore(){
      // FIXME 
      const interestCompanyName = this.interestCompanyName;
      const workExp = this.workExp
      const workExpOpenYn = this.workExpOpenYn
      this.setReq3({interestCompanyName, workExp, workExpOpenYn})
    }
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters("CompanyReview",["reqData"]),
  },
  created() {
    const title = "기관리뷰등록3";
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
    };
    if (this.reqData != null) {
      const company = this.reqData;
      if(company.interestCompanyName) this.interestCompanyName = company.interestCompanyName;
      if(company.workExp) this.workExp = company.workExp;
      if(company.workExpOpenYn) this.workExpOpenYn = company.workExpOpenYn;

      if(company.item_b1) this.item_b1 = company.item_b1;
      if(company.item_b2) this.item_b2 = company.item_b2;
      if(company.item_b3) this.item_b3 = company.item_b3;
      if(company.item_c1) this.item_c1 = company.item_c1;
      if(company.item_c2) this.item_c2 = company.item_c2;
      if(company.item_c3) this.item_c3 = company.item_c3;
      if(company.item_d1) this.item_d1 = company.item_d1;
      if(company.item_d2) this.item_d2 = company.item_d2;

      if(company.companyName) this.companyName = company.companyName;
    }
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
    font-size: 18px;
    color: #f2a33c;
    font-weight: 600;
  }
}
.step-title {
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
}
.column {
  padding-bottom:10px;
}

.v-select__selection--comma {
  color: blue !important;
}

.item-select{
  color: red;
}
.v-select__selection--comma{
  color: red !important;
}

</style>
