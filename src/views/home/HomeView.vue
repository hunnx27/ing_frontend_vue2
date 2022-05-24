<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <CounterItem/>
  </div>
</template>

<script>
import CounterItem from '/src/components/moduleB/PreviewItem.vue'
export default {
  name: 'HomeItem',
  props: {
    msg: String
  },
  components:{
    CounterItem
  }
}
</script>
