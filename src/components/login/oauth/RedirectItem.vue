<template>
  <div>Hello!!!!!</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  created () {
    const token = this.$route.query.token;
    const userId = this.$route.query.userId;
    const snsTypeCode = this.$route.query.snsTypeCode;
    console.log('token', token);
    console.log('userId', userId);
    console.log('snsTypeCode', snsTypeCode);
    if (token) {
      this.setToken(token)
      this.fetchUser()
      this.$router.replace('/')
    }else{
      this.clearSignup();
      this.setSignup({userId, snsTypeCode});
      this.$router.replace({path:'/signup', query:{isAuth:'true'} });
    }
    
  },
  methods: {
    ...mapActions(['fetchUser', 'setSignup','clearSignup']),
    ...mapMutations(['setToken'])
  }
}
</script>
