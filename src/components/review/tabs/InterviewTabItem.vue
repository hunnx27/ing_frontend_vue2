<template>
  <div class="ReviewTabItem-warp" style="background: #f2f2f2;">

    <div class="summary-wrap pb-2">
      <div class="item-wrap">
        <div class="main-item" v-if="infoData.totalLevel=='highLevel'">
          <p class="mb-0"><img :src="iconMap.highUp" style=""/></p>
          <p class="mb-0">여유</p>
        </div>
        <div class="main-item" v-else-if="infoData.totalLevel=='midLevel'">
          <p class="mb-0"><img :src="iconMap.midUp" style=""/></p>
          <p class="mb-0">편안</p>
        </div>
        <div class="main-item" v-else>
          <p class="mb-0"><img :src="iconMap.lowUp" style=""/></p>
          <p class="mb-0">긴장</p>
        </div>
        <div class="sub-item" :class="{'active': infoData.totalLevel=='highLevel'}">
          <p>
            <span><img :src="iconMap.high"/></span>
            <span>여유</span>
            <span>{{infoData.highLevCount}}%</span>
          </p>
        </div>
        <div class="sub-item" :class="{'active': infoData.totalLevel=='midLevel'}">
          <p>
            <span><img :src="iconMap.mid"/></span>
            <span>편안</span>
            <span>{{infoData.midLevCount}}%</span>
          </p>
        </div>
        <div class="sub-item" :class="{'active': infoData.totalLevel=='lowLevel'}">
          <p>
            <span><img :src="iconMap.low"/></span>
            <span>긴장</span>
            <span>{{infoData.lowLevCount}}%</span>
          </p>
        </div>
      </div>

      <div class="item-wrap">
        <div class="main-item" v-if="infoData.totalGoal=='Goal'">
          <p class="mb-0"><img :src="iconMap.highUp" style=""/></p>
          <p class="mb-0">합격</p>
        </div>
        <div class="main-item" v-else-if="infoData.totalGoal=='Wait'">
          <p class="mb-0"><img :src="iconMap.highUp" style=""/></p>
          <p class="mb-0">대기</p>
        </div>
        <div class="main-item" v-else>
          <p class="mb-0"><img :src="iconMap.highUp" style=""/></p>
          <p class="mb-0">불합격</p>
        </div>
        <div class="sub-item" :class="{'active': infoData.totalGoal=='Goal'}">
          <p>
            <span><img :src="iconMap.high"/></span>
            <span>합격</span>
            <span>{{infoData.goalCount}}%</span>
          </p>
        </div>
        <div class="sub-item" :class="{'active': infoData.totalGoal=='Wait'}">
          <p>
            <span><img :src="iconMap.mid"/></span>
            <span>대기</span>
            <span>{{infoData.waitCount}}%</span>
          </p>
        </div>
        <div class="sub-item" :class="{'active': infoData.totalGoal=='Failed'}">
          <p>
            <span><img :src="iconMap.fail"/></span>
            <span>불합격</span>
            <span>{{infoData.noCount}}%</span>
          </p>
        </div>
      </div>
    </div>
    <!-- summary-wrap END -->

    <div class="test-wrap">
      <div>
        <p>
          <img :src="iconMap.simul"/>
        </p>
        <p>
          <span>{{infoData.mockCount}}명</span>
          <span>모의수업</span>
        </p>
      </div>
      <div>
        <p>
          <img :src="iconMap.write"/>
        </p>
        <p>
          <span>{{infoData.writCount}}명</span>
          <span>필기수업</span>
        </p>
      </div>
      <div>
        <p>
          <img :src="iconMap.test"/>
        </p>
        <p>
          <span>{{infoData.patCount}}명</span>
          <span>인적성검사</span>
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
      <p style="margin:0;padding:15px 10px;font-size:13px;color:#999">총 1건의 면접 리뷰</p>
      <p style="margin:0;padding:15px 10px;font-size:13px;color:red;font-weight:bolder">면접리뷰쓰기</p>
    </div>
    <div>
      <InterviewReviewItem uid="id" :data="item" :jipyoData="jipyoData" v-for="item in data" :key="item.id" @detailReview="detailReview(item.id)"></InterviewReviewItem>
    </div>
  </div>
  <!--END item-wrap -->    
</template>

<script>
import InterviewReviewItem from "@/components/review/InterviewReviewItem.vue"

export default {
  name: "ReviewTabItem",
  components: {InterviewReviewItem},
  props: ['data', 'jipyoData', 'infoData'],
  data() {
    return {
      companyId: null,
      selectedMenu1: '최신순',
      menu1Items: [
        { title: '전체리뷰보기' },
        { title: '기관리뷰만보기' },
        { title: '면접리뷰만보기' },
        { title: '연봉리뷰만보기' },
      ],
      iconMap: {
        high: "/resources/images/ic_review_circle_small.png",
        mid: "/resources/images/ic_review_squire_small.png",
        low: "/resources/images/ic_review_triangle_small.png",
        fail:"/resources/images/ic_review_failure_small.png",
        highUp: "/resources/images/ic_review_circle.png",
        midUp: "/resources/images/ic_review_squire.png",
        lowUp: "/resources/images/ic_review_triangle.png",
        failUp:"/resources/images/ic_review_failure.png",

        simul:"/resources/images/ic_simulation_teaching.png",
        write:"/resources/images/ic_review_write_test.png",
        test:"/resources/images/ic_personality_aptitude_test.png"
      }
    };
  },
  methods: {
    detailReview(id){
      console.log(id);
      const URI = `/review/reviewDetail/${this.companyId}/interviewReview/${id}`;
      this.$router.push(URI);
    }
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
.summary-wrap{
  display:flex;align-items:center;background-color:white;
  div.item-wrap{
    flex:1 0 50%;
    border-right:1px solid #dfdfdf;
    > div.main-item{
      text-align:center;
      margin:15px;
      img{
        max-height:40px;
      }
    }
    > div.sub-item{
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px 0;
        p{
          display: flex;
          align-items: center;
          margin:0;
          span{
          font-size:14px;
          display:flex;justify-content:cneter;flex-direction:column;
          margin-right:5px;
          padding:2px 0;
          img{
            max-height:16px;
          }
        }
      }
      
    }
    > div.active{
      background-color:#efefef;
    }
  }
}

.test-wrap{
  display:flex;
  background-color:white;
  > div{
    flex:1 0 33%;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
    p:nth-child(1){
      margin: 0;
      img{
        max-height:50px;
      }
    }
    p:nth-child(2){
      margin: 0 5px 0;
      margin-right: 5px;
      display:flex;
      flex-direction: column;
      
      span{
        font-size:12px;
      }
      span:nth-child(2){
        padding:2px 1px;
        background-color:#efefef;
        color:#666;
      }
    }
    
  }
  
}
</style>
