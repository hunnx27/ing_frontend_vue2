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
      <div class="review-item-wrap">
        <div class="step-title">연봉리뷰</div>
        <div class="exp-wrap" style="">
          <p style="margin:0;color:#999"><img :src="iconMap.blue"/><span>교사경력 {{data.workExp}}년차</span>|<span>16호봉</span></p>
        </div>

        <div class="amt-wrap">
          <div>
            <p><span>{{numberWithCommas(data.amt)}}</span><span>만원</span></p>
            <p>(수당미포함)</p>
          </div>
          <div class="item-wrap">
            <div class="item-row">
              <p>수당</p><p>{{data.totalCost!=null?data.totalCost:'-'}}만원</p>
            </div>
            <div class="item-row">
              <p>항목</p>
              <p>
                <span v-show="data.impCost!=null">처우개선비 {{data.impCost}}</span>
                <span v-show="data.workCost!=null">누리과정수당 {{data.workCost}}</span>
                <span v-show="data.addCost!=null">근무환경개선 {{data.addCost}}</span>
                <span v-show="data.etcCost!=null">기타 {{data.etcCost}}</span>
              </p>
            </div>
            <div class="item-row">
              <p>퇴직금</p><p>{{data.endAtmYn}}</p>
            </div>
          </div>
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
      <p class="ma-0" style="flex:0 1 22%;font-size:12px;padding:5px ;text-align:center;border: 1px solid #aaa;background-color:white;color:#777">면접<br/>리뷰작성</p>
    </div>
  </div>
  <!--END item-wrap --> 
  <LoadingItem isLoading="true" v-else></LoadingItem>
</div>
</template>

<script>
import YearamtReviewItem from "@/components/review/YearamtReviewItem.vue"
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
  components: {LoadingItem},
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
    getAmtDetailInfo(){
      companyApi.getAmtDetailInfo(
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
    numberWithCommas(x) {
      return x!=null? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-';
    },
  },
  created(){
    this.companyId = this.$route.params.companyId;
    this.id = this.$route.params.id;
    this.$emit("setLayout", null, options);
    this.getComapnyJipyoData();
    this.getAmtDetailInfo();
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
  .amt-wrap{
    display:flex;
    align-items: center;
    border-top:1px solid #efefef;
    border-bottom:1px solid #efefef;
    > div:first-child{
      flex:0 1 40%;
      p{
        color:#666;
        margin:0;
        text-align:center;
        font-size:12px;
        span:first-child{
          color:#333;
          font-size:26px;
          margin-right:5px;
          font-weight:bolder;
        }
        span:last-child{
        }
      }
      p:last-child{
        font-size:12px;
      }
    }
  }
  .item-wrap{
    flex: 0 1 60%;
    padding: 5px;
    background-color: white;
    font-size: 12px;
    margin-bottom: 5px;
    margin-top: 5px;
    border-left: 1px solid #efefef;
    .item-row{
      display:flex;
      padding:10px;
      align-items:center;
      p{
        margin:0;
      }
      p:nth-child(1){
        flex:0 1 33%;
        font-weight:bolder;
      }
      p:nth-child(2){
        color:#999;
        text-align:left;
        flex:0 1 67%;
        display:flex;
        flex-direction:column;
      }
    }
    .item-row:nth-child(odd) { background-color: white; }
    .item-row:nth-child(even) { background-color: #efefef; }
  }
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
        > span:last-child{
          color:orange;
        }
      }
    }
  }
}

</style>
