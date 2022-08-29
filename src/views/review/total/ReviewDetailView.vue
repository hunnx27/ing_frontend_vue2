<template>
  
  <!-- Wrap START -->
  <div class="ReviewDetailView">
    <div v-if="isCompanyLoading"
      class="lighten-5 ma-0 block"
      :style="{backgroundImage: `url('${backgroundUrl}')`}"
      style="display:flex;height:100%;align-items: stretch;justify-content: center;background-position: center;background-size: cover;padding:10px; flex-direction:column;"
    >
      <div style="display:flex;flex-direction:column;align-items:center;padding:10px;">
        <h3 style="color:white;">{{companyInfo.officeName}}</h3>
        <p class="ma-0 review-item-address" style="display: flex;align-items: center;justify-content: flex-start;font-size:14px;color:white;">
          <v-icon >mdi-chevron-right</v-icon> {{companyInfo.establishmentTypeName}} <v-icon>mdi-chevron-right</v-icon> {{companyInfo.mapsidogunguName}}
        </p>
      </div>
      <div style="background-color: #fafafaaa;border-radius: 10px;padding: 10px;">
        <p class="ma-0" style="text-align:center;">
          원앤집 지표<span style="color:red">81점</span>입니다.
        </p>
        <p @click="detailJipyo" style="font-size: 15px;font-weight: bolder;margin:10px 0 0;display:flex;align-items: center;justify-content: center;text-align:center;">
          <span>자세히보기</span><v-icon>mdi-chevron-right</v-icon>
        </p>
      </div>
    </div>
    <LoadingItem isLoading="true" v-else></LoadingItem>
    <div style="border:3px solid red;">
      <v-btn @click="getCompanyInfo">기관정보API</v-btn>
      <v-btn @click="getCompanyReviewList">리뷰API</v-btn>
      <v-btn @click="getInterviewReviewList">면접API</v-btn>
      <v-btn @click="getYearamtReviewList">연봉API</v-btn>
    </div>
    <v-tabs
      centered
      color="black"
    >
      <v-tabs-slider color="orange"></v-tabs-slider>
      <!-- <v-tab @click="selectedTab='CompanyInfoTabItem'">기관정보</v-tab>
      <v-tab @click="selectedTab='ReviewTabItem'">리뷰</v-tab>
      <v-tab @click="selectedTab='InterviewTabItem'">면접</v-tab>
      <v-tab @click="selectedTab='YearamtTabItem'">연봉</v-tab> -->
      <v-tab>기관정보</v-tab>
      <v-tab>리뷰</v-tab>
      <v-tab>면접</v-tab>
      <v-tab>연봉</v-tab>

      <v-tab-item>
        <CompanyInfoTabItem :data="companyInfo" v-if="isCompanyLoading"></CompanyInfoTabItem>
        <LoadingItem isLoading="true" v-else></LoadingItem>
      </v-tab-item>
      <v-tab-item>
        <ReviewTabItem :data="companyReviewList"></ReviewTabItem>
      </v-tab-item>
      <v-tab-item>
        <InterviewTabItem :data="interviewReviewList"></InterviewTabItem>
      </v-tab-item>
      <v-tab-item>
        <YearamtTabItem :data="yearamtReviewList"></YearamtTabItem>
      </v-tab-item>
    </v-tabs>

    <!-- <component :is="selectedTab" /> -->

  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import companyApi from "@/api/company";
import reviewApi from "@/api/review";
import CompanyInfoTabItem from "@/components/review/tabs/CompanyInfoTabItem.vue"
import ReviewTabItem from "@/components/review/tabs/ReviewTabItem.vue"
import InterviewTabItem from "@/components/review/tabs/InterviewTabItem.vue"
import YearamtTabItem from "@/components/review/tabs/YearamtTabItem.vue"
import LoadingItem from "@/components/common/LoadingItem.vue"

