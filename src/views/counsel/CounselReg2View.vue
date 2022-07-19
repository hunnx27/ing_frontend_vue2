<template>
  <!-- Wrap START -->
  <div class="counselReg2View page-wrap">
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

    <div class="step-title">사진첨부(최대5장) 선택사항</div>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="이미지를 첨부하세요"
      prepend-icon="mdi-camera"
      label="이미지"
    ></v-file-input>

    <div class="box-point">
      <div class="box-point--title">포인트</div>
      <span class="box-point--text">
        내 보유포인트 <span class="box-point--text--blue">3,150</span>
        <span class="deduction_txt">: 상담등록시100P 차감됩니다.</span>
      </span>
    </div>

    <div class="btn-wrap">
      <div class="step-title">공개설정</div>
      <v-btn
        depressed
        color="blue-grey"
        style="margin-right: 10px; color: #fff"
      >
        비공개
      </v-btn>
      <v-btn depressed color="primary"> 공개 </v-btn>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "counselReg2View",
  data() {
    return {
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
    };
  },
  methods: {
    ...mapActions(["logout"]),
    doCheck() {
      this.$router.push("/counsel/counselReg3");
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
.box-point {
  margin-top: 10px;
  padding: 15px;
  color: #000;
  background: #fff;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 2px 4px -3px;
  line-height: 18px;
  font-size: 18px;
  &--title {
    font-weight: 600;
  }
  &--text {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    &--blue {
      color: #5691ef;
    }
    .deduction_txt {
      color: #a1a1a1;
    }
  }
}
.btn-wrap {
  position: relative;
  margin-top: 20px;
  text-align: right;
  .step-title {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    margin-top: 0;
  }
}

label {
  margin-right: 10px;
}
</style>
