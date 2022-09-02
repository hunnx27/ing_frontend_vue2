<template>
  <!-- Wrap START -->
  <div class="TempView page-wrap">
    <SelectAddressZone :selected='interestZone' @change="onChangeZone" ref="selectAddressZone"></SelectAddressZone>
    <br/>

    <ul class="search-wrap">
        <li v-for="n in 20" :key="n" class="search-item" @click="selectCompany(85262, 'ECO한빛어린이집', '인천시 계양구', '국공립')"><span class="search-item-left">ECO한빛어린이집</span><span class="search-item-right">경기도 고양시 덕양구</span></li>
    </ul>

    
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import SelectAddressZone from "@/components/common/SelectAddressZone.vue";

export default {
  name: "TempView",
  data() {
    return {
      prevRoute:null,
      interestCompanyName:null,
      interestZone: null,
    };
  },
  components:{
    SelectAddressZone
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions('CompanySearch',{setReq:'setReq'}),
    searchCompany(){
      this.$router.push('/searchCompany')
    },
    onChangeZone(value){
      this.interestZone = value;
    },
    selectCompany(companyId, companyName, sigugunName, establishmentTypeName){
      this.setReq({companyId, companyName, sigugunName, establishmentTypeName})
      this.$router.go(-1);      
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "주소검색이되 input 넣어야해";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: true,
    };
    this.$emit("setLayout", title, options);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
},
};
</script>

<style lang="scss" scoped>
.line {
  border: 1px solid #d8d8d8;
}
.page-txt {
  padding-bottom: 20px;
  border-bottom: 1px solid #a1a1a1;
  text-align: center;

  p {
    font-size: 18px;
    color: #f2a33c;
    font-weight: 600;
  }
}
.step-title {
  font-size: 20px;
  font-weight: 600;
}

input[type="text"],
input[type="number"] {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
select {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
.column {
  input[type="text"],
  input[type="number"] {
    width: 100%;
  }
  select {
    width: 100%;
  }
  &--col2 {
    input[type="text"] {
      width: 50%;
    }
    select {
      width: 50%;
    }
  }
  &.exposed-setting {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .step-title {
      margin-top: 0;
    }
    .radio-wrap {
      width: 100px;
    }
  }
}
.discription {
  font-size: 14px;
  color: #6200ea;
}
.search-wrap{
  display:flex;flex-direction: column;padding-left:0;
  .search-item{
    display:flex;justify-content: space-between; padding:10px 0 5px;border-bottom:1px solid #ccc;color:#999;
    .search-item-left{
      font-size:15px;font-weight:bolder;
    }
    .search-item-right{
      font-size:13px
    }
  }
}
</style>
