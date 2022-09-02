<template>
  <div class="review-wrap">
        
    <div class="review-item-wrap" @click="detailReview(uid)">
      <div class="review-item-header" v-show="uid=='reviewlist'">
        <div>
          <p class="ma-0 review-item-title">{{data.companyName}}</p>
          <p class="ma-0 review-item-address" style="display: flex;align-items: center;justify-content: flex-start;font-size:14px">
            <v-icon>mdi-chevron-right</v-icon> {{data.establishmentTypeName}} <v-icon>mdi-chevron-right</v-icon> {{data.mapsidogunguName}}
          </p>
        </div>
      </div>
    
      <div class="review-item-content">
          <p class="text--primary">
            <span>{{numberWithCommas(data.amt)}}<span>만원</span></span>
            <span>(수당미포함)</span>
          </p>
          <p class="text--primary">
            <span>교사경력{{data.workExp}}년차 | 1호봉</span>
          </p>
      </div>
    
      <div class="review-item-bottom">
          <p class="review-prepend ma-0">
            <span>수당</span>
            <span>{{data.totalCost!=null?data.totalCost:0}}</span>
            <span>단위:만원</span>
          </p>
          <div class="review-pay-wrap">
            <p>
              <span>처우개선비</span>
              <span>{{data.impCost!=null?data.impCost:0}}</span>
            </p>
            <p>
              <span>근무환경개선</span>
              <span>{{data.workCost!=null?data.workCost:0}}</span>
            </p>
          </div>
          <div class="review-pay-wrap">
            <p>
              <span>누리과정수당</span>
              <span>{{data.addCost!=null?data.addCost:0}}</span>
            </p>
            <p>
              <span>기타</span>
              <span>{{data.etcCost!=null?data.etcCost:0}}</span>
            </p>
          </div>
      </div>
    
    </div>

  </div>
  <!--END item-wrap -->    
</template>
<script>
export default {
  name: "YearamtTabItem",
  components: {},
  props: ["uid","data"],
  data() {
    return {
      
    };
  },
  methods: {
    detailReview(id){
      //FIXME 
      this.$emit("detailReview",id);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  created(){
    
  },
};
</script>

<style lang="scss" scoped>
.review-wrap{
  
  .review-item-wrap{
    background: white;padding: 10px;border-radius:5px;margin: 10px;padding: 10px;
    .review-item-header{
      border-bottom: 1px solid #aaa;
      padding-bottom: 10px;
      .review-item-title{
        color:#666;
        font-weight:bolder;
      }
      .review-item-address{
        display: flex;align-items: center;justify-content: flex-start;font-size:14px;color:#999;
        .v-icon{
          color:orange;
        }
      }
    }
    .review-item-content{
      padding:10px;
      display:flex;
      justify-content:space-between;
      align-items:end;
      p{
        font-size:15px;margin:0;
      }
      p:nth-child(1){
        flex:1 0;
        display:flex;
        flex-direction:column;
        span:nth-child(1){
          font-size:20px;
          color:#333;
          span{
            font-size:14px;
          }
        }
        span:nth-child(2){
          font-size:12px;
          color:#999;
        }
      }
      p:nth-child(2){
        font-size:11px;
        span{
          color:#999;
        }
      }
    }
    .review-item-bottom{
      display:flex;padding:10px;border:1px solid #aaa;border-radius:10px;
      .review-prepend{
        flex:0 1 20%;display: flex;justify-content: center;align-items: center;
        display:flex;flex-direction:column;
        span{
          text-align:center;font-size:11px;
        }
        span:nth-child(1){
          color:#999;
        }
        span:nth-child(2){
          font-size: 14px;
          background: orange;
          color: white;
          border-radius: 10px;
          width: 90%;
          max-width: 50px;
          margin: 2px auto;
          padding: 1px 0;
        }
        span:nth-child(3){
        }
      }
      .review-pay-wrap{
        flex:1 0;text-align: center;
        font-size:10px;
        display: flex;
        flex-direction: column;
        margin-left: 6px;
        p{
          display:flex;
          justify-content: space-between;
          margin:0 5px 0 0;
          flex:1 0 50%;
          align-items: center;
          span:nth-child(1){
          }
          span:nth-child(2){
            background-color:#efefef;
            padding:2px 10px;
            border-radius:10px;
          }
        }
      }
    }
  }
}

</style>
