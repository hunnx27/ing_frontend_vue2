<template>
  <LoadingItem isLoading="true" style="height:100%"></LoadingItem>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import LoadingItem from "@/components/common/LoadingItem.vue"

export default {
  data(){
    return{
      hellouser2: null
    }
  },
  components: {LoadingItem},
  created () {
    const token = this.$route.query.token;
    const userId = this.$route.query.userId;
    const snsTypeCode = this.$route.query.snsTypeCode;
    console.log('token', token);
    console.log('userId', userId);
    console.log('snsTypeCode', snsTypeCode);
    
    if (token) {
      this.setToken(token)
      this.fetchUser((body)=>{
        if(body){
          if('Y' != body.isDelete){
            this.$router.replace('/')
          }else{
            alert('탈퇴한 회원입니다. 관리자에게 문의하세요.');
            this.logout();
          }
        }else{
          alert('응답이 없습니다.');
        }
        
      })

      
    }else{
      this.clearSignup();
      this.setSignup({userId, snsTypeCode});
      this.$router.replace({path:'/signup', query:{isAuth:'true'} });
    }
    
  },
  methods: {
    ...mapActions(['fetchUser', 'setSignup','clearSignup','logout']),
    ...mapMutations(['setToken'])
  },
  
}
</script>
