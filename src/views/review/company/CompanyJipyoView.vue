<template>
<div>
  <div
      class="lighten-5 ma-0 block"
      :style="{backgroundImage: `url('${backgroundUrl}')`}"
      style="background-position: center center;background-size: cover;padding: 20px 0;"
    >
    <div class="" style="display:flex">
      <div class="circle" :style="{backgroundImage: `url('${iconUrl}')`}">
        <p class="mb-0" style="color:white;font-size:13px;">
          원앤집 지표
        </p>
        <p class="mb-1" style="color:white;font-size:38px;font-weight:bolder;">
          <span>81점</span>
        </p>
        <p class="" style="color:orange;font-size:13px;font-weight:bolder;padding:1px 5px;background-color:white;border-radius:5px;">
          1리뷰
        </p>
      </div>
    </div>
  </div>


  <div class="page-wrap">
    
    <div class="mb-2 card-wrap">
      <div class="step-title">
        <p>계속 근무 희망</p>
        <p>98점</p>
      </div>
      <div class="staff-cnt-wrap">
        <div class="detail-cnt-wrap border-wrap mb-1">
          <p><span>보육환경</span><span class="detail-cnt">1</span></p>
          <p><span>운영관리</span><span class="detail-cnt">19</span></p>
          <p><span>보육과정</span><span class="detail-cnt">0</span></p>
        </div>
        <div class="detail-cnt-wrap border-wrap mb-1">
          <p><span>상호작용과 교수법</span><span class="detail-cnt">1</span></p>
          <p><span>건강과영양</span><span class="detail-cnt">0</span></p>
          <p><span>안전</span><span class="detail-cnt">1</span></p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">
        <p>유아교사 기관평가</p>
        <p>98점</p>
      </div>
      <div class="staff-cnt-wrap">
        <div class="detail-cnt-wrap border-wrap mb-1">
          <p><span>근속</span><span class="detail-cnt">98</span></p>
          <p><span>행사</span><span class="detail-cnt">98</span></p>
          <p><span>서류</span><span class="detail-cnt">98</span></p>
          <p><span>수업준비</span><span class="detail-cnt">98</span></p>
          <p><span>개인PC</span><span class="detail-cnt">98</span></p>
        </div>
        <div class="detail-cnt-wrap border-wrap mb-1">
          <p><span>자기개발</span><span class="detail-cnt">98</span></p>
          <p><span>육아휴직</span><span class="detail-cnt">98</span></p>
          <p><span>동료관계</span><span class="detail-cnt">98</span></p>
          <p><span>리더쉽</span><span class="detail-cnt">98</span></p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="text-align:center;font-size:12px;color:#666;">
      <p class="ma-0">어린이집은 평가인증 정보와</p>
      <p class="ma-0">원앤집 유아교사 리뷰 점수 기준으로</p>
      <p class="ma-0">원앤집 지표를 제공하고 있습니다.</p>
    </div>
  </div>
  <!--END item-wrap --> 
</div>
</template>

<script>
//import CompanyReviewItem from "@/components/review/CompanyReviewItem.vue"

export default {
  name: "CompanyDetailView",
  components: {},
  props: [],
  data() {
    return {
      backgroundUrl: '/resources/images/jipyo_bg.jpg',
      iconUrl: '/resources/images/icon_jipyo.png',

      id:null,
      companyId:null,
    };
  },
  methods: {
    
  },
  created(){
    this.companyId = this.$route.params.companyId;
    this.id = this.$route.params.id;
  }
};
</script>

<style lang="scss" scoped>
.circle{
  min-height:200px;min-width: 200px;
  font-weight:bolder;text-align:center;
  margin: 0 auto;
  background-position:center;background-size:contain;
  display: flex;justify-content: center;align-items: center;flex-direction: column;
  position:relative;
}
.circle:before{
  content: "";
  display: block;
  width: 97%;
  height: 97%;
  border: 1px solid white;
  flex: 1 0 100%;
  position: absolute;
  border-radius: 100%;
}

.step-title {
  font-size: 16px;
  font-weight: 600;
  margin:0px;
  padding: 10px 0;  
  display: flex;
  p:nth-child(1){
    flex: 1 0 50%;
    text-align: right;
    border-right: 1px solid #dfdfdf;
    padding-right: 15px;
    margin-right: 15px;
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 10px;
  }
  p:nth-child(2){
    flex: 1 0 50%;
    font-size: 33px;
    color: orange;
    font-weight: normal;
    margin: 0;
  }
}
.card-wrap{
  padding:10px;
  background-color:white;
  box-shadow: 2px 2px 7px #aaaaaa44;
  border-radius: 4px;
}

.detail-cnt-wrap{
  display:flex;justify-content:space-between;background-color:#efefef;
  p{
    text-align: center;
    margin:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1 0;
    span{
      display:block;font-size:11px;text-align:center;
    }
    span.detail-cnt{
      width:28px;padding:2px;margin:0;
      //background-color:#efefef;border-radius:28px;flex:0 1;
    }
  }
}
.border-wrap{
  padding:10px 15px;border:1px solid #efefef;border-radius:5px;
}



</style>
