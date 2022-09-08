<template>
  <!-- Wrap START -->
  <div class="TempView page-wrap">
    <SelectAddressZone :selected='interestZone' @change="onChangeZone" @sidoChange="onChangeSido" ref="selectAddressZone"></SelectAddressZone>
    <br/>

    <ul v-if="list.length>0" class="search-wrap" v-show="!isLoading">
        <li v-for="item in list" :key="item.id" class="search-item" @click="selectCompany(item)"><span class="search-item-left">{{item.officeName}}</span><span class="search-item-right">{{item.mapsidogunguName}}</span></li>        
    </ul>
    <ul v-else-if="!isFirst" class="search-wrap" v-show="!isLoading"><li>검색된 기관이 없습니다.</li></ul>
    <ul v-else class="search-wrap" v-show="!isLoading"><li>기관을 검색하세요.</li></ul>
    <LoadingItem :isLoading="isLoading"></LoadingItem>
    <LoadingItem :isLoading="isLoadingMore"></LoadingItem>
    

    
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import companyApi from "@/api/company";
import SelectAddressZone from "@/components/common/SelectAddressZone.vue";
import LoadingItem from "@/components/common/LoadingItem.vue"

export default {
  name: "TempView",
  data() {
    return {
      isFirst:true,
      prevRoute:null,
      interestCompanyName:null,
      sidoCode: null,
      interestZone: null,
      list:[],
      isLoading:false,
      isLoadingMore:false,
      curpage:-1,
      size:50,
      lastScrollY: 0,
      keyword: null,
      isInit:false,
    };
  },
  components:{
    SelectAddressZone, LoadingItem
  },
  methods: {
    ...mapActions(["logout"]),
    
    searchCompany(){
      this.$router.push('/searchCompany')
    },
    onChangeSido(value){
      console.log(value);
      this.isInit=true;
      this.sidoCode = value;
    },
    onChangeZone(value){
      console.log(value);
      this.isInit=true;
      this.interestZone = value;
    },
    selectCompany(item){
      const param = {
        companyId: item.id, 
        companyName: item.officeName, 
        sigugunName: item.mapsidogunguName, 
        establishmentTypeName: item.establishName
      }
      this.$emit('selectCompany', param);
    },
    searchinit(){
      this.curpage = -1;
      this.list = [];
    },
    doSearchMore(){
      this.isLoadingMore = true;
      if(this.isInit){
        this.searchinit();
        this.isInit=false;
      }
      this.search(this.keyword)
    },
    doSearch(keyword){

      if(keyword==null || ''==keyword){
        alert('기관명을 입력하세요.');
        return false;
      }

      this.searchinit();

      this.isFirst = false;
      this.isLoading = true;
      this.search(keyword);
    },
    search(keyword){
      this.keyword = keyword;
      const name = this.keyword;
      const sido = this.sidoCode;
      const interestZone = this.interestZone;
      const interestCompany = this.interestCompanyName;
      
      const reqpage = this.curpage+1;
      console.log('START searchAllList ' + `req:${reqpage}, cur:${this.curpage}`);

      
      companyApi.getCompanySearch(
        {name,sido,interestZone,interestCompany},
        {page:reqpage,size:this.size,sort:null},
        (body)=>{
          this.curpage = reqpage;
          this.isLoading = false;
          this.isLoadingMore = false;
          console.log(body);
          this.list = this.list.concat(body.data.content);
          
        },
        (err)=>{
          this.isLoading = false;
          this.isLoadingMore = false;
          console.log(err);
        }
      );
    },
    
    handleScroll(e){
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && this.isLoading==false && this.isLoadingMore==false) {
        if(this.lastScrollY != window.scrollY){
          this.lastScrollY = window.scrollY;
          this.doSearchMore();
        }else{
          this.lastScrollY = 0;
        }
      }
    },
    
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.interestCompanyName = this.$route.query.interestCompanyName!=null?this.$route.query.interestCompanyName:null;

    this.curpage=-1;
    this.list=[];
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  destroyed() {
    console.log('destroyed');
    window.removeEventListener("scroll", this.handleScroll);
  }
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
