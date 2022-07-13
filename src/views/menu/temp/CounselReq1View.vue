<template>
  <!-- Wrap START -->
  <div class="counselReq1View">

    
    
  </div>
  <!-- Wrap END -->

</template>

<style>

</style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: 'counselReq1View',
  data(){
    return{
      
    }
  },
  methods:{
    ...mapActions(['logout']),
    doNext(){
      this.$router.push('/menu/temp/counselReq2');
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "교사멘토 매칭(상담요청1페이지)";
    const options = {
          isShowCheckBtn: false,
          isShowNextBtn: true,
          isShowSearchBtn: false
    };
    this.$emit("setLayout", title, options);
  },

}
</script>
