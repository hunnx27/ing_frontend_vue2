<template>
<v-container fluid>
  <div class="about">
    <h1>This is an about2 page</h1>
    <ModuleAItem/>
    <br/>
    <router-link to="/" tag="button">Home으로 ></router-link>
  </div>
</v-container>
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