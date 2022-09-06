<template>
<!--.page-wrap {
    padding: 30px 15px 15px;
}-->
  <!-- Wrap START -->
  <div class="InterviewReg2View">
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
      <div class="btn-wrap" style="display:flex;">
        <div class="step-title"><span>모의수업</span></div>
        <CheckExistYNItem style="" :selected="item1Yn" uid="item1" @change="onChangeItem1Yn"></CheckExistYNItem>
      </div>
      <div v-show="item1Yn=='Y'" style="display:flex;flex-direction:column;justify-content:start;">
        <v-select multiple v-model="item1" :items="item1Options" @change="onChangeItem1"
          chips deletable-chips item-text="value" item-value="key" :menu-props="{closeOnClick: true,}" ref="selectItem1">
          <template #append-item>
            <div style="display: flex;justify-content: end;">
              <v-btn color="primary" style="margin:10px;" @click="closeSelectItem1($event)">확인</v-btn>
            </div>
          </template>
        </v-select>
      </div>
      <div class="btn-wrap" style="display:flex;">
        <div class="step-title" style=""><span>필기시험</span></div>
        <CheckExistYNItem style="" :selected="item2" uid="item2" @change="onChangeItem2"></CheckExistYNItem>
      </div>
      <div class="btn-wrap" style="display:flex;">
        <div class="step-title" style=""><span>인적성검사</span></div>
        <CheckExistYNItem style="" :selected="item3" uid="item3" @change="onChangeItem3"></CheckExistYNItem>
      </div>

      <div class="step-title add">면접질문/답변 입력하기(최대5개) <v-btn icon @click="addInterview"><v-icon>mdi-plus-thick</v-icon></v-btn></div>
      <div class="column interview-item" v-for="(item, idx) in qlist" :key="idx">
        <div class="interview-wrap" style="">
          <div class="interview-title">면접질문<v-btn icon v-show="idx>0" @click="removeInterview(idx)"><v-icon>mdi-minus-thick</v-icon></v-btn></div>
          <v-text-field class="pa-0 ml-2" :value="qlist[idx].q" @input="inputQuestion($event, idx)" hide-details :ref="'qlist-q-'+(idx)" 
            placeholder=" 예) 아이들이 서로 다투는 상황에서 대처 방법은?">
          </v-text-field>

          <div class="interview-title answer">면접답변</div>
          <v-text-field class="pa-0 ml-2" :value="qlist[idx].a" @input="inputAnswer($event, idx)" hide-details :ref="'qlist-a-'+(idx)" 
            placeholder=" 예) 가장 먼저 두 아이를 분리시키고 상황을 파악해요.">
          </v-text-field>
        </div>
      </div>

      <div class="step-title">면접평가</div>
      <div class="column">
        <v-select :items="item4Options" v-model="item4" 
          item-text="value" item-value="key"></v-select>
      </div>
      <div class="step-title">난이도</div>
      <div class="column">
        <CheckLevelItem style="" :selected="item5" uid="item5" @change="onChangeItem5"></CheckLevelItem>
      </div>

    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import reviewApi from "@/api/review";
import CheckExistYNItem from "@/components/review/CheckExistYNItem.vue";
import CheckLevelItem from "@/components/review/CheckLevelItem.vue";

const qObj = {q: null,a: null,}
const MAX_QUESTION = 5;

