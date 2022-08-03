<template>
  <div class="radio-wrap">
      <span>
        <input
          v-model="likeCode"
          type="radio"
          value="A101"
          @change="onDataChanged"
          id="first"
        />
        <label for="first">물론이죠</label>
      </span>
      <span>
        <input
          v-model="likeCode"
          type="radio"
          value="A102"
          @change="onDataChanged"
          id="second"
        />
        <label for="second">글쎄요</label>
      </span>
      <span>
        <input
          v-model="likeCode"
          type="radio"
          value="A103"
          @change="onDataChanged"
          id="third"
        />
        <label for="third">싫어요</label>
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
      likeCode: this.selected,
    };
  },
  methods: {
    onDataChanged() {
      this.$emit('change', this.likeCode) // input 이벤트 발생
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
