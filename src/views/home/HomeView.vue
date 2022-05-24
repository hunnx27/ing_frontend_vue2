<template>
<v-container fluid>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <CounterItem/>
  </div>
</v-container>
</template>

<script>
import CounterItem from '@/components/moduleB/PreviewItem.vue'
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
