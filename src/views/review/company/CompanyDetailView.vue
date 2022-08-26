<template>
  <div class="page-wrap">
    <div class="mb-2 card-wrap" style="">
      <p class="ma-0" style="text-align:center;">
        원앤집 지표<span style="color:red">81점</span>입니다.
      </p>
      <p style="color: #999;font-size: 12px;font-weight: bolder;margin:10px 0 0;display:flex;align-items: center;justify-content: center;text-align:center;">
        <span @click="detailJipyo">자세히보기</span><v-icon style="font-size: 18px;">mdi-chevron-right</v-icon>
      </p>
    </div>
    
    <div class="review-wrap mb-2 card-wrap pa-0">
      <div class="review-item-wrap">
        <div class="step-title">기관리뷰</div>
    
        <div class="review-item-content" style="padding:10px" >
          <p class="text--primary ma-0" style="font-size: 15px;">
          애기 혼자놀다 다쳐도 교사탓 원장 참견심하고 교사컴퓨터1대로 3명돌아가면서 씀<br/>
          원장이 기분파라 기분 맞추기 힘듬
          </p>
        </div>
    
        <div class="review-item-bottom">
          <p class="review-score-prepend ma-0">
          <v-icon>mdi-face-man</v-icon>
          </p>
          <div class="review-score">
          <p class="sub-title avg-title ma-0">총 만족도</p>
          <p class="avg-score">
              3.3
          </p>
          </div>
          <div class="review-score">
          <p class="sub-title ma-0">업무량</p>
          <p class="star ma-0">
              <v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart-outline</v-icon>
          </p>
          </div>
          <div class="review-score">
          <p class="sub-title ma-0">직무만족</p>
          <p class="star ma-0">
              <v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart-outline</v-icon>
          </p>
          </div>
          <div class="review-score">
          <p class="sub-title ma-0">원내분위기</p>
          <p class="star ma-0">
              <v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart-outline</v-icon>
          </p>
          </div>
        </div>

        <div style="display: flex;justify-content: space-between;align-items: center;padding:10px 0;font-size:14px;">
          <p style="margin:0;color:#999">교사경력 3년차</p>
          <p style="margin:0;color:#999">2022-07-11</p>
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
          <span style="z-index:1;font-size:15px;font-weight:bolder;">계속근무, 싫어요</span>
          <div style="position: absolute;left:-27px;z-index:0;top:-29px;width: 0px;height: 0px;border-width: 40px;border-style: solid solid solid solid;border-color: #ffffff00 #ffffff00 #efefef #ffffff00;"></div>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">업무량</div>
      <div class="item-wrap">
        <div class="item-row">
          <p>행사횟수</p><p>연 5~10회</p>
        </div>
        <div class="item-row">
          <p>서류업무</p><p>적당해요</p>
        </div>
        <div class="item-row">
          <p>수업준비시간</p><p>1~2시간 미만</p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">직무만족</div>
      <div class="item-wrap">
        <div class="item-row">
          <p>개인PC</p><p>함께써요</p>
        </div>
        <div class="item-row">
          <p>자기개발</p><p>대학원 진학 허용해요</p>
        </div>
        <div class="item-row">
          <p>육아 휴직 허용 분위기</p><p>육아사용 교사 2명 이하</p>
        </div>
      </div>
    </div>

    <div class="mb-2 card-wrap" style="background-color:white">
      <div class="step-title">원내분위기</div>
      <div class="item-wrap">
        <div class="item-row">
          <p>동료관계</p><p>상호격려 및 협동</p>
        </div>
        <div class="item-row">
          <p>원장리더쉽</p><p>권위</p>
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
</template>

<script>
//import CompanyReviewItem from "@/components/review/CompanyReviewItem.vue"

export default {
  name: "CompanyDetailView",
  components: {},
  props: [],
  data() {
    return {
      id:null,
      companyId:null,
    };
  },
  methods: {
    detailJipyo(){
      const URI = `/review/reviewDetail/${this.id}/jipyo`;
      this.$router.push(URI);
    }
  },
  created(){
    this.companyId = this.$route.params.companyId;
    this.id = this.$route.params.id;
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
    .review-item-content{
      padding:10px;
    }
    .review-item-bottom{
      display:flex;padding:10px;border:1px solid #aaa;border-radius:10px;align-items: center;
      .review-score-prepend{
        flex-basis:14%;display: flex;justify-content: center;align-items: center;
        .v-icon{
          color:black;
        }
      }
      .review-score{
        flex-basis:25%;text-align: center;
        .sub-title{      
          font-size:11px;
          font-weight:bolder;
        }
        .sub-title.avg-title{
          font-size:12px;
          color:#999;
        }
        .avg-score{
          font-size: 11px;
          background: orange;
          color: white;
          border-radius: 10px;
          width: 90%;
          max-width: 80px;
          margin: 2px auto;
          padding: 2px 0;
        }
        .star .v-icon{
          font-size:10px;
          color: orange;
        }
      }
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
