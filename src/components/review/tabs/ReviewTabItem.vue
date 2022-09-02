<template>
  <div class="ReviewTabItem-warp" style="background: #f2f2f2;">
    <div class="score-wrap">
      <p>
        <span>{{jipyoData.escore!=null?jipyoData.uscore.scoreTot:'-'}}점</span>
        <span>교사 평가</span>
      </p>
      <p>
        <span>{{jipyoData!=null ? parseFloat(jipyoData.starAvgJumsu).toFixed(1) : '-'}}</span>
        <span>총 만족도</span>
      </p>
      <p>
        <span>{{jipyoData.escore!=null?jipyoData.uscore.scoreKeepWork:'-'}}%</span>
        <span>계속 근무 희망</span>
      </p>
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
      <p style="margin:0;padding:15px 10px;font-size:13px;color:#999">총 1건의 리뷰</p>
      <p style="margin:0;padding:15px 10px;font-size:13px;color:red;font-weight:bolder">기관리뷰쓰기</p>
    </div>
    <div>
      <CompanyReviewItem uid="id" :data="item" :jipyoData="jipyoData" v-for="item in data" :key="item.id" @detailReview="detailReview(item.id)"></CompanyReviewItem>
    </div>
  </div>
  <!--END item-wrap -->    
</template>

<script>
import CompanyReviewItem from "@/components/review/CompanyReviewItem.vue"

export default {
  name: "ReviewTabItem",
  components: {CompanyReviewItem},
  props: ['data', 'jipyoData'],
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
    };
  },
  methods: {
    detailReview(id){
      const URI = `/review/reviewDetail/${this.companyId}/companyReview/${id}`;
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
</style>
