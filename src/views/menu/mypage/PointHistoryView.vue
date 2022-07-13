<template>
  <!-- Wrap START -->
  <div class="pointHistory">
    현재 포인트 3050p
    <div>
      오늘 / -100 / 상담질문등록
    </div>
    <div>
      2022.05.16 / +50 / 로그인-출석
    </div>
    <div>
      2022.05.16 / +3000 / 회원가입
    </div>
  </div>
  <!-- Wrap END -->

</template>

<style>

</style>
<script>
export default {
  name: 'pointHistoryView',
  components:{
    
  },
  data(){
    return{
      
    }
  },
  methods: {
  },
  created() {
    const title = "포인트 이력";
    const options = {
          isShowCheckBtn: false,
          isShowNextBtn: false,
          isShowSearchBtn: false
    };
    this.$emit("setLayout", title, options);
  },

}
</script>
