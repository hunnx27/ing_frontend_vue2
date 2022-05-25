<template>
  <div class="about">
    <h1>This is an about2 page</h1>
    <ModuleAItem/>
    <br/>
    <v-btn to="/" tag="button">Home으로 ></v-btn>
  </div>
</template>

<script>
import ModuleAItem from '/src/components/moduleA/ModuleAItem.vue'

export default {
  name: 'AboutView',
  props: {
    msg: String
  },
  components:{
    ModuleAItem
  }
}
</script>