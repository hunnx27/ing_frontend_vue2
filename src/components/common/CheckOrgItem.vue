<template>
  <div>
      <template v-if="isShowAll">
      <input
        v-model="interestOrgName"
        name="interestOrg"
        type="radio"
        value="all"
        id="allChoice"
      />
      <label for="allChoice">전체</label>
      </template>
      <input
        v-model="interestOrgName"
        name="interestOrg"
        type="radio"
        value="kindergarten"
        id="kindergartenChoice"
      />
      <label for="kindergartenChoice">유치원</label>
      <input
        v-model="interestOrgName"
        name="interestOrg"
        type="radio"
        value="daycarecenter"
        id="careCenterChoice"
      />
      <label for="careCenterChoice">어린이집</label>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "StepOneItem",
  components: {},
  props: ['isShowAll'],
  data() {
    return {
      interestOrgName: null,
    };
  },
  computed: {
    /*
     스토어의 값을 변수처리할 수 있도록 초기화함
     1. mapGetters : 스토어의 모든 Getter함수를 가져옴, 그 중 배열에 선택된 Getter함수 제한 가능
    */
    ...mapGetters(["user"]),
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
    const storedMyinfo = this.user!=null? this.user.myinfo : null;
    if(storedMyinfo!=null){
      this.interestOrgName = storedMyinfo.interestOrg;
    }else{
      this.interestOrgName = null;
    }
  },
};
</script>

<style lang="scss" scoped>
label {
  margin-right: 10px;
}
input[type="radio"] {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
