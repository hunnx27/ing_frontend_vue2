<template>
  <!-- Wrap START -->
  <div class="TempView page-wrap"></div>
  <!-- Wrap END -->
</template>

<style></style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "TempView",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "작업";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>
