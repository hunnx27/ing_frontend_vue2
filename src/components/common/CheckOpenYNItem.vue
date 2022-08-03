<template>
  <div class="radio-wrap">
      <span>
        <input
          v-model="openYn"
          type="radio"
          value="N"
          @change="onDataChanged"
          id="openN"
        />
        <label for="openN">비공개</label>
      </span>
      <span>
        <input
          v-model="openYn"
          type="radio"
          value="Y"
          @change="onDataChanged"
          id="openY"
        />
        <label for="openY">공개</label>
      </span>
      
    </div>
</template>

<script>
export default {
  name: "CheckOpenYNItem",
  components: {},
  props: ['selected'],
  data() {
    return {
      openYn: this.selected,
    };
  },
  methods: {
    onDataChanged() {
      this.$emit('change', this.openYn) // input 이벤트 발생
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
