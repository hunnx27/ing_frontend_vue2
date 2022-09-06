<template>
<!--.page-wrap {
    padding: 30px 15px 15px;
}-->
  <!-- Wrap START -->
  <div class="YearamtReg2View">
    <div class="page-txt" style="padding:30px 15px 15px">
      <p>
        <span style="color: red">원앤집은 선택형 리뷰 시스템으로</span><br />
        <span style="color: orange">익명을 보장합니다.</span>
      </p>
    </div>
    <div class="page_txt" style="height:150px;position:relative;background-size:cover;background-repeat: no-repeat;" :style="{backgroundImage: `url('/resources/images/review_bg.jpg')`}">
      <p style="color:white;line-height:26px;text-align:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">
        <span style="font-size:20px;font-weight:bolder">{{companyName}}</span><br/>
        <span style="">{{sigugunName}}</span><br/>
        <span style="">{{establishmentTypeName}}</span><br/>
      </p>
    </div>
    
    <div class="page-wrap" style="padding-top:15px;">
      <div class="step-title">연봉(단위:만원)</div>
      <div class="column">
        <input type="number" class="line" name="" @change="onChangeAmt($event)" :value="amt"/>
        <p class="discription">근로 계약서 명시금액(단위:만원)</p>
      </div>
      <div class="btn-wrap" style="display:flex;">
        <div class="step-title"><span>수당</span></div>
        <CheckExistYNItem style="" :selected="etcYn" uid="etcYn" @change="onChangeEtcYn"></CheckExistYNItem>
      </div>
      <div v-show="etcYn=='Y'" style="display:flex;flex-direction:column;justify-content:start;">
        <div style="display:flex;flex-direction:row;justify-content:end;align-items:center;" v-for="(item, idx) in itemsTitle" :key="idx">
          <p style="flex: 1 1 40%;font-size:20px;text-align:center;">
            <v-checkbox v-model="etcItem" :label="item" :value="idx+1" class="align-center justify-center" hide-details @change="check($event)"></v-checkbox>
          </p>
          <p style="flex: 1 1 60%;">
            <v-text-field label="단위:만원" :value="etcTemp[idx]" @input="input($event, idx)" hide-details :disabled="!etcItem.includes(idx+1)" :ref="'etcAmt'+(idx+1)"></v-text-field>
          </p>
        </div>
      </div>
      <div class="btn-wrap" style="display:flex;">
        <div class="step-title" style=""><span>퇴직금</span></div>
        <CheckExistYNItem style="" :selected="endYn" uid="endYn" @change="onChangeEndYn"></CheckExistYNItem>
      </div>
    </div>
  </div>
  <!-- Wrap END -->
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import reviewApi from "@/api/review";
import CheckExistYNItem from "@/components/review/CheckExistYNItem.vue";

