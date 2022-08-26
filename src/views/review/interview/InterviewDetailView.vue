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
        <div class="step-title">면접리뷰</div>
        <div class="exp-wrap" style="">
          <p style="margin:0;color:#999"><img :src="iconMap.blue"/><span>교사경력 3년차</span></p>
          <p style="margin:0;color:#999">2022-07-11</p>
        </div>
        <!--END review-item-wrap-->
        <div class="option-wrap">
          <div class="option-item">
            <p>모의수업</p>
            <p>
              <span>-제작한 교구보여주기</span>
              <span>-제작한 교구보여주기</span>
              <span>-제작한 교구보여주기</span>
            </p>
          </div>
          <div class="option-item">
            <p>모의수업</p>
            <p>
              <span>-제작한 교구보여주기</span>
              <span>-제작한 교구보여주기</span>
              <span>-제작한 교구보여주기</span>
            </p>
          </div>
        </div>
        <!--END option-wrap-->
        <div class="option-wrap">
          <div class="option-item">
            <p>인적성 검사</p>
            <p>
              <span>-있어요</span>
            </p>
          </div>
          <div class="option-item">
            <p>면접 결과</p>
            <p>
              <span>-합격</span>
            </p>
          </div>
          <div class="option-item">
            <p>난이도</p>
            <p>
              <span>-긴장</span>
            </p>
          </div>
        </div>
        <!--END option-wrap-->
        <div class="step-title">면접질문</div>
        <div class="question-wrap">
          <p>
            <span>Q</span>
            <span>간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하</span>
          </p>
          <p>
            <span>A</span>
            <span>간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하간다라마바사아자차카타파하</span>
          </p>
        </div>
        <div class="question-wrap">
          <p>
            <span>Q</span>
            <span>혼자왔니</span>
          </p>
          <p>
            <span>A</span>
            <span>결혼했는디유</span>
          </p>
        </div>
        <!--END question-wrap-->
      </div>
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
      iconMap:{
        blue: '/resources/images/blue_bronze.png',
        green: '/resources/images/green_bronze.png',
        red: '/resources/images/red_bronze.png',
      },
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
  padding: 10px 0 0;
  margin-bottom:0;
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
    div.exp-wrap{
      display: flex;justify-content: space-between;align-items: center;padding:10px 0;font-size:14px;
      > p{
        display: flex;
        align-items: center;
        > img{
          max-height:24px;
        }
        > span{
          margin-top: 4px;
          color: #666;
        }
      }
    }
  }
  div.option-wrap{
    display:flex;
    div.option-item{
      text-align: center;;
      background-color:#efefef;
      padding:10px 0;
      margin:5px;
      font-size:12px;
      flex:1 0;
      p{margin:0}
      p:nth-child(1){
        font-weight:bolder;
        font-size:13px;
      }
      p:nth-child(2){
        display:flex;
        flex-direction:column;
        span{
          color:#999;
        }
      }
    }
  }
  .question-wrap{
    p{
      margin:10px 0;
      font-size:14px;
      display:flex;
      align-items: start;
      span{
        color:#999;
      }
      span:nth-child(1){
        background-color:orange;
        padding:0 8px;
        border-radius:100%;
        color:white;
        font-size:18px;
        margin-right:5px;
      }
      span:nth-child(2){
        margin-top:3px;
      }
    }
    p:nth-child(2){
      span:nth-child(1){
        background-color:#aaa;
      }
    }
  }
}
</style>
