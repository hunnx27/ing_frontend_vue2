<template>
  <!-- Wrap START -->
  <div class="counselReq2View page-wrap">
    <div class="step-title">상담분류</div>
    <div class="column">
      <select class="line" name="" attr="">
        <option value="">우리반아이</option>
      </select>
    </div>

    <div class="step-title">궁금한 내용</div>
    <div class="column">
      <textarea name="" id="" cols="0" rows="0"></textarea>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "counselReq2View",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
    doCheck() {
      this.$router.push("/menu/temp/counselReq3");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "상담요청(상담요청2페이지)";
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
  },
};
</script>

<style lang="scss" scoped>
.line {
  border: 1px solid #d8d8d8;
}
.page-txt {
  padding-bottom: 20px;
  border-bottom: 1px solid #a1a1a1;
  text-align: center;

  p {
    font-size: 18px;
    color: #f2a33c;
    font-weight: 600;
  }
}
.step-title {
  font-size: 20px;
  font-weight: 600;
}
input[type="radio"] {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
input[type="text"] {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
select {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
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
  &--col2 {
    input[type="text"] {
      width: 50%;
    }
    select {
      width: 50%;
    }
  }
}

label {
  margin-right: 10px;
}
</style>
