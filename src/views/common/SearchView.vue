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
              <v-icon slot="append" @click="search2CounselByTag">
                mdi-magnify
              </v-icon>
            </v-text-field>
            <v-select
              :items="itemList"
              item-text="name"
              item-value="value"
              v-model="gubn"
              color="orange"
              @change="changeGubn"
            />
            <div style="padding:15px;">
              <p v-for="(item, idx) in search2GroupList" :key="item.code+'-'+idx" @click="search2CounselByCode(item.code)" style="display:flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #dfdfdf;padding-bottom: 10px;">
                <span style="font-size:15px;">{{item.name}}</span>
                <span style="background-color: white;padding: 2px 7px;border-radius: 70%;;font-size:13px;">{{item.cnt}}</span>
              </p>
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
import counselApi from "@/api/counsel";
import buildURL from "axios/lib/helpers/buildURL";

export default {
  name: "TempView",
  data() {
    return {
      keyword:null,
      tab: 'tabs-1',
      itemList:[
        {'name':'전체', 'value':''},
        {'name':'유아교사', 'value':'TEACHER', 'code':'S'},
        {'name':'예비교사', 'value':'PARENT', 'code':'I'},
      ],
      keyword2:null,
      gubn:null,
      search2GroupList:[

      ],
      item:{},
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
    changeGubn(gubn){
      counselApi.searchQnaitemCntByGubn(gubn,
      (body)=>{
        console.log(body);
        this.search2GroupList = body.data.qnaList;
      },
      (err)=>{
        console.log(err);
      })
    },
    search2CounselByTag(){
      if(this.keyword2==null){
        alert('태그를 입력하세요.');
        return;
      }
      let URI = `/counsel/counselSearch?type=HASHTAG&keyword=${this.keyword2}`;
      const gubn = this.gubn;
      if(gubn!=null && ''!=gubn) URI = buildURL(URI, {gubn: gubn});
      this.$router.push(URI);
    },
    search2CounselByCode(code){
      let URI = `/counsel/counselSearch?type=QNA_ITEM&keyword=${code}`;
      const gubn = this.gubn;
      if(gubn!=null && ''!=gubn) URI = buildURL(URI, {gubn: gubn});
      this.$router.push(URI);
    },
    // TODO 삭제
    // TODO 삭제
    searchAllList(){
      this.isLoading=true;
      const reqpage = this.curpage+1;
      console.log('START searchAllList ' + `req:${reqpage}, cur:${this.curpage}`);
      var param = {
        page: reqpage,
        size: this.size
      }
      counselApi.getCounselAll(param,
      (body)=>{
        if(body.data!=null && body.data.length>0){
          //this.list = body!=null? body : [];
          this.list = this.list.concat(body.data);
          this.curpage = reqpage;
        }
        this.isLoading=false;
      },
      (err)=>{
        console.log(err);
        this.isLoading=false;
      })
    },
    // TODO 삭제
    // TODO 삭제
    searchFirst(){
      var param = {
        page: 0,
        size: 1,
      }
      param['type'] = 'QNA_ITEM';
      param['keyword'] = 'QS01';
      param['gubn'] = 'TEACHER';
      counselApi.getCounselAll(param,(body)=>{
        this.item = body!=null&&body.data.length>0? body.data[0] : [];
      })
    },
    
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.searchFirst(); // TODO 삭제
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

