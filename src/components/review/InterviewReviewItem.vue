<template>
  <div class="review-wrap">
        
    <div class="review-item-wrap" @click="detailReview(uid)">
      <div class="review-item-header" v-show="uid=='reviewlist'">
        <div>
          <div class="review-item">
            <p class="ma-0 review-item-title">{{data.companyName}}</p>
            <p class="ma-0 review-item-address" style="display: flex;align-items: center;justify-content: flex-start;font-size:14px">
              <v-icon>mdi-chevron-right</v-icon> {{data.establishmentTypeName}} <v-icon>mdi-chevron-right</v-icon> {{data.mapsidogunguName}}
            </p>
          </div>
          <div class="review-item">
            교사경력{{data.workExp}}년차
          </div>
        </div>
      </div>
    
      <div class="review-item-content">
          <p class="text--primary">
            <span>면접질문</span>
            <span>{{data.q_1}}</span>
          </p>
      </div>
    
      <div class="review-item-bottom">
          <p class="review-prepend ma-0">
            <span><v-icon>mdi-timer-outline</v-icon></span>
          </p>
          <div class="review-test-wrap">
            <p>
              <span>면접분위기</span>
              <span>{{data.itemMood}}</span>
            </p>
            <p>
              <span>모의시험</span>
              <span>{{data.itemTest1}}</span>
            </p>
            <p>
              <span>필기시험</span>
              <span>{{data.itemTest2}}</span>
            </p>
            <p>
              <span>인적성검사</span>
              <span>{{data.itemTest3}}</span>
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
  props: ["uid", "data"],
  data() {
    return {
      
    };
  },
  methods: {
    detailReview(id){
      //FIXME 
      this.$emit("detailReview",id);
    },
  },
  created(){
    
  }
};
</script>

<style lang="scss" scoped>
.review-wrap{
  
  .review-item-wrap{
    background: white;padding: 10px;border-radius:5px;margin: 10px;padding: 10px;
    .review-item-header{
      border-bottom: 1px solid #aaa;
      padding-bottom: 10px;
      > div{
        display:flex;
        justify-content:space-between;
        align-items:end;
        .review-item{
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
        .review-item:nth-child(2){
          font-size:11px;
          color:#999;
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
          font-size:14px;
          color:#333;
          font-weight:bolder;
        }
        span:nth-child(2){
          font-size:14px;
          color:#666;
        }
      }
    }
    .review-item-bottom{
      display:flex;padding:10px;border:1px solid #aaa;border-radius:10px;align-items:center;
      .review-prepend{
        flex:0 1 10%;display: flex;justify-content: center;align-items: center;
        display:flex;flex-direction:column;
        span{
          text-align:center;font-size:11px;
        }
      }
      .review-test-wrap{
        flex:1 0;
        text-align: center;
        font-size:10px;
        display: flex;
        margin-left: 6px;
        align-items:center;
        p{
          display:flex;
          flex-direction: column;
          flex:1 0;
          margin:0;
          font-size: 11px;
          span:nth-child(1){
            font-size: 10px;
            font-weight:bolder;
            color:#666;
          }
          span:nth-child(2){
            background: #dfdfdf;
            color: #666;
            border-radius: 10px;
            width: 90%;
            max-width: 120px;
            margin: 2px auto;
            padding: 1px 0;
          }

        }
        p:nth-child(1){
          span:nth-child(1){
            color:#999;
          }
          span:nth-child(2){
            background: orange;
            color: white;
          }
        }
      }
    }
  }
}

</style>