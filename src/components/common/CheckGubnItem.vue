<template>
  <div class="step-one page-wrap">
    <div class="radio-wrap">
      <label for="checkJobGubn1">
        <input
          id="checkJobGubn1"
          v-model="gubn"
          name="gubn"
          type="radio"
          value="S"
          @change="stored($event)"
        />유아교사<br />
      </label>
      <p v-show="gubn == 'S'">원앤집의 모든 기능을 이용할 수 있습니다.</p>
    </div>
    <div class="radio-wrap">
      <label for="checkJobGubn2">
        <input
          id="checkJobGubn2"
          v-model="gubn"
          name="gubn"
          type="radio"
          value="I"
          @change="stored($event)"
        />예비교사/학부모<br />
      </label>
      <p v-show="gubn == 'I'">기관리뷰 작성을 제외한 모든 기능을 이용할 수 있습니다.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "StepOneItem",
  components: {},
  props: {},
  data() {
    return {
      gubn: null,
    };
  },
  methods: {
    ...mapActions(["setSignupGubn"]),
    stored(e) {
      console.log(e.target.value);
      const gubn = e.target.value;
      this.setSignupGubn({ gubn });
    },
  },
  created: function () {
    // Appbar Option 설정
    // const options = {isShowCheckBtn: false,isShowNextBtn: true,isShowSearchBtn: false};
    // this.$emit('setLayout',options);

    if (this.signupData != null) {
      this.gubn = this.signupData != null ? this.signupData.gubnCode : null;
    } else {
      this.gubn = null;
    }
  },
};
</script>

<style lang="scss" scoped>
.radio-wrap {
  align-items: center;
  margin-top: 10px;
  padding: 10px 10px;
  background: #fff;
  border: 1px solid #673ab7;
  border-radius: 10px;
}
</style>
