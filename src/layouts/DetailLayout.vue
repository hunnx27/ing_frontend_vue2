<template>
  <v-app class="overflow-hidden" id="detail-layout">
      <!-- Header Section-->
      <v-app-bar
        color="deep-purple accent-4" 
        shrink-on-scroll
        fade-img-on-scroll
        scroll-target="#scroll-target"
        prominent
        dark 
        height=260px
        :src="`${backgroundUrl}`"
        class="flex-grow-0"
        style="font-size: inherit;"
        v-if="isLoading"
      >

        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, transparent, rgba(25,32,72,.7)"
          >
            <div
              class="lighten-5 ma-0 block"
              style="display:flex;height:100%;align-items: stretch;justify-content: center;background-position: center;background-size: cover;padding:10px; flex-direction:column;"
            >
              <div style="display:flex;flex-direction:column;align-items:center;padding:10px;">
              <h3 style="color:white;">{{jipyoData.officeName}}</h3>
              <p class="ma-0 review-item-address" style="display: flex;align-items: center;justify-content: flex-start;font-size:14px;color:white;">
                <v-icon >mdi-chevron-right</v-icon> {{jipyoData.establishmentTypeName}} <v-icon>mdi-chevron-right</v-icon> {{jipyoData.mapsidogunguName}}
              </p>
              </div>
              <div style="background-color: #fafafaaa;border-radius: 10px;padding: 10px;">
              <p class="ma-0" style="text-align:center;">
                원앤집 지표<span style="color:red">{{jipyoData.jipyoScore}}점</span>입니다.
              </p>
              <p @click="detailJipyo" style="font-size: 15px;font-weight: bolder;margin:10px 0 0;display:flex;align-items: center;justify-content: center;text-align:center;">
                <span>자세히보기</span><v-icon>mdi-chevron-right</v-icon>
              </p>
              </div>
            </div>
          </v-img>
          
        </template>
        <v-btn icon @click="goBack">
          <v-icon >mdi-arrow-left</v-icon>
        </v-btn>
        <v-app-bar-title>{{title}}</v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon v-show="isShowCheckBtn" @click="doCheck">
          <v-icon>mdi-check</v-icon>
        </v-btn>
        <v-btn icon v-show="isShowNextBtn" @click="doNext">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn icon v-show="isShowSearchBtn">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon v-show="isShowStarBtn" @click="doStar">
          <v-icon color="orange">mdi-star</v-icon>
        </v-btn>
        <v-btn icon v-show="isShowChartBoxBtn" @click="doChartBox">
          <v-icon>mdi-chart-box</v-icon>
        </v-btn>
        
      </v-app-bar>
      <v-app-bar
        height=110px
        class="flex-grow-0"
        v-else
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props"><LoadingItem isLoading="true" /></v-img>
        </template>
        <v-btn icon @click="goBack"><v-icon >mdi-arrow-left</v-icon></v-btn>
      </v-app-bar>
      
      
      <!-- Main Section -->
      <v-sheet
        class="overflow-y-auto"
        max-height="calc(100vh - 15vw)"
        id="scroll-target"
      >
        <!--<v-content>-->
        <router-view @setLayout="setLayout" @setJipyo="setJipyo" ref="childForm" max-height="calc(100vh)"></router-view>
        <!--</v-content>-->
      </v-sheet>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoadingItem from "@/components/common/LoadingItem.vue"

export default {
  name: "MenuLayout",
  components:{
    LoadingItem
  },
  data: () => ({
    companyId: null,
    drawer: false,
    group: null,
    title: null,
    isLoading: false,
    isShowCheckBtn: null,
    isShowNextBtn: false,
    isShowSearchBtn: false,
    isShowStarBtn: false,
    isShowChartBoxBtn: false,
    jipyoData:{},
    backgroundUrls: [
        '/resources/images/review_bg.jpg',
        '/resources/images/review_bg_02.jpg',
        '/resources/images/review_bg_03.jpg'
    ],
    backgroundUrl: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    goto(val) {
      if (this.$route.path != val) this.$router.push(val);
    },
    goBack(){
      if(this.$refs.childForm.goBack!=null){
        this.$refs.childForm.goBack();
      }else{
        this.$router.go(-1);
      }
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
    setLayout(title, {isShowCheckBtn, isShowNextBtn, isShowSearchBtn, isShowStarBtn,isShowChartBoxBtn}){
      console.log(title, isShowCheckBtn, isShowNextBtn, isShowSearchBtn);
      this.title = title;
      this.isShowCheckBtn = isShowCheckBtn;
      this.isShowNextBtn = isShowNextBtn;
      this.isShowSearchBtn = isShowSearchBtn;
      this.isShowStarBtn = isShowStarBtn;
      this.isShowChartBoxBtn = isShowChartBoxBtn;
    },
    setJipyo(data){
      this.isLoading =  true;
      this.jipyoData = data;
    },
    doCheck(){
      // ChildrenComponent에 doCheck()메소드 실행
      if(this.$refs.childForm.doCheck!=null){
        this.$refs.childForm.doCheck();
      }
    },
    doNext(){
      // ChildrenComponent에 doNext()메소드 실행
      if(this.$refs.childForm.doNext!=null){
        this.$refs.childForm.doNext();
      }
    },
    doStar(){
      if(this.$refs.childForm.doStar!=null){
        this.$refs.childForm.doStar();
      }
    },
    doChartBox(){
      if(this.$refs.childForm.doChartBox!=null){
        this.$refs.childForm.doChartBox();
      }
    },
    detailJipyo(){
      const URI = `/review/reviewDetail/${this.companyId}/jipyo`;
      this.$router.push(URI);
    },
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
  created() {
    this.companyId = this.$route.params.companyId;
    this.backgroundUrl = this.getBackgroundUrl();
    //메인 컴포넌트를 렌더링하면서 토큰체크
    // let token = this.$store.getters.token;
    // console.log('token : ',token)
    // if (token == null) { //다 없으면 로그인 페이지로
    //   //이미 로그인 페이지가 떠있는 상태에서 새로 고침하면 중복 에러 떠서 이렇게 처리함
    //   if(this.$route.path != '/login'){
    //     alert('미인증(test TODO:remove)');
    //     this.$router.push("/login").catch(() => {});
    //   }
    // }else{
    //   if(this.$route.path == '/login'){
    //     alert('로그아웃 하세요.');
    //     this.$router.push('/');
    //   }
    // }
  },
};
</script>

<style lang="scss">
#detail-layout{
  .v-toolbar__content{
    height:56px !important;
  }
  .v-app-bar-title__content{display:none;}
  .v-app-bar-title__content{display:none;}
  .v-app-bar--is-scrolled{
    .v-app-bar-title__content{display:block;}
    .v-app-bar-title__content{display:block;}
  }
}
.v-main__wrap {
  background: #f2f2f2;
}
a {
  text-decoration: none;
}

nav ul {
  list-style-type: none;
  padding-left: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #ffffff;
}
li {
  display: inline;
  padding-left: 1.5rem;
}

.v-bottom-navigation button {
  span {
    color: white;
  }
  i {
    color: white;
  }
}
</style>
