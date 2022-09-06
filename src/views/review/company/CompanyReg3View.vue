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
      <v-select v-model="itemB1" :items="getListByCode('B10')" label="행사 횟수" item-text="value" item-value="code"  @change="setStore"
        persistent-hint solo  hint="생일잔치는 행사횟수에 포함하지 않아요"></v-select>
    </div>
    <div class="column">
      <v-select v-model="itemB2" :items="getListByCode('B20')" label="서류업무" item-text="value" item-value="code" @change="setStore"
       persistent-hintdense solo hide-details color="red"></v-select>
    </div>
    <div class="column">
      <v-select v-model="itemB3" :items="getListByCode('B30')" label="일과 내 수업준비시간" item-text="value" item-value="code" @change="setStore"
       persistent-hint solo hide-details></v-select>
    </div>

    <div class="step-title">직무만족</div>
    <div class="column">
      <v-select v-model="itemC1" :items="getListByCode('C10')" label="개인PC" item-text="value" item-value="code" @change="setStore"
       persistent-hint solo hide-details></v-select>
    </div>
    <div class="column">
      <v-select v-model="itemC2" :items="getListByCode('C20')" label="자기개발" item-text="value" item-value="code" @change="setStore"
       persistent-hint solo hide-details></v-select>
    </div>
    <div class="column">
      <v-select v-model="itemC3" :items="getListByCode('C30')" label="육아휴직 허용 분위기" item-text="value" item-value="code" @change="setStore"
       persistent-hint solo hide-details></v-select>
    </div>

    <div class="step-title">원내분위기</div>
    <div class="column">
      <v-select v-model="itemD1" :items="getListByCode('D10')" label="동료관계" item-text="value" item-value="code" @change="setStore"
       persistent-hint solo hide-details></v-select>
    </div>
    <div class="column">
      <v-select v-model="itemD2" :items="getListByCode('D20')" label="원장리더쉽" item-text="value" item-value="code" @change="setStore"
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
import reviewApi from "@/api/review";

export default {
  name: "CompanyReg3View",
  data() {
    return {
      companyName: null,
      list: ["test1","test2"],
      url: null,
      image: null,
      itemB1: null,
      itemB2: null,
      itemB3: null,
      itemC1: null,
      itemC2: null,
      itemC3: null,
      itemD1: null,
      itemD2: null,
      codeList: [
        {"code":"B101","value":"연 4회 이하"},
        {"code":"B102","value":"연 5~10회"},
        {"code":"B103","value":"연 10~20회"},
        {"code":"B104","value":"연 20회 이상"},
        {"code":"B201","value":"많아요"},
        {"code":"B202","value":"적당해요"},
        {"code":"B203","value":"없어요"},
        {"code":"B301","value":"1시간 미만 "},
        {"code":"B302","value":"1~2시간 미만"},
        {"code":"B303","value":"2~3시간 미만"},
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
    ...mapActions('CompanySearch',{clearSearch: 'clearReq'}),
    doCheck(){
      console.log('doCheck!');
      this.setStore();
      this.submit();
    },
    submit(){
      let form = new FormData()

      // Image File Setting
      if(this.image){
        for(let i=0; i<this.image.length; i++){
          const file = this.image[i];
          form.append(`files[${i}]`, file);
        }
      }
      
      // 저장 데이터 셋팅
      const p = this.reqData;
      form.append("txt", p.txt);
      form.append("companyId", p.companyId);
      form.append("workExp", p.workExp);
      form.append("itemB1", p.itemB1);
      form.append("itemB2", p.itemB2);
      form.append("itemB3", p.itemB3);
      form.append("itemC1", p.itemC1);
      form.append("itemC2", p.itemC2);
      form.append("itemC3", p.itemC3);
      form.append("itemD1", p.itemD1);
      form.append("itemD2", p.itemD2);
      form.append("likeCode", p.likeCode);
      form.append("workExpOpenYn", p.workExpOpenYn);
      
      reviewApi.saveCompany(
        form,
        (body) => {
          console.log("succss.body : ", body);
          this.clearSearch();
          this.clearReq();
          alert('기관리뷰가 저장되었습니다.');
          this.$router.push("/review/company/companyReg4");
        },
        (err) =>{
          console.log(err);
          this.clearSearch();
          this.clearReq();
          alert('기관리뷰 등록 시스템 오류가 있습니다.');
        }
      );
    },
    getListByCode(code){
      return this.codeList.filter(item => item.code.substring(0,3) == code);
    },
    setStore(){
      const itemB1 = this.itemB1;
      const itemB2 = this.itemB2;
      const itemB3 = this.itemB3;
      const itemC1 = this.itemC1;
      const itemC2 = this.itemC2;
      const itemC3 = this.itemC3;
      const itemD1 = this.itemD1;
      const itemD2 = this.itemD2;
      this.setReq3({itemB1, itemB2, itemB3, itemC1, itemC2, itemC3, itemD1, itemD2})
    }
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters("CompanyReview",["reqData"]),
    ...mapGetters("CompanySearch",{companySearch:"reqData"}),
  },
  created() {
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    if (this.reqData != null) {
      const company = this.reqData;
      if(company.interestCompanyName) this.interestCompanyName = company.interestCompanyName;
      if(company.workExp) this.workExp = company.workExp;
      if(company.workExpOpenYn) this.workExpOpenYn = company.workExpOpenYn;

      if(company.itemB1) this.itemB1 = company.itemB1;
      if(company.itemB2) this.itemB2 = company.itemB2;
      if(company.itemB3) this.itemB3 = company.itemB3;
      if(company.itemC1) this.itemC1 = company.itemC1;
      if(company.itemC2) this.itemC2 = company.itemC2;
      if(company.itemC3) this.itemC3 = company.itemC3;
      if(company.itemD1) this.itemD1 = company.itemD1;
      if(company.itemD2) this.itemD2 = company.itemD2;
    }
    if(this.companySearch != null){
      const companySearch = this.companySearch;
      if(companySearch.companyName) this.companyName = companySearch.companyName;
    }
    const title = this.companyName? this.companyName : "-";
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
