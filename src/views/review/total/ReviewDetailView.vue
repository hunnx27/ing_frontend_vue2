<template>
  
  <!-- Wrap START -->
  <div class="ReviewDetailView">
    <div
      class="lighten-5 ma-0 block"
      :style="{backgroundImage: `url('${getBackgroundUrl()}')`}"
      style="display:flex;height:100%;align-items: stretch;justify-content: center;background-position: center;background-size: cover;padding:10px; flex-direction:column;"
    >
      <div style="display:flex;flex-direction:column;align-items:center;padding:10px;">
        <h3 style="color:white;">고양시립원흥어린이집</h3>
        <p class="ma-0 review-item-address" style="display: flex;align-items: center;justify-content: flex-start;font-size:14px;color:white;">
          <v-icon >mdi-chevron-right</v-icon> 가정 <v-icon>mdi-chevron-right</v-icon> 경기도 화성시
        </p>
      </div>
      <div style="background-color: #fafafaaa;border-radius: 10px;padding: 10px;">
        <p class="ma-0" style="text-align:center;">
          원앤집 지표<span style="color:red">81점</span>입니다.
        </p>
        <p style="font-size: 15px;font-weight: bolder;margin:10px 0 0;display:flex;align-items: center;justify-content: center;text-align:center;">
          <span>자세히보기</span><v-icon>mdi-chevron-right</v-icon>
        </p>
      </div>
    </div>

    <v-tabs
      centered
      color="black"
    >
      <v-tabs-slider color="orange"></v-tabs-slider>
      <v-tab>기관정보</v-tab>
      <v-tab>리뷰</v-tab>
      <v-tab>면접</v-tab>
      <v-tab>연봉</v-tab>
    </v-tabs>

    <div class="page-wrap">
      <div class="item-wrap">
        <div class="item-row">
          <p>구분</p><p>a</p>
        </div>
        <div class="item-row">
          <p>주소</p><p>b</p>
        </div>
        <div class="item-row">
          <p>지도</p><p></p>
        </div>
        <div class="item-row">
          <p>설립유형</p><p></p>
        </div>
        <div class="item-row">
          <p>운영</p><p></p>
        </div>
        <div class="item-row">
          <p>원장</p><p></p>
        </div>
        <div class="item-row">
          <p>설립(개원)일</p><p></p>
        </div>
        <div class="item-row">
          <p>평가인증</p><p></p>
        </div>
      </div>

      <div class="item-wrap">
        <div class="step-title">연령별 반 현황</div>
        <div>
          <div>
            87.27%
          </div>
          <div>
            <p>55명<span>전원</span></p>
            <p>44명<span>전원</span></p>
          </div>
          <div>
            <p>
              <span>만0세</span>
              <span>9</span>
            </p>
            <p>
              <span>만1세</span>
              <span>9</span>
            </p>
            <p>
              <span>만2세</span>
              <span>9</span>
            </p>
            <p>
              <span>만3세</span>
              <span>9</span>
            </p>
            <p>
              <span>만4세</span>
              <span>9</span>
            </p>
            <p>
              <span>만5세</span>
              <span>9</span>
            </p>
          </div>
        </div>
      </div>

      <div class="item-wrap">
        <div class="step-title">기관 특성</div>
        <div>
        </div>
      </div>

      <div class="item-wrap">
        <div class="step-title">교직원 현황</div>
        <div>
        </div>
      </div>
      
    </div>
    <!--END item-wrap -->
    
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "ReviewDetailView",
  components:{
    
  },
  data() {
    return {
      companyName:null, //선택한 기관명
      sigugunName: null, //선택한 기관의 시군구명
      establishmentTypeName: null,//선택한 기관의 기관유형

      txt:null, //한줄평가
      likeCode: null, //좋아요

      backgroundUrls: [
        '/resources/images/review_bg.jpg',
        '/resources/images/review_bg_02.jpg',
        '/resources/images/review_bg_03.jpg'
      ],
      
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
    getBackgroundUrl(){
      const size = this.backgroundUrls.length;
      const min = 0
      const max = size-1;
      const idx = Math.floor(Math.random() * (max - min) + min);
      const newidx = idx%size;
      console.log(newidx);
      console.log(this.backgroundUrls[newidx]);
      return this.backgroundUrls[newidx];
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
    font-size: 18px;
    color: #f2a33c;
    font-weight: 600;
  }
}
.step-title {
  font-size: 20px;
  font-weight: 600;
  margin-top:10px;
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

.item-wrap{
  padding:10px;
  background-color:white;
  font-size: 12px;
  margin-bottom:10px;
  .item-row{
    display:flex;
    padding:10px;
    p{
      margin:0;
    }
    p:nth-child(1){
      flex:0 1 30%;
    }
  }
  .item-row:nth-child(odd) { background-color: white; }
  .item-row:nth-child(even) { background-color: #efefef; }
}



</style>
