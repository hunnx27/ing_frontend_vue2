<template>
  <div class="radio-wrap">
    <p>
      <label for="first">
        <input
          v-model="likeCode"
          type="radio"
          value="A101"
          @change="onDataChanged"
          id="first"
        />
        <img :for="uid+'-like'" :src="likeBtnUrl"/>
        <span>여유</span>
      </label>
    </p>
    <p>
      <label for="second">
        <input
          v-model="likeCode"
          type="radio"
          value="A102"
          @change="onDataChanged"
          id="second"
        />
        <img :for="uid+'-normal'" :src="normalBtnUrl"/>
        <span>편안</span>
      </label>
    </p>
    <p>
      <label for="third">
        <input
          v-model="likeCode"
          type="radio"
          value="A103"
          @change="onDataChanged"
          id="third"
        />
        <img :for="uid+'-hate'" :src="hateBtnUrl"/>
        <span>긴장</span>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: "CheckLevelItem",
  components: {},
  props: ['selected', 'uid'],
  data() {
    return {
      likeCode: this.selected,
      likeBtnUrl: null,
      normalBtnUrl: null,
      hateBtnUrl: null,
    };
  },
  methods: {
    onDataChanged() {
      switch(this.likeCode){
        case 'A101':
          this.likeBtnUrl = '/resources/images/ic_review_like_on.png';
          this.normalBtnUrl = '/resources/images/ic_review_normal_off.png';
          this.hateBtnUrl = '/resources/images/ic_review_hate_off.png';
          break;
        case 'A102':
          this.likeBtnUrl = '/resources/images/ic_review_like_off.png';
          this.normalBtnUrl = '/resources/images/ic_review_normal_on.png';
          this.hateBtnUrl = '/resources/images/ic_review_hate_off.png';
          break;
        case 'A103':
          this.likeBtnUrl = '/resources/images/ic_review_like_off.png';
          this.normalBtnUrl = '/resources/images/ic_review_normal_off.png';
          this.hateBtnUrl = '/resources/images/ic_review_hate_on.png';
          break;
        default:
          this.likeBtnUrl = '/resources/images/ic_review_like_off.png';
          this.normalBtnUrl = '/resources/images/ic_review_normal_off.png';
          this.hateBtnUrl = '/resources/images/ic_review_hate_off.png';
          break;
      }
      this.$emit('change', this.likeCode) // input 이벤트 발생
    }
  },
  created(){
    switch(this.likeCode){
      case 'A101':
        this.likeBtnUrl = '/resources/images/ic_review_like_on.png';
        this.normalBtnUrl = '/resources/images/ic_review_normal_off.png';
        this.hateBtnUrl = '/resources/images/ic_review_hate_off.png';
        break;
      case 'A102':
        this.likeBtnUrl = '/resources/images/ic_review_like_off.png';
        this.normalBtnUrl = '/resources/images/ic_review_normal_on.png';
        this.hateBtnUrl = '/resources/images/ic_review_hate_off.png';
        break;
      case 'A103':
        this.likeBtnUrl = '/resources/images/ic_review_like_off.png';
        this.normalBtnUrl = '/resources/images/ic_review_normal_off.png';
        this.hateBtnUrl = '/resources/images/ic_review_hate_on.png';
        break;
      default:
        this.likeBtnUrl = '/resources/images/ic_review_like_off.png';
        this.normalBtnUrl = '/resources/images/ic_review_normal_off.png';
        this.hateBtnUrl = '/resources/images/ic_review_hate_off.png';
        break;
    }
  }
};
</script>

<style lang="scss" scoped>

.radio-wrap {
  /* label radio custom version */
  display: flex;
  justify-content: space-around;
  flex-shrink:0;

  p {
    label{
      display: flex;
      flex-direction: column;
      input[type="radio"] {
        display: none;
      }
      img{
        width:95%;
        max-height:100px;
      }
      span{
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
