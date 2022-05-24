<template>
  <div>
    <h1>This is an ModuleA Component</h1>
    {{ counter }}
    <button @click="inc">inc</button>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data(){
    return {
      counter: 1,
    }
  },
  methods:{
    inc(){
      this.counter++;
    }
  }
};
</script>