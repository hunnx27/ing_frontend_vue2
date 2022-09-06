<template>
  <div>
    <!-- Wrap START -->
    <div class="CompanyReg4View page-wrap">
      <div class="text-sucess">
        <p class="text-sucess--top">
          유아교사님 <br />
          연봉리뷰가 제출 되었습니다.<br/>
          <span class="text-orange">관리자 승인 후 게시됩니다.</span>
        </p>
      </div>
      <div class="text-sucess">
        <p class="text-sucess--bottom">
          <span class="link">내기관 리뷰 관리</span>
        </p>
      </div>
    </div>
    <!-- Wrap END -->
    <div class="btn-wrap">
      <span class="item" @click="writeYearamtReview">
        면접 정보 작성하기
      </span>
      <span class="item" @click="moreCompanyReview" style="background-color:#eee;color:#777">
        기관 리뷰 더보기
      </span>
    </div>
  </div>
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CompanyReg4View",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
    doCheck() {
      this.$router.push("/");//FIXME 저장로직추가해야함.
    },
    writeYearamtReview(){
      this.$router.push("/review/yearamt/yearamtReg1");
    },
    moreCompanyReview(){
      this.$router.push("/review/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters("CompanySearch",{companySearch:"reqData"}),
  },
  created() {
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    if(this.companySearch != null){
      const companySearch = this.companySearch;
      if(companySearch.companyName) this.companyName = companySearch.companyName;
    }
    const title = this.companyName? this.companyName : "-";
    this.$emit("setLayout", title, options);
  },
};
</script>

<style lang="scss" scoped>
.btn-wrap{
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .item{
    background: orange;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    flex: 1;
    font-weight:bolder;
    font-size:16px;
    color: white;
  }
}
.text-sucess {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: #757575;
  text-align: center;
  .text-orange {
    color: #faa42d;
  }
  &--top {
    margin-top: 60px;
    padding-bottom: 320px;
  }
}
.text-sucess--top::after {
  display: block;
  content: "";
  clear: both;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 180px;
  height: 180px;
  background-image: url('~/public/resources/images/join_finish_teacher.png');
  background-size: cover;
}
</style>
