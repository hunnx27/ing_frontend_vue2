<template>
  <!-- Wrap START -->
  <div class="pointHistory page-wrap">
    현재 포인트 <span class="point_num">3050p</span>
    <div class="pointbox">
      <span>오늘</span> <span>-100</span><span>상담질문등록</span>
    </div>
    <div class="pointbox">
      <span>2022.05.16</span><span>+50</span><span>로그인-출석</span>
    </div>
    <div class="pointbox">
      <span>2022.05.16</span><span>+3000</span><span>회원가입</span>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
export default {
  name: "pointHistoryView",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    const title = "포인트 이력";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>

<style lang="scss" scoped>
.point_num {
  color: #8b00fd;
}
.pointbox {
  display: flex;
  flex-wrap: wrap;
  height: 40px;
  margin-top: 20px;
  padding: 0 20px;
  background: #fff;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 2px 4px -3px;
  line-height: 40px;

  span {
    display: inline-block;
    width: calc(100% / 3);
    font-size: 15px;
    text-align: center;
  }
}
</style>
