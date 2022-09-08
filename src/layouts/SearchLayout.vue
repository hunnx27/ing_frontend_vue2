<template>
  <v-app>
    <!-- Header Section-->
    <v-app-bar color="deep-purple accent-4" dense dark app class="flex-grow-0">
      <v-btn icon @click="goBack">
        <v-icon >mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title class="search-bar" style="width:100%;position:relative;">
          <input type="text" v-model="keyword">
          <v-icon color="red" @click="keyword=''">mdi-close</v-icon>
      </v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn icon @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
    </v-app-bar>

    <!-- Main Section -->
    <v-main>
      <!--<v-content>-->
      <router-view @setLayout="setLayout" ref="childForm"></router-view>
      <!--</v-content>-->
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MenuLayout",
  data: () => ({
    drawer: false,
    group: null,
    title: null,
    isShowCheckBtn: null,
    isShowNextBtn: false,
    isShowSearchBtn: false,
    keyword: '',
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
    setLayout(title, {isShowCheckBtn, isShowNextBtn, isShowSearchBtn}){
      console.log(title, isShowCheckBtn, isShowNextBtn, isShowSearchBtn);
      this.title = title;
      this.isShowCheckBtn = isShowCheckBtn;
      this.isShowNextBtn = isShowNextBtn;
      this.isShowSearchBtn = isShowSearchBtn;
    },
    doSearch(){
      // ChildrenComponent에 doCheck()메소드 실행
      if(this.$refs.childForm.doSearch!=null){
        this.$refs.childForm.doSearch(this.keyword);
      }
    },
    ...mapActions(["logout"]),
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

<style lang="scss" scoped>
.search-bar input{
  outline: none; 
  border:none; 
  color:white;width:100%;
  border-bottom: 2px solid white;
}
.search-bar input:focus-visible{
  box-shadow: 0 1px 0 0 blue;
  border-bottom: 2px solid orange;
}
.search-bar .v-icon{
  position:absolute;right:0;top:50%;transform: translate(0, -50%);cursor:pointer;
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
