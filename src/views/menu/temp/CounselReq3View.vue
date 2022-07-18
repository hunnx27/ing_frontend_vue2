<template>
  <!-- Wrap START -->
  <div class="CounselReq3View page-wrap"></div>
  <!-- Wrap END -->
</template>

<style></style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "CounselReq3View",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
    doCheck() {
      this.$router.push("/menu/temp/counselReq4Tag");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "상담요청완료(상담요청3페이지)";
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>
