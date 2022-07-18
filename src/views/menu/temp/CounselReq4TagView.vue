<template>
  <!-- Wrap START -->
  <div class="counselReq4TagView page-wrap"></div>
  <!-- Wrap END -->
</template>

<style></style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "counselReq4TagView",
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
    const title = "상담요청태그(상담요청 기타 태그 페이지)";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>
