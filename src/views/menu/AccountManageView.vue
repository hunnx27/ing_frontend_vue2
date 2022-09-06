<template>
  <!-- Wrap START -->
  <div class="accountManageView">

    <div style="text-align:center;word-break: break-all;">
      <v-icon style="font-size:150px;color:#aaa">mdi-email-outline</v-icon><br/><br/>
      {{userId}}<br/><br/>
    </div>
      
    <div style="text-align:center" >
      <v-btn rounded :color="snsTypeColor">{{snsType}}(으)로 로그인 되어 있습니다.</v-btn>
    </div>

    <div style="position:fixed; bottom:0;;width:100%">
      <v-btn @click="deleteUser" x-large style="width:50%">
        회원탈퇴
      </v-btn>
      <v-btn @click="logout" x-large style="min-width:50%">
        로그아웃
      </v-btn>
    </div>
    
  </div>
  <!-- Wrap END -->

</template>

<style>

</style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: 'accountManageView',
  components:{
    
  },
  data(){
    return{
      userId : null,
      snsType: null,
      snsTypeColor: 'primary'
    }
  },
  methods:{
    ...mapActions(['logout']),
    deleteUser(){
      accountApi.deleteUser((body)=>{
        console.log(body);
      }, (error)=>{
        console.log(error);
      });
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "계정관리";
    const options = {
          isShowCheckBtn: false,
          isShowNextBtn: false,
          isShowSearchBtn: false,
          isShowStarBtn: false,
          isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);

    if (this.user != null) {
      this.userId = this.user != null ? this.user.userId : null;
      this.snsType = this.user != null ? this.user.snsType : null;
    }
    switch(this.snsType){
      case 'facebook':
        this.snsTypeColor = 'primary'
        break;
      case 'kakao':
        this.snsTypeColor = '#FFD600'
        break;
      case 'google':
        this.snsTypeColor = 'white'
        break;
      case 'naver':
        this.snsTypeColor = '#64DD17'
        break;
      case 'apple':
        this.snsTypeColor = 'grey'
        break;
    }
  },

}
</script>
