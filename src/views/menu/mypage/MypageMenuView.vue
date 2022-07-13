<template>
  <!-- Wrap START -->
  <div class="mypageMenuView">

    <div>
      <router-link to="/menu/mypage/myinfo">
        내 정보
        <span>
          <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
        </span>
      </router-link>
    </div>
    <div>
      <router-link to="/menu/mypage/pointHistory">
        포인트 내역
        <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
      </router-link>
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
