<template>
  <div>
    <h1>This is an Preview Component</h1>
    단방향 bind :
    <input type="text" name="" id="" v-bind:value="state.cnt">
    {{state.cnt}}
    <v-btn @click="inc">+</v-btn>
    <br/>
    양방향 bind : 
    <input type="text" name="" id="" v-model="state.cnt2">
    {{state.cnt2}}
    <v-btn @click="inc2">+</v-btn>
  </div>
</template>
<script>
/* eslint-disable */
import {
    defineComponent, computed, getCurrentInstance, onMounted, onUnmounted, reactive, toRefs,
} from '@vue/composition-api';

export default defineComponent({
   setup(props, context) {
      const state =reactive({
         cnt:1,
         cnt2:1
      })
      const inc = ()=>{
         state.cnt++
      };
      const inc2 = ()=>{
         state.cnt2++
      };
      
      return { state, inc, inc2 };
  },

});
</script>