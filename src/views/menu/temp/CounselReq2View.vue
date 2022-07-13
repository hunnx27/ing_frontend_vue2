<template>
  <!-- Wrap START -->
  <div class="counselReq2View">

    
    
  </div>
  <!-- Wrap END -->

</template>

<style>

</style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: 'counselReq2View',
  data(){
    return{
      
    }
  },
  methods:{
    ...mapActions(['logout']),
    doCheck(){
      this.$router.push('/menu/temp/counselReq3');
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "상담요청(상담요청2페이지)";
    const options = {
          isShowCheckBtn: true,
          isShowNextBtn: false,
          isShowSearchBtn: false
    };
    this.$emit("setLayout", title, options);
  },
  

}
</script>
