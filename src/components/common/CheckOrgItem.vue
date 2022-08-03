<template>
  <div>
      <template v-if="isShowAll == 'true'">
        <input
          v-model="interestCompanyName"
          type="radio"
          value="all"
          @change="onDataChanged"
        />
        <label for="allChoice">전체</label>
      </template>
      <input
        v-model="interestCompanyName"
        type="radio"
        value="kindergarten"
        @change="onDataChanged"
      />
      <label for="kindergartenChoice">유치원</label>
      <input
        v-model="interestCompanyName"
        type="radio"
        value="daycarecenter"
        @change="onDataChanged"
      />
      <label for="careCenterChoice">어린이집</label>
    </div>
</template>

<script>
export default {
  name: "StepOneItem",
  components: {},
  props: ['selected','isShowAll'],
  data() {
    return {
      interestCompanyName: this.selected,
    };
  },
  methods: {
    onDataChanged() {
      this.$emit('change', this.interestCompanyName) // input 이벤트 발생
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
