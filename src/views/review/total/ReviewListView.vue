<template>
  <!-- Wrap START -->
  <div class="review">
    <!-- 메인슬라이더 START -->
    <v-carousel
      :show-arrows="false"
      
      height="170"
      hide-delimiter-background
      >
      <v-carousel-item v-for="(item,idx) in sliedeitems" :key="item.id">
        
          <div
            class="lighten-5 pa-0 ma-0 block"
            :style="{backgroundImage: `url('${getBackgroundUrl(idx)}')`}"
            style="display:flex;height:100%;align-items: end;justify-content: center;"
          >
            <div class="text-center">
              <h3>{{item.officeName}}</h3>
              <div style="background-color: #fafafaaa;border-radius: 10px;padding: 5px 15px;">
                <p class="ma-0">
                  원앤집 지표점수는?
                </p>
                <p class="ma-0" style="color:red; font-weight:bolder">
                  {{item.jipyoScore}}점
                </p>
              </div>
              <p @click="detailReview(item.id)" style="cursor:pointer;font-size: 15px;font-weight: bolder;margin:10px 0 5px;display:flex;align-items: center;justify-content: center;">
                <v-icon>mdi-chevron-right</v-icon><span>기관 정보보기</span>
              </p>
            </div>
          </div>
        
      </v-carousel-item>
    </v-carousel>
    <!-- 메인슬라이더 END -->
    
    <!-- 메뉴 1,2 START -->
    <div>
      <div
        class="grey lighten-5 pa-1 mb-2 ma-0"
        style="width:100%;display: flex;justify-content: space-between;"
      >
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
              >
                {{selectedMenu1}} <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in menu1Items"
                :key="index" @click="selectMenu1(item.title)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div style='text-align:right'>
          <v-btn text
            @click="dialog1 = true"
          >
            {{selectedMenu2}} <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <!-- 메뉴 1,2 END -->

    <div>
      <!-- <CompanyReviewItem uid="id" v-for="id in 1" :key="id" @detailReview="detailReview(id)"></CompanyReviewItem>
      <InterviewReviewItem uid="id" v-for="id in 1" :key="id" @detailReview="detailReview(id)"></InterviewReviewItem>
      <YearamtReviewItem uid="id" v-for="id in 1" :key="id" @detailReview="detailReview(id)"></YearamtReviewItem>
      <LoadingItem :isLoading="isLoading"></LoadingItem> -->
      <component :is="getComponentName(item.type)" :data="item" uid="reviewlist" v-for="(item) in list" :key="item.id" @detailReview="detailReview(item.companyId)"/>
    </div>
    <!-- dailog1 START -->
    <v-dialog
      v-model="dialog1"
      max-width="500px"
    >

      <v-card>
        <div class="layerpopup--tag">
          <div class="pop-title">검색조건을 선택하세요.</div>
          <div class="pop-body">
            <v-radio-group row >
              <!--FIXME -->
              <v-radio label="전체" color="warning" value="all"></v-radio>
              <!--FIXME -->
              <v-radio label="어린이집" color="warning" value="type1" ></v-radio>
              <!--FIXME -->
              <v-radio label="유치원" color="warning" value="type2" ></v-radio>
            </v-radio-group>

            <v-select
              :items="menu2_items1"
              label="유형"
              item-value="text"
            ></v-select>
            <div style="display:flex">
              <v-select
                :items="menu2_items2"
                label="시/도"
                item-value="text"
              ></v-select>
              <v-select
                :items="menu2_items3"
                label="상세주소"
                item-value="text"
              ></v-select>
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn color="primary" text @click="dialog1 = false">취소</v-btn>
          <v-btn color="primary" text @click="searchDetailSearch;dialog1 = false">확인</v-btn>
        </v-card-actions>
      </v-card>    
    </v-dialog>
    <!-- dailog1 END -->

  </div>
  <!-- Wrap END -->

</template>

<script>
import CompanyReviewItem from "@/components/review/CompanyReviewItem.vue"
import InterviewReviewItem from "@/components/review/InterviewReviewItem.vue"
import YearamtReviewItem from "@/components/review/YearamtReviewItem.vue"
import LoadingItem from "@/components/common/LoadingItem.vue"
import reviewApi from "@/api/review";
import companyApi from "@/api/company";

