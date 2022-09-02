<template>
  <div class="ReviewTabItem-warp" style="background: #f2f2f2;">
    <div class="amt-wrap">
      <div class="avg-wrap">
        <p>
          <span>평균</span>
          <span>{{infoData!=null? numberWithCommas(infoData.totalAmt) : 0}}</span>
          <span>만원</span>
        </p>
        <p>
          2016년 보육교직원 호봉표기준 16 호봉
        </p>
      </div>
      <div class="bar-wrap">
        <p style="overflow:hidden;">
          <v-slider
            hide-details
            readonly
            :min="infoData.minAmt"
            :max="infoData.maxAmt"
            :value="infoData.totalAmt"
            track-color="#E1E4E9"
            thumb-color="white"
            color='#dfdfdf'
          ></v-slider>
        </p>
        <p>
          <span>최저{{infoData.minAmt}}만원</span>
          <span>최고{{infoData.maxAmt}}만원</span>
        </p>
      </div>
    </div>

    <!-- 메뉴 1,2 START -->
    <div>
      <div
        class="lighten-5 pa-1 mb-2 ma-0"
        style="width:100%;display: flex;justify-content: space-between;background-color:white"
      >
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
              >
                {{selectedMenu1}} <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in menu1Items"
                :key="index" @click="selectMenu1(item.title)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
    <!-- 메뉴 1,2 END -->
    <div style="display:flex;justify-content:space-between;background-color:white;align-items:center;">
      <p style="margin:0;padding:15px 10px;font-size:13px;color:#999">총 1건의 연봉리뷰</p>
      <p style="margin:0;padding:15px 10px;font-size:13px;color:red;font-weight:bolder">연봉리뷰쓰기</p>
    </div>
    <div>
      <YearamtReviewItem uid="id" :data="item" :jipyoData="jipyoData" v-for="item in data" :key="item.id" @detailReview="detailReview(item.id)"></YearamtReviewItem>
    </div>
  </div>
  <!--END item-wrap -->    
</template>

<script>
import YearamtReviewItem from "@/components/review/YearamtReviewItem.vue"

export default {
  name: "ReviewTabItem",
  components: {YearamtReviewItem},
  props: ['data', 'jipyoData', 'infoData'],
  data() {
    return {
      input:3000,
      companyId: null,
      selectedMenu1: '최신순',
      menu1Items: [
        { title: '전체리뷰보기' },
        { title: '기관리뷰만보기' },
        { title: '면접리뷰만보기' },
        { title: '연봉리뷰만보기' },
      ],
      iconMap: {
        seekbar: "/resources/images/seekbar_thumb.png",
      }
    };
  },
  methods: {
    detailReview(id){
      const URI = `/review/reviewDetail/${this.companyId}/yearamtReview/${id}`;
      this.$router.push(URI);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  created(){
    console.log(this.$route.params.companyId);
    this.companyId = this.$route.params.companyId;
  }
};
</script>

<style lang="scss" scoped>

.step-title {
  font-size: 20px;
  font-weight: 600;
  margin:0px;
  padding: 10px 0;
  margin-bottom:10px;
  border-bottom:1px solid #efefef;
}
.score-wrap{
  display:flex;align-items:center;background-color:white;
  p{
    flex:1 0;margin:5px 0;padding:15px 0;border-right:1px solid #dfdfdf;
    span:first-child{
      display:block;text-align:center;color:orange;font-size:25px;font-weight:bolder;
    }
    span:last-child{
      display:block;text-align:center;font-size:12px;color:#999
    }
  }
}

.amt-wrap{
  background-color:white;
  .avg-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    p:nth-child(1){
      display:flex;
      align-items:baseline;
      justify-content: center;
      margin:0;
      span:nth-child(1){
        margin-right:5px;
      }
      span:nth-child(2){
        font-size:30px;
        font-weight:bolder;
        margin-right:5px;
      }
      span:nth-child(3){
      }
    }
    p:nth-child(2){
      color:white;
      background-color:#999;
      padding:2px 5px;
      font-size:14px;
    }
  }
  .bar-wrap{
    p:nth-child(1){
      margin:0;
      padding: 0 10px;
      ::v-deep .v-slider--horizontal{
        .v-slider__track-container{
          height: 10px;
          .v-slider__track-fill{
            border-radius:10px;
          }
        }
        .v-slider__track-container::before{
          content:'';z-index:10;
          display:block;position:absolute;left:-5px;top:0;width:11px;height:11px;background:#fff;border:1px solid #dfdfdf;border-radius:8px;
        }
        .v-slider__track-container::after{
          content:'';
          display:block;position:absolute;right:-5px;top:0;width:11px;height:11px;background:#fff;border:1px solid #dfdfdf;border-radius:8px;
        }
      }
      ::v-deep .v-slider__thumb {
        height: 18px;
        width: 18px;
        border:3px solid orange !important;
      }
    }
    p:nth-child(2){
      display:flex;
      justify-content: space-between;
      font-size:13px;
      margin-bottom:0;
      padding: 0 20px 10px;
      color:#999
    }
    
  }
}
</style>
