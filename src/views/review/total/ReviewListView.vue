<template>
  <!-- Wrap START -->
  <div class="review">
    <!-- 메인슬라이더 START -->
    <v-carousel
      :show-arrows="false"
      
      height="170"
      hide-delimiter-background
      >
      <v-carousel-item v-for="(item,idx) in sliedeitems" :key="idx">
        
          <div
            class="lighten-5 pa-0 ma-0 block"
            :style="{backgroundImage: `url('${getBackgroundUrl(idx)}')`}"
            style="display:flex;height:100%;align-items: end;justify-content: center;"
          >
            <div class="text-center">
              <h3>{{item.name}}</h3>
              <div style="background-color: #fafafaaa;border-radius: 10px;padding: 5px 15px;">
                <p class="ma-0">
                  원앤집 지표점수는?
                </p>
                <p class="ma-0" style="color:red; font-weight:bolder">
                  {{item.score}}점
                </p>
              </div>
              <p style="font-size: 15px;font-weight: bolder;margin:10px 0 5px;display:flex;align-items: center;justify-content: center;">
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

      <!-- -->
      <div class="review-wrap" v-for="id in 10" :key="id" >
        
          <div class="review-item-wrap" @click="detailReview(id)">
            <div class="review-item-header">
              <p class="ma-0 review-item-title">열린어린이집</p>
              <p class="ma-0 review-item-address" style="display: flex;align-items: center;justify-content: flex-start;font-size:14px">
                <v-icon>mdi-chevron-right</v-icon> 가정 <v-icon>mdi-chevron-right</v-icon> 경기도 화성시
              </p>
            </div>
            
            <div class="review-item-content" style="padding:10px" >
              <p class="text--primary ma-0" style="font-size: 15px;">
                애기 혼자놀다 다쳐도 교사탓 원장 참견심하고 교사컴퓨터1대로 3명돌아가면서 씀<br/>
                원장이 기분파라 기분 맞추기 힘듬
              </p>
            </div>
            
            <div class="review-item-bottom">
              <p class="review-score-prepend ma-0">
                <v-icon>mdi-face-man</v-icon>
              </p>
              <div class="review-score">
                <p class="sub-title avg-title ma-0">총 만족도</p>
                <p class="avg-score">
                  3.3
                </p>
              </div>
              <div class="review-score">
                <p class="sub-title ma-0">업무량</p>
                <p class="star ma-0">
                  <v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart-outline</v-icon>
                </p>
              </div>
              <div class="review-score">
                <p class="sub-title ma-0">직무만족</p>
                <p class="star ma-0">
                  <v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart-outline</v-icon>
                </p>
              </div>
              <div class="review-score">
                <p class="sub-title ma-0">원내분위기</p>
                <p class="star ma-0">
                  <v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart</v-icon><v-icon>mdi-cards-heart-outline</v-icon>
                </p>
              </div>
            </div>
            
          </div>
        
      </div>
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
.review-wrap{
  
  .review-item-wrap{
    background: white;padding: 10px;border-radius:5px;margin: 10px;padding: 10px;
    .review-item-header{
      border-bottom: 1px solid #aaa;
      padding-bottom: 10px;
      .review-item-title{
        color:#666;
        font-weight:bolder;
      }
      .review-item-address{
        display: flex;align-items: center;justify-content: flex-start;font-size:14px;color:#999;
        .v-icon{
          color:orange;
        }
      }
    }
    .review-item-content{
      padding:10px;
    }
    .review-item-bottom{
      display:flex;padding:10px;border:1px solid #aaa;border-radius:10px;align-items: center;
      .review-score-prepend{
        flex-basis:14%;display: flex;justify-content: center;align-items: center;
        .v-icon{
          color:black;
        }
      }
      .review-score{
        flex-basis:25%;text-align: center;
        .sub-title{      
          font-size:11px;
          font-weight:bolder;
        }
        .sub-title.avg-title{
          font-size:12px;
          color:#999;
        }
        .avg-score{
          font-size: 11px;
          background: orange;
          color: white;
          border-radius: 10px;
          width: 90%;
          max-width: 80px;
          margin: 2px auto;
          padding: 2px 0;
        }
        .star .v-icon{
          font-size:10px;
          color: orange;
        }
      }
    }
  }
}
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
<script>
export default {
  name: 'ReviewItem',
  components:{
    
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
      menu2_items3:["전체", "강남구"]
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
    detailReview(id){
      //FIXME 
      id = 132;
      const URI = `/review/reviewDetail/${id}`;
      this.$router.push(URI);
    },
  }

}
</script>