export default {
  name: 'ReviewItem',
  components:{
    CompanyReviewItem, InterviewReviewItem, YearamtReviewItem, LoadingItem
    
  },
  data(){
    return{
      selectedMenu1: '전체리뷰보기',
      selectedMenu2: '기관/지역순',
      dialog1: false,
      backgroundUrls: [
        'https://appstage.oneandzip.com/test/banner_bg_00.jpg',
        'https://appstage.oneandzip.com/test/banner_bg_01.jpg',
        'https://appstage.oneandzip.com/test/banner_bg_02.jpg',
        'https://appstage.oneandzip.com/test/banner_bg_03.jpg',
      ],
      sliedeitems: [
        {
          id: 1,
          name: '송파유정유치원',
          score: 68,
        },
        {
          id: 2,
          name: '오창과학 미래어린이집',
          score: 52,
        },
        {
          id: 3,
          name: '하나유치원',
          score: 44,
        },
      ],
      menu1Items: [
        { title: '전체리뷰보기' },
        { title: '기관리뷰만보기' },
        { title: '면접리뷰만보기' },
        { title: '연봉리뷰만보기' },
      ],
      menu2_items1:["전체", "국롱립", "사회복지법인"],
      menu2_items2:["전체", "서울특별시"],
      menu2_items3:["전체", "강남구"],
      item: {},
      list: [],
      curpage:-1,
      size:5,
      isLoading: false,
      lastScrollY: 0
    }
  },
  methods:{
    selectMenu1(val){
      this.selectedMenu1 = val;
    },
    selectMenu2(val){
      this.selectedMenu2 = val;
    },
    searchDetailSearch(){
      console.log('FIXME! Search!!');
    },
    getBackgroundUrl(idx){
      const size = this.backgroundUrls.length;
      const newidx = idx%size;
      return this.backgroundUrls[newidx];
    },
    detailReview(companyId){
      const URI = `/review/reviewDetail/companies/${companyId}`;
      this.$router.push(URI);
    },
    getCompanyJipyos(){
      companyApi.getCompanyJipyos({page:0,size:4},
      (body)=>{
        this.sliedeitems = body.data;
      },
      (err)=>{
        console.log(err);
      })
    },
    searchAllList(){
      this.isLoading=true;
      const reqpage = this.curpage+1;
      console.log('START searchAllList ' + `req:${reqpage}, cur:${this.curpage}`);
      var param = {
        page: reqpage,
        size: this.size
      }
      reviewApi.getReviewAll(param,
      (body)=>{
        if(body!=null && body.data.length>0){
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
    doSearch(){
      const URI = `/common/search#tabs-1`;
      this.$router.push(URI);
    },
    handleScroll(e){
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && this.isLoading==false) {
        if(this.lastScrollY != window.scrollY){
          this.lastScrollY = window.scrollY;
          this.searchAllList();
        }else{
          this.lastScrollY = 0;
        }
      }
    },
    getComponentName(type){
      var componentName = 'CompanyReviewItem'
      switch(type){
        case 'COMPANY':
          componentName = 'CompanyReviewItem';
        break;
        case 'INTERVIEW':
          componentName = 'InterviewReviewItem';
        break;
        case 'AMT':
          componentName = 'YearamtReviewItem';
        break;
      }
      return componentName;
    }
  },
  created(){
    this.curpage=-1;
    this.list=[];
    this.getCompanyJipyos();
    this.searchAllList();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    console.log('destroyed');
    window.removeEventListener("scroll", this.handleScroll);
  }

}
</script>

<style>
.v-carousel__controls{
  top:0
}
.slide-row{
  background-position: center;
  background-size: cover;
}
.v-carousel__controls__item.v-btn--active > span > .v-icon
{
  color:red;
}
.v-input--selection-controls .v-input__slot > .v-label, .v-input--selection-controls .v-radio > .v-label{
  font-size:14px;
}
</style>
<style lang="scss" scoped>
.block{
    background-position: center;
    background-size: cover;
}
.v-dialog {
  overflow: hidden;
  border-radius: 15px;
}
.layerpopup {
  &--tag {
    background: #fff;

    .pop-title {
      height: 90px;
      line-height: 90px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      background: #e4034f;
      color: #fff;
    }

    .pop-body {
      padding: 20px;
    }

    .btn-tag {
      display: inline-block;
      margin: 10px 10px 0 10px;
      width: 100px;
      height: 30px;
      font-size: 15px;
      line-height: 30px;
      color: #fff;
      text-align: center;
      &--purple {
        background: #673bb7;
      }
      &--blue {
        background: #465a65;
      }
      &--green {
        background: #689f39;
      }
      &--gray {
        background: #607d8b;
      }
    }

    .wrap-inputbtn {
      position: relative;
      margin-top: 20px;
      padding-right: 60px;
      input {
        width: 100%;
      }
      button {
        position: absolute;
        right: 0;
        top: 0;
        width: 55px;
        height: 46px;
        line-height: 46px;
        background: #009788;
        color: #fff;
      }
    }
  }
}

.v-dialog > .v-card > .v-card__actions {
  padding: 0;
}
.v-card__actions > .v-btn.v-btn {
  margin: 0 !important;
  padding: 28px 0;
  width: 50%;
  background: #f7f7f7;
  border-radius: 0;
  box-sizing: border-box;
  color: #8c8c8c !important;
  font-weight: 600;
  border: 1px solid #b5b5b5;
}
</style>