<template>
  <div class="radio-wrap">
      <template v-if="isShowAll == 'true'">
        <span>
          <input
            v-model="interestCompanyName"
            type="radio"
            value="all"
            @change="onDataChanged"
            id="allChoice"
          />
          <label for="allChoice">전체</label>
        </span>
      </template>
      <span>
        <input
          v-model="interestCompanyName"
          type="radio"
          value="kindergarten"
          @change="onDataChanged"
          id="kindergartenChoice"
        />
        <label for="kindergartenChoice">유치원</label>
      </span>
      <span>
        <input
          v-model="interestCompanyName"
          type="radio"
          value="daycarecenter"
          @change="onDataChanged"
          id="careCenterChoice"
        />
        <label for="careCenterChoice">어린이집</label>
      </span>
      
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

.radio-wrap {
  /* label radio custom version */
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    width: 100%;

    input[type="radio"] {
      display: none;
    }
    label {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: 1px solid #6200ea;
      box-sizing: border-box;
      text-align: center;
      background: #fff;
      color: #6200ea;
    }
    label.sm {
      height: 30px;
      line-height: 30px;
      font-size: 13px;
    }

    input[type="radio"]:checked + label {
      background: #6200ea;
      color: #fff;
    }
  }
}
</style>
