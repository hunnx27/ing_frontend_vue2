<template>
  <div class="radio-wrap">
      <span>
        
        <label :for="uid+'-existY'" class="pop">
          <input
            class="trigger"
            v-model="existYn"
            type="radio"
            value="Y"
            @change="onDataChanged"
            :id="uid+'-existY'"
          />
          <img style="width:200px" :for="uid+'-existY'" :src="yesBtnUrl"/>
        </label>
        
      </span>
      <span>
        <label :for="uid+'-existN'" class="pop">

          <input
            class="trigger"
            v-model="existYn"
            type="radio"
            value="N"
            @change="onDataChanged"
            :id="uid+'-existN'"
          />
          <img style="width:200px" :for="uid+'-existN'" :src="noBtnUrl"/>
        </label>
      </span>
      
    </div>
</template>

<script>
export default {
  name: "CheckOpenYNItem",
  components: {},
  props: ['selected', 'uid'],
  data() {
    return {
      existYn: this.selected,
      yesBtnUrl: '/resources/images/yes_off.png',
      noBtnUrl: '/resources/images/no_off.png'
    };
  },
  methods: {
    onDataChanged() {
      if(this.existYn == 'Y'){
        this.yesBtnUrl = '/resources/images/yes_on.png';
        this.noBtnUrl = '/resources/images/no_off.png';
      }else{
        this.yesBtnUrl = '/resources/images/yes_off.png';
        this.noBtnUrl = '/resources/images/no_on.png';
      }
      this.$emit('change', this.existYn) // input 이벤트 발생
    },
  },
  created(){
    if(this.existYn == 'Y'){
        this.yesBtnUrl = '/resources/images/yes_on.png';
        this.noBtnUrl = '/resources/images/no_off.png';
    }else{
      this.yesBtnUrl = '/resources/images/yes_off.png';
      this.noBtnUrl = '/resources/images/no_on.png';
    }
  }
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
      display:inline-flex;
      width: 100%;
    }
  }
}
</style>
