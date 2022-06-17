<template>

  <div class="about">
    <h1>This is an about page</h1>
    <ModuleAItem/>
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