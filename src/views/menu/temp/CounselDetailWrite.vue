<template>
  <!-- Wrap START -->
  <div class="CounselDetailWrite page-wrap">
    <div class="step-title">
      답변
      <span class="btn-text on">상담글보기</span>
    </div>
    <div class="column">
      <textarea name="" id="" cols="0" rows="0"></textarea>
    </div>

    <div class="step-title">사진첨부(최대5장) 선택사항</div>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="이미지를 첨부하세요"
      prepend-icon="mdi-camera"
      label="이미지"
    ></v-file-input>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "CounselDetailWrite",
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
    const title = "수정/답변하기";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>

<style lang="scss" scoped>
.page-txt {
  padding-bottom: 20px;
  border-bottom: 1px solid #a1a1a1;
  text-align: center;
}
.step-title {
  position: relative;
  font-size: 20px;
  font-weight: 600;

  .btn-text {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    padding: 0 10px;
    height: 25px;
    font-size: 15px;
    line-height: 25px;
    border-radius: 20px;
    background: #aeaeae;
    color: #fff;

    &.on {
      background: #fca32d;
    }
  }
}

.column {
  input[type="text"] {
    width: 100%;
  }
  select {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #d8d8d8;
  }
}
</style>
