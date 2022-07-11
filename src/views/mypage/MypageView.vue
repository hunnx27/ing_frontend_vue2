<template>
  <!-- Wrap START -->
  <div class="mypageView">

    <div>
      <router-link to="/mypage/myinfo"> 내 정보<span>></span></router-link>
    </div>
    <div>
      <router-link to="/mypage/pointHistory">포인트 내역<span>></span></router-link>
    </div>
    
  </div>
  <!-- Wrap END -->

</template>

<style>

</style>
<script>
export default {
  name: 'MypageView',
  components:{
    
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }

}
</script>
