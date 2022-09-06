<template>
  <div class="review-wrap">
        
    <div class="review-item-wrap" @click="detailReview(uid)">
      <div class="review-item-header" v-show="uid=='reviewlist'">
          <p class="ma-0 review-item-title">{{data.companyName}}</p>
          <p class="ma-0 review-item-address" style="display: flex;align-items: center;justify-content: flex-start;font-size:14px">
          <v-icon>mdi-chevron-right</v-icon> {{data.establishmentTypeName}} <v-icon>mdi-chevron-right</v-icon> {{data.mapsidogunguName}}
          </p>
      </div>
    
      <div class="review-item-content" style="padding:10px" >
          <p class="text--primary ma-0" style="font-size: 14px;">{{data.txt}}</p>
      </div>
    
      <div class="review-item-bottom">
          <p class="review-score-prepend ma-0">
          <v-icon>mdi-face-man</v-icon>
          </p>
          <div class="review-score">
          <p class="sub-title avg-title ma-0">총 만족도</p>
          <p class="avg-score">
              {{parseFloat(data.starJumsuTotalAvg).toFixed(1)}}
          </p>
          </div>
          <div class="review-score">
          <p class="sub-title ma-0">업무량</p>
          <p class="star ma-0">
              <v-icon v-for="n in data.starJumsuWorkload" :key="`wla-${n}`">mdi-cards-heart</v-icon>
              <v-icon v-for="n in 5-data.starJumsuWorkload" :key="`wlb-${n}`">mdi-cards-heart-outline</v-icon>
          </p>
          </div>
          <div class="review-score">
          <p class="sub-title ma-0">직무만족</p>
          <p class="star ma-0">
              <v-icon v-for="n in data.starJumsuJobSatisfaction" :key="`jsa-${n}`">mdi-cards-heart</v-icon>
              <v-icon v-for="n in 5-data.starJumsuJobSatisfaction" :key="`jsb-${n}`">mdi-cards-heart-outline</v-icon>
          </p>
          </div>
          <div class="review-score">
          <p class="sub-title ma-0">원내분위기</p>
          <p class="star ma-0">
              <v-icon v-for="n in data.starJumsuWorkAtmosphere" :key="`cma-${n}`">mdi-cards-heart</v-icon>
              <v-icon v-for="n in 5-data.starJumsuWorkAtmosphere" :key="`cmb-${n}`">mdi-cards-heart-outline</v-icon>
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

  },
  mounted(){
    
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

</style>
