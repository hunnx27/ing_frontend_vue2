<template>
  <!-- Wrap START -->
  <div class="CounselReq3View page-wrap">
    <div class="text-sucess">
      <p class="text-sucess--top">
        유아교사님 <br />
        <span class="text-orange">상담리뷰</span>가 제출 되었습니다.
      </p>
    </div>
    <div class="text-sucess">
      <p class="text-sucess--bottom">
        비공개글은 등록 후 24시간만 공개되며
        <br />
        답변이 완료되면 질문자와 답변자의
        <br />
        <span class="text-orange"> 마이페이지 &gt; 상담내역 </span>
        <br />
        에서만 확인 할 수 있습니다.
      </p>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "CounselReq3View",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
    doCheck() {
      this.$router.push("/menu/temp/counselReq4Tag");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "상담요청완료(상담요청3페이지)";
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>

<style lang="scss" scoped>
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
  width: 150px;
  height: 150px;
}
</style>
