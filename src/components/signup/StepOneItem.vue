<template>
  <div class="step-one">
    <div class="step-title">회원가입</div>
    <div class="radio-wrap">
      <label for="checkSignupJob1">
        <input
          id="checkSignupJob1"
          v-model="gubn"
          name="gubn"
          type="radio"
          value="A"
          @change="stored($event)"
        />유아교사<br />
      </label>
      <p>원앤집의 모든 기능을 이용할 수 있습니다.</p>
    </div>
    <div class="radio-wrap">
      <label for="checkSignupJob2">
        <input
          id="checkSignupJob2"
          v-model="gubn"
          name="gubn"
          type="radio"
          value="I"
          @change="stored($event)"
        />예비교사/학부모<br />
      </label>
      <p>기관리뷰 작성을 제외한 모든 기능을 이용할 수 있습니다.</p>
    </div>
    {{ gubn }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["signupData"]),
  },
  created: function () {
    if (this.signupData != null) {
      this.gubn = this.signupData != null ? this.signupData.gubnCode : null;
    } else {
      this.gubn = null;
    }
  },
};
</script>

<style lang="scss" scoped>
.step-one {
  padding: 30px 15px 15px;

  .step-title {
    font-size: 20px;
  }
}
.radio-wrap {
  align-items: center;
  margin-top: 10px;
  padding: 10px 10px;
  background: #fff;
  border: 1px solid #673ab7;
  border-radius: 10px;

  .text_view {
    flex: end;
    color: #666;
  }
}
</style>