export default {
  name: "ReviewDetailView",
  components:{
    CompanyInfoTabItem, ReviewTabItem, InterviewTabItem, YearamtTabItem, LoadingItem
  },
  data() {
    return {
      companyId:-1,
      selectedTab: 'CompanyInfoTabItem',
      companyName:null, //선택한 기관명
      sigugunName: null, //선택한 기관의 시군구명
      establishmentTypeName: null,//선택한 기관의 기관유형

      txt:null, //한줄평가
      likeCode: null, //좋아요

      backgroundUrls: [
        '/resources/images/review_bg.jpg',
        '/resources/images/review_bg_02.jpg',
        '/resources/images/review_bg_03.jpg'
      ],
      backgroundUrl: null,

      isCompanyLoading: false,
      companyInfo:{},
      companyReviewList:[],
      interviewReviewList:[],
      yearamtReviewList:[],
    };
  },
  methods: {
    ...mapActions('CompanyReview',['setReq2']),
    ...mapActions('CompanySearch',{setCompanySearchReq:'setReq'}),
    doNext() {
      //FIXME need Validation
      this.setStore();
      this.$router.push("/review/company/companyReg3");
    },
    onChangeLikeCode(value){
      this.likeCode = value;
    },
    getBackgroundUrl(){
      const size = this.backgroundUrls.length;
      const min = 0
      const max = size-1;
      const idx = Math.floor(Math.random() * (max - min) + min);
      const newidx = idx%size;
      console.log(newidx);
      console.log(this.backgroundUrls[newidx]);
      return this.backgroundUrls[newidx];
    },
    getCompanyInfo(){
      companyApi.getCompanyInfo(
        this.companyId, 
        (body)=>{
          this.companyInfo = body;
          this.isCompanyLoading = true;
        },
        (err)=>{
          console.log(err);
        }
      )
    },
    getCompanyReviewList(){
      reviewApi.getCompanyReviewListById(
        this.companyId, 
        (body)=>{
          console.log(body);
          this.companyReviewList = body;
        },
        (err)=>{
          console.log(err);
        }
      )
    },
    getInterviewReviewList(){
      reviewApi.getInterviewReviewListById(
        this.companyId, 
        (body)=>{
          console.log(body);
          this.interviewReviewList = body;
        },
        (err)=>{
          console.log(err);
        }
      )
    },
    getYearamtReviewList(){
      reviewApi.getYearamtReviewListById(
        this.companyId, 
        (body)=>{
          console.log(body);
          this.yearamtReviewList = body;
        },
        (err)=>{
          console.log(err);
        }
      )
    },
    detailJipyo(){
      const URI = `/review/reviewDetail/${this.id}/jipyo`;
      this.$router.push(URI);
    },
    setStore(){
      const txt = this.txt;
      const likeCode = this.likeCode
      this.setReq2({txt, likeCode})
    }
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters("CompanyReview",["reqData"]),
    ...mapGetters("CompanySearch",{companySearch:"reqData"}),
  },
  created() {
    this.companyId = this.$route.params.companyId;
    this.backgroundUrl = this.getBackgroundUrl();
    if (this.reqData != null) {
      const company = this.reqData;
      //if(yearamt.workExpOpenYn) this.workExpOpenYn = yearamt.workExpOpenYn;
      if(company.txt) this.txt = company.txt;
      if(company.likeCode) this.likeCode = company.likeCode;
    }
    if(this.companySearch != null){
      const companySearch = this.companySearch;
      if(companySearch.companyName) this.companyName = companySearch.companyName;
      if(companySearch.sigugunName) this.sigugunName = companySearch.sigugunName;
      if(companySearch.establishmentTypeName) this.establishmentTypeName = companySearch.establishmentTypeName;
    }
    const title = this.companyName? this.companyName : "-";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: true,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
    this.getCompanyInfo();
  },
};
</script>

<style>
.v-slide-group__content .v-tab{
  min-width:70px;
}
</style>
<style lang="scss" scoped>

</style>
