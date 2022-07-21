<template>
  <div class="step-one page-wrap">
    <div class="step-title">회원가입</div>
    <CheckGubnItem></CheckGubnItem>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import CheckGubnItem from "@/components/common/CheckGubnItem.vue";
export default {
  name: "StepOneItem",
  components: {CheckGubnItem},
  props: {},
  data() {
    return {
    };
  },
  methods: {
    valid() {
      var isValid = false;
      var err = "";
      if (this.signupData.gubnCode != null) {
        isValid = true;
      } else {
        isValid = false;
        err = "기관구분을 선택하세요.";
      }
      const rs = { isValid, err: err };
      return rs;
    },
  },
  computed: {
    ...mapGetters(["signupData"]),
  },
};
</script>

<style lang="scss" scoped>
.step-one {
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
