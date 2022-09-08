<template>
  <!-- Wrap START -->
  <div class="TempView">
    <v-tabs
      centered
      color="black"
      v-model="tab"
      background-color="transparent"
      grow
    >
      <v-tabs-slider color="orange"></v-tabs-slider>
      <v-tab to="#tabs-1">기관검색</v-tab>
      <v-tab to="#tabs-2">상담검색</v-tab>

      <v-tabs-items v-model="tab" id="custom-tab-items">
        <v-tab-item value="tabs-1">
          <div class="search-wrap" style="">
            <v-text-field
              v-model="keyword"
              label="기관명을 두 글자 이상 입력하세요."
              color="orange"
            >
              <v-icon slot="append" @click="search">
                mdi-magnify
              </v-icon>
            </v-text-field>
          </div>
          <SearchCompanyItem @selectCompany="selectCompany" ref="searchForm"/>
        </v-tab-item>
        <v-tab-item value="tabs-2">
          <div class="search-wrap" style="flex-direction: column;">
            <v-text-field
              v-model="keyword2"
              label="#제외한 태그를 입력해 주세요."
              color="orange"
            >
              <v-icon slot="append" @click="search2">
                mdi-magnify
              </v-icon>
            </v-text-field>
            <v-select
              :items="itemList"
              item-text="name"
              item-value="value"
              color="orange"
            />
            <div>

              
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
  <!-- Wrap END -->
</template>
<style lang="scss" scoped>
.search-wrap{
  display:flex;justify-content: space-between;padding:0 15px;margin-top:30px;
  ::v-deep .v-input__control{
    padding:0 10px;
  }
}
.TempView{
  .TempView.page-wrap{
    padding: 0 15px;
  }
  #custom-tab-items {
    background-color: transparent !important;
  }
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";
import SearchCompanyItem from "@/components/company/SearchCompanyItem"

export default {
  name: "TempView",
  data() {
    return {
      keyword:null,
      tab: 'tabs-1',
      itemList:[
        {'name':'전체', 'value':''},
        {'name':'유아교사', 'value':'S'},
        {'name':'예비교사', 'value':'I'},
      ],

      list2:[

      ]
    };
  },
  components:{
    SearchCompanyItem
  },
  methods: {
    search(){
      this.doSearch(this.keyword);
    },
    goBack(){
      console.log(this.$route.hash)
      const hash = this.$route.hash;
      let URI = '/';
      if(hash == '#tabs-1'){
        URI = `/review`;
      }
      this.$router.push(URI);
    },
    doSearch(keyword){
      if(this.$refs.searchForm.doSearch!=null){
        this.$refs.searchForm.doSearch(keyword);
      }
    },
    selectCompany(item){
      this.detailReview(item.companyId);
    },
    detailReview(companyId){
      const URI = `/review/reviewDetail/companies/${companyId}`;
      this.$router.push(URI);
    },
    search2(){
      alert('준비중입니다.');
    },
    
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
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

