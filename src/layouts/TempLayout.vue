<template>
  <v-app>
    <!-- Header Section-->
    <v-app-bar color="deep-purple accent-4" dense dark app class="flex-grow-0">
      <v-btn icon @click="goBack">
        <v-icon >mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title>타이틀 입력</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
    </v-app-bar>

    <!-- Main Section -->
    <v-main>
      <!--<v-content>-->
      <router-view></router-view>
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
      this.$router.go(-1);
    },
    write_modal() {
      alert("준비중입니다..");
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

<style lang="scss">
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
