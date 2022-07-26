<template>
<div class="text-center loading-wrap" v-if="isLoading">
    <v-progress-circular
    indeterminate
    color="primary"
    :size="40"
    :width="7"
    ></v-progress-circular>
</div>
</template>

<script>
export default {
  name: "LoadingItem",
  components: {},
  props: ['isLoading'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.loading-wrap{
    position:relative;
    /* position:absolute;
    bottom:25px;
    left:0;
    width:100%; */
    min-height:110px;
    background-color: #f2f2f2;
    .v-progress-circular {
        position:absolute;
        left:50%;top:50%;transform:translate(-50%,-50%);
    }
}

</style>