export default {
  name: "YearamtReg2View",
  data() {
    return {
      companyName: null,
      sigugunName: null,
      establishmentTypeName : null,

      itemsTitle:['처우개선비','근무환경개선비','누리과정수당','기타'],
      amt: null,
      etcYn: 'N',
      endYn: 'N',
      etcItem: [],
      etcObj:new Object(),
      etcTemp:[],
    };
  },
  components:{
    CheckExistYNItem
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions('YearamtReview',['setReq2', 'clearReq']),
    ...mapActions('CompanySearch',{clearSearch: 'clearReq'}),
    doCheck() {
      //FIXME need Validation
      this.setStore();
      //FIXME Call Save API;
      this.submit();
    },
    submit(){

      // 저장 데이터 셋팅
      const p = this.reqData;
      const keys = Object.keys(p.etcObj);
      const values = Object.values(p.etcObj);
      const  data ={
        amt: p.amt,
        companyId: p.companyId,
        companyName: p.companyName,
        endYn: p.endYn,
        etcItems:keys.toString(),
        etcAmt: values.toString(),
        etcYn: p.etcYn,
        workExp: p.workExp,
        workExpOpenYn: p.workExpOpenYn,
      }
      
      reviewApi.saveYearamt(
        data,
        (body) => {
          console.log("succss.body : ", body);
          this.clearSearch();
          this.clearReq();
          alert('연봉리뷰가 저장되었습니다.');
          this.$router.push("/review/yearamt/yearamtReg3");
        },
        (err) =>{
          console.log(err);
          this.clearSearch();
          this.clearReq();
          alert('연봉리뷰 등록 시스템 오류가 있습니다.');
        }
      );
      
    },
    goBack(){
      //this.clearReq();
      this.$router.go(-1);
    },
    onChangeAmt(event){
      this.amt = event.target.value;
      this.setStore();
    },
    onChangeEtcYn(value){
      console.log(value)
      this.etcYn = value;
      if(value=="N"){
        this.etcClear();
      }
      this.setStore();
    },
    onChangeEndYn(value){
      this.endYn = value;
      this.setStore();
    },
    check(e){
      e.sort();
      setTimeout(()=> this.etcUpdate(), 500);
    },
    input(e, idx){
      console.log(e);
      console.log(idx);
      this.etcTemp[idx] = e;
      if(this.etcObj){
        this.etcObj[idx+1] = e;
      }else{
        this.etcObj = new Object();
      }
      this.setStore();
    },
    etcUpdate(){
      console.log('#########UPDATE');
      var obj = this.etcObj;
      const input1 = this.$refs['etcAmt1'][0].$el.querySelector('input');
      const input2 = this.$refs['etcAmt2'][0].$el.querySelector('input');
      const input3 = this.$refs['etcAmt3'][0].$el.querySelector('input');
      const input4 = this.$refs['etcAmt4'][0].$el.querySelector('input');
      
      if(!input1.disabled){obj["1"] = input1.value;}else{delete obj["1"];}
      if(!input2.disabled){obj["2"] = input2.value;}else{delete obj["2"];}
      if(!input3.disabled){obj["3"] = input3.value;}else{delete obj["3"];}
      if(!input4.disabled){obj["4"] = input4.value;}else{delete obj["4"];}
      
      this.etcObj = obj;
      this.setStore();
    },
    etcClear(){
      this.etcItem = [];
      this.etcObj = new Object();
      this.setStore();
    },
    setStore(){
      const amt = this.amt;
      const etcYn = this.etcYn
      const endYn = this.endYn
      const etcObj = this.etcObj
      const etcTemp = this.etcTemp;
      this.setReq2({amt, etcYn, endYn, etcObj, etcTemp})
    }
  },
  computed: {
    ...mapGetters("YearamtReview",["reqData"]),
    ...mapGetters("CompanySearch",{companySearch:"reqData"}),
  },
  created() {
    if (this.reqData != null) {
      const yearamt = this.reqData;
      //if(yearamt.workExpOpenYn) this.workExpOpenYn = yearamt.workExpOpenYn;
      if(yearamt.amt) this.amt = yearamt.amt;
      if(yearamt.etcYn) this.etcYn = yearamt.etcYn;
      if(yearamt.endYn) this.endYn = yearamt.endYn;
      if(yearamt.etcTemp)this.etcTemp = yearamt.etcTemp;
      if(yearamt.etcObj)this.etcObj = yearamt.etcObj;
      if(yearamt.etcObj)this.etcItem = Object.keys(yearamt.etcObj).map(item=>Number(item));
    }
    if(this.companySearch != null){
      const companySearch = this.companySearch;
      if(companySearch.companyName) this.companyName = companySearch.companyName;
      if(companySearch.sigugunName) this.sigugunName = companySearch.sigugunName;
      if(companySearch.establishmentTypeName) this.establishmentTypeName = companySearch.establishmentTypeName;
    }
    const title = this.companyName? this.companyName : "-";
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
  mounted(){
    
  }
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
.btn-wrap{
  .step-title{
    flex-basis: 30%;flex-shrink:0;margin-top:0;display:flex;display:flex;justify-content: center;flex-direction:column;
  }
  .radio-wrap{
    flex: 0.5 1 auto;
    flex-basis: 70%;
  }
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