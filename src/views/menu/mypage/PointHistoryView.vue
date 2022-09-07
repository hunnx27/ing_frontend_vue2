<template>
  <!-- Wrap START -->
  <div class="pointHistory page-wrap">
    현재 포인트 <span class="point_num">{{user.point}}p</span>
    <div class="pointbox" v-for="(item) in pointHistories" :key="item.id">
      <span>{{item.createDt}}</span>
      <span>{{item.amt}}</span>
      <span>{{item.description}}</span>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "pointHistoryView",
  components: {},
  data() {
    return {
      pointHistories: []
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    getMyPointHistories() {
      accountApi.getMyPointHistories(
        (body) => {
          if (body == "error") {
            alert("서버에 오류가 있습니다.", body);
            return;
          }
          console.log(body);
          this.pointHistories = body.data.content;
        },
        (err) => {
          if (err.response.data.status === 500) {
            alert('서버에 오류가 있습니다.');
          }
          console.log(`err : ${err}`);
        }
      );
    },
  },
  created() {
    const title = "포인트 이력";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
    this.getMyPointHistories();
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
