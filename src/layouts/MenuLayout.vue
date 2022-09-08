<template>
  <v-app>
    <!-- Header Section-->
    <v-app-bar color="deep-purple accent-4" dense dark app class="flex-grow-0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img
        class="mx-2"
        src="/resources/images/logo_pink.png"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-app-bar-title>원앤집</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell-ring</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation  Section -->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          
          <v-list-item to="/menu/mypage">
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item>
          <v-list-item to="/menu/accountManage">
            <v-list-item-title>계정관리</v-list-item-title>
          </v-list-item>
          <hr/>
          <div>개발</div>
          <hr/>
          <v-list-item to="/counsel/counselReg1">
            <v-list-item-title>상담리뷰등록</v-list-item-title>
          </v-list-item>
          <v-list-item to="/menu/temp/counselDetail">
            <v-list-item-title>상담상세</v-list-item-title>
          </v-list-item>
          <v-list-item to="/sample/imageUpload">
            <v-list-item-title>이미지업로드샘플</v-list-item-title>
          </v-list-item>
          <hr/>
          <div>개발예정</div>
          <hr/>
          <v-list-item to="/review/company/companyReg1">
            <v-list-item-title>기관리뷰등록1</v-list-item-title>
          </v-list-item>
          <v-list-item to="/review/company/companyReg2">
            <v-list-item-title>기관리뷰등록2</v-list-item-title>
          </v-list-item>
          <v-list-item to="/review/company/companyReg3">
            <v-list-item-title>기관리뷰등록3</v-list-item-title>
          </v-list-item>
          <v-list-item to="/review/company/companyReg4">
            <v-list-item-title>기관리뷰등록4</v-list-item-title>
          </v-list-item>
          <hr/>
          <v-list-item to="/review/interview/interviewReg1">
            <v-list-item-title>면접리뷰등록1</v-list-item-title>
          </v-list-item>
          <v-list-item to="/review/interview/interviewReg2">
            <v-list-item-title>면접리뷰등록2</v-list-item-title>
          </v-list-item>
          <v-list-item to="/review/interview/interviewReg3">
            <v-list-item-title>면접리뷰등록3</v-list-item-title>
          </v-list-item>
          <hr/>
          <v-list-item to="/review/yearamt/yearamtReg1">
            <v-list-item-title>연봉리뷰등록1</v-list-item-title>
          </v-list-item>
          <v-list-item to="/review/yearamt/yearamtReg2">
            <v-list-item-title>연봉리뷰등록2</v-list-item-title>
          </v-list-item>
          <v-list-item to="/review/yearamt/yearamtReg3">
            <v-list-item-title>연봉리뷰등록3</v-list-item-title>
          </v-list-item>
          <hr/>
          <v-list-item @click="logout()">
            <v-list-item-title class="red--text">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Section -->
    <v-main>
      <!--<v-content>-->
      <router-view ref="childForm"></router-view>
      <!--</v-content>-->
    </v-main>

    <!-- Bottom Navigation -->
    <v-bottom-navigation
      background-color="deep-purple accent-4"
      horizontal
      app
      fixed
      dark
      style="color: white"
    >
      <v-btn color="deep-purple accent-4" text @click="goto('/')">
        <span>상담</span>
        <v-icon>mdi-comment-text-multiple-outline</v-icon>
      </v-btn>

      <v-menu offset-y top>
        <!-- 버튼 -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="deep-purple accent-4" text v-bind="attrs" v-on="on">
            <span>작성</span>
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
        </template>
        
        <!-- 리스트-->
        <v-list>
          <v-list-item
            v-for="(menu, index) in menus"
            :key="index"
            @click="gotoMenu(menu.path)"
          >
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn color="deep-purple accent-4" text @click="goto('/review')">
        <span>리뷰</span>
        <v-icon>mdi-account-star-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MenuLayout",
  data: () => ({
    drawer: false,
    group: null,
    menus: [
      { title: '상담리뷰등록', path: '/counsel/counselReg1'},
      { title: '연봉리뷰등록', path: '/review/yearamt/yearamtReg1'},
      { title: '기관리뷰등록', path: '/review/company/companyReg1'},
      { title: '면접리뷰등록', path: '/review/interview/interviewReg1'},
    ],
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
    gotoMenu(path) {
      if(path!=''){
        this.goto(path);
      }else{
        alert('준비중입니다.');
      }
    },
    ...mapActions(["logout"]),
    doSearch(){
      // ChildrenComponent에 doSearch()메소드 실행
      if(this.$refs.childForm.doSearch!=null){
        this.$refs.childForm.doSearch();
      }
    },
    doBell(){
      // ChildrenComponent에 doBell()메소드 실행
      if(this.$refs.childForm.doBell!=null){
        this.$refs.childForm.doBell();
      }
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
  created() {
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
