<template>
<div>
  <div class="page-wrap" v-if="isLoading">
    <div class="mb-2 card-wrap" style="">
      <p class="ma-0" style="text-align:center;">
        원앤집 지표<span style="color:red">{{jipyoData.jipyoScore}}점</span>입니다.
      </p>
      <p style="color: #999;font-size: 12px;margin:10px 0 0;display:flex;align-items: center;justify-content: center;text-align:center;">
        <span @click="detailJipyo">자세히보기</span><v-icon style="font-size: 18px;">mdi-chevron-right</v-icon>
      </p>
    </div>
    
    <div class="review-wrap mb-2 card-wrap pa-0">
      <div class="review-item-wrap detail">
        <div class="step-title">기관리뷰</div>
    
        <CompanyReviewItem uid="id" :data="data"></CompanyReviewItem>

        <div style="display: flex;justify-content: space-between;align-items: center;padding:10px 0;font-size:14px;">
          <p style="margin:0;color:#999">교사경력 {{data.workExp}}년차</p>
          <p style="margin:0;color:#999">{{data.createDate}}</p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">계속 근무 희망</div>
      <div style="display:flex;height:60px;justify-content:stretch;">
        <p style="margin:10px 30px 0;flex:0 1;">
          <img src="/resources/images/teacher_face.png" style="height:100%;max-height:100px;"/>
        </p>
        <div style="position:relative;margin:0;flex:1 0;display:flex;align-items:center;justify-content: center;font-weight:bolder;background-color:#efefef;">
          <span style="z-index:1;font-size:15px;font-weight:bolder;">{{data.keepWork}}</span>
          <div style="position: absolute;left:-27px;z-index:0;top:-29px;width: 0px;height: 0px;border-width: 40px;border-style: solid solid solid solid;border-color: #ffffff00 #ffffff00 #efefef #ffffff00;"></div>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">업무량</div>
      <div class="item-wrap">
        <div class="item-row">
          <p>행사횟수</p><p>{{data.eventCntJumsu}}</p>
        </div>
        <div class="item-row">
          <p>서류업무</p><p>{{data.docWrokJumsu}}</p>
        </div>
        <div class="item-row">
          <p>수업준비시간</p><p>{{data.readyClassJumsu}}</p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">직무만족</div>
      <div class="item-wrap">
        <div class="item-row">
          <p>개인PC</p><p>{{data.personalPcJumsu}}</p>
        </div>
        <div class="item-row">
          <p>자기개발</p><p>{{data.selfDevJumsu}}</p>
        </div>
        <div class="item-row">
          <p>육아 휴직 허용 분위기</p><p>{{data.kizRestJumsu}}</p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">원내분위기</div>
      <div class="item-wrap">
        <div class="item-row">
          <p>동료관계</p><p>{{data.partnershipJumsu}}</p>
        </div>
        <div class="item-row">
          <p>원장리더쉽</p><p>{{data.ownerLeadershipJumsu}}</p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap pa-0" style="display:flex;align-items:center;justify-content: space-around;">
      <p style="margin-bottom: 0;padding: 10px 0;flex: 1 0 50%;text-align:center;font-size:14px;"><v-icon style="color:orange;font-size:20px;">mdi-star</v-icon>팔로잉</p>
      <p style="margin-bottom: 0;padding: 10px 0;flex: 1 0 50%;text-align:center;font-size:14px;background-color:orange;color:white">유아교사에게상담하기</p>
    </div>

    <div class="card-wrap" style="display:flex;justify-content: space-between;align-items:center;">
      <p class="ma-0" style="">
        <span style="font-size:12px;display:block">선생님! 원앤집 함께해요♡</span>
        <span style="font-size:12px;display:block">소중한 리뷰는 우리 모두의 힘이에요.</span>
      </p>
      <p class="ma-0" style="flex:0 1 22%;font-size:12px;padding:5px ;text-align:center;border: 1px solid #aaa;background-color:white;color:#777">기관<br/>리뷰작성</p>
    </div>
  </div>
  <!--END item-wrap --> 
  <LoadingItem isLoading="true" v-else></LoadingItem>
</div>

</template>

<script>
import CompanyReviewItem from "@/components/review/CompanyReviewItem.vue"
import companyApi from "@/api/company";
import LoadingItem from "@/components/common/LoadingItem.vue"
const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: true,
    };

export default {
  name: "CompanyDetailView",
  components: {CompanyReviewItem, LoadingItem},
  props: [],
  data() {
    return {
      id:null,
      companyId:null,
      isLoading:false,
      jipyoData:{},
      data:{},
    };
  },
  methods: {
    doChartBox(){
      this.detailJipyo();
    },
    detailJipyo(){
      const URI = `/review/reviewDetail/${this.companyId}/jipyo`;
      this.$router.push(URI);
    },
    getComapnyJipyoData(){
      companyApi.getCompanyJipyoById(
        this.companyId, 
        (body)=>{
          this.jipyoData = body.data;
          this.$emit("setLayout", body.data.officeName, options);
          this.isJipyoLoading = true;
        },
        (err)=>{
          console.log(err);
        }
      )
    },
    getCompanyDetailInfo(){
      companyApi.getCompanyDetailInfo(
        {companyId:this.companyId,id:this.id}, 
        (body)=>{
          this.data = body.data;
          this.isLoading = true;
        },
        (err)=>{
          console.log(err);
        }
      )
    },
  },
  created(){
    this.companyId = this.$route.params.companyId;
    this.id = this.$route.params.id;
    this.$emit("setLayout", null, options);
    this.getComapnyJipyoData();
    this.getCompanyDetailInfo();
  }
};
</script>

<style lang="scss" scoped>

.step-title {
  font-size: 16px;
  font-weight: 600;
  margin:0px;
  padding: 10px 0;
  margin-bottom:10px;
  border-bottom:1px solid #efefef;
}
.card-wrap{
  padding:10px;
  background-color:white;
  box-shadow: 2px 2px 7px #aaaaaa44;
  border-radius: 4px;
}
.review-wrap{
  .review-item-wrap{
    background: white;padding: 10px;border-radius:2px;margin: 0;padding: 10px;
    ::v-deep .review-wrap .review-item-wrap{
      margin:0;
      padding:0;
    }
  }
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
      flex:0 1 45%;
      font-weight:bolder;
    }
    p:nth-child(2){
      color:#999
    }
  }
  .item-row:nth-child(odd) { background-color: white; }
  .item-row:nth-child(even) { background-color: #efefef; }
}
</style>