export default {
  name: "InterviewReg2View",
  data() {
    return {
      item1Options:[
        {'key':1,'value':'제작한 교구보여주기'},
        {'key':2,'value':'피아노 연주하기'},
        {'key':3,'value':'수업하기'}
      ],
      item4Options:[
        {"key":1, "value":"합격했어요"},
        {"key":2, "value":"불합격했어요"},
        {"key":3, "value":"대기중이에요"},
      ],

      companyName: null,
      sigugunName: null,
      establishmentTypeName : null,
      
      item1Yn:null,
      item1:null,
      item2:null,
      item3:null,
      item4:null,
      item5:null,
      qlist:[{
        q: null,
        a: null,
      }],
    };
  },
  components:{
    CheckExistYNItem, CheckLevelItem
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions('InterviewReview',['setReq2', 'clearReq']),
    ...mapActions('CompanySearch',{clearSearch: 'clearReq'}),
    closeSelectItem1(e){
      this.item1.sort();
      console.log(this.item1);
      e.preventDefault();
      if(this.$refs.selectItem1) {
          e.stopPropagation()
          setTimeout(()=>{
              this.$refs.selectItem1.isMenuActive = false;
          }, 10)
      }
    },
    doCheck() {
      //FIXME need Validation
      this.setStore();
      //FIXME Call Save API;
      this.submit();
    },
    submit(){
      // 저장 데이터 셋팅
      const p = this.reqData;
      debugger;
      const  data ={
        interviews: p.qlist,
        companyId: p.companyId,
        workExp: p.workExp,
        item_1: p.item1.toString(),
        item_1_yn: p.item1Yn,
        item_2: p.item2,
        item_3: p.item3,
        item_4: p.item4,
        item_5: p.item5,
        item_6: p.interestCompanyName!=null&&p.interestCompanyName=='kindergarten'?'N':'Y',
        workExpOpenYn: p.workExpOpenYn,
      }
      
      reviewApi.saveInterview(
        data,
        (body) => {
          console.log("succss.body : ", body);
          this.clearSearch();
          this.clearReq();
          alert('면접리뷰가 저장되었습니다.');
          this.$router.push("/review/interview/interviewReg3");
        },
        (err) =>{
          console.log(err);
          this.clearSearch();
          this.clearReq();
          alert('면접리뷰 등록 시스템 오류가 있습니다.');
        }
      );
      
    },
    goBack(){
      //this.clearReq();
      this.$router.go(-1);
    },
    addInterview(){
      if(this.qlist.length>=MAX_QUESTION){
        alert(`면접질문은 최대 ${MAX_QUESTION}개까지 가능합니다.`);
        return;
      }
      this.qlist.push(Object.assign({}, qObj));
    },
    removeInterview(idx){
      if(this.qlist.length <= idx){
        alert('인터뷰가 없습니다.['+idx+']');
        return;
      }
      this.qlist.splice(idx, 1);
    },
    inputQuestion(e, idx){
      console.log(e);
      console.log(idx);
      this.qlist[idx]['q'] = e;
      this.setStore();
    },
    inputAnswer(e, idx){
      console.log(e);
      console.log(idx);
      this.qlist[idx]['a'] = e;
      this.setStore();
    },
    onChangeItem1Yn(value){
      if(value=='N'){
        this.item1 = null;
      }
      this.item1Yn = value
      this.setStore();
    },
    onChangeItem1(value){
      this.item1.sort();
      console.log(value)
    },
    onChangeItem2(value){
      this.item2 = value;
      this.setStore();
    },
    onChangeItem3(value){
      this.item3 = value;
      this.setStore();
    },
    onChangeItem4(value){
      this.item4 = value;
      this.setStore();
    },
    onChangeItem5(value){
      this.item5 = value;
      this.setStore();
    },
    check(e){
      e.sort();
      setTimeout(()=> this.etcUpdate(), 500);
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
      const item1Yn = this.item1Yn;
      const item1 = this.item1;
      const item2 = this.item2;
      const item3 = this.item3;
      const item4 = this.item4;
      const item5 = this.item5;
      const qlist = this.qlist.map(q=>Object.assign({},q));
      this.setReq2({item1Yn, item1, item2, item3, item4, item5, qlist})
    }
  },
  computed: {
    ...mapGetters("InterviewReview",["reqData"]),
    ...mapGetters("CompanySearch",{companySearch:"reqData"}),
  },
  created() {
    if (this.reqData != null) {
      const interview = this.reqData;
      if(interview.item1Yn) this.item1Yn = interview.item1Yn;
      if(interview.item1) this.item1 = interview.item1;
      if(interview.item2) this.item2 = interview.item2;
      if(interview.item3) this.item3 = interview.item3;
      if(interview.item4) this.item4 = interview.item4;
      if(interview.item5) this.item5 = interview.item5;
      if(interview.qlist) this.qlist = interview.qlist.map(q=>Object.assign({},q));
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
.interview-item{
  margin-bottom:10px;
  .interview-wrap{
    padding: 20px 17px 25px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .interview-title{
      color: #666;font-weight: bolder; font-size: 17px;
      display:flex;justify-content: space-between;align-items: center;
    }
    .answer{
      color:orange;
      margin-top: 25px;
    }
  }
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
  margin-bottom: 15px;
}
.step-title.add{
  display:flex;justify-content: space-between;align-items: center;
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

</style>