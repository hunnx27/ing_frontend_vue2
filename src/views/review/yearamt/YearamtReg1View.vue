<template>
  <!-- Wrap START -->
  <div class="TempView page-wrap">
    <div class="page-txt">
      <p>
        <span style="color: #000">철저한 익명을 보장합니다.</span>
        <br />
        원앤집 리뷰는 작성자 추정이 되지 않습니다. 기관에 대한 진솔한 정보를
        공유하세요.
      </p>
    </div>
    <div class="step-title">관심기관</div>
    <!-- label radio custom version [s] -->
    <div class="radio-wrap">
      <span>
        <input
          v-model="interestOrgName"
          name="interestOrg"
          type="radio"
          value=""
          id="kindergartenChoice"
        />
        <label for="kindergartenChoice">유치원</label>
      </span>
      <span>
        <input
          v-model="interestOrgName"
          name="interestOrg"
          type="radio"
          value=""
          id="careCenterChoice"
        />
        <label for="careCenterChoice">어린이집</label>
      </span>
    </div>
    <div class="column" style="margin-top: 10px">
      <input type="text" class="line" name="" readonly />
    </div>
    <!-- label radio custom version [e] -->

    <div class="step-title">근무시 교사연차</div>
    <div class="column">
      <input type="number" class="line" name="" readonly />
      <p class="discription">재직중이면 현재 연차를 입력해요(3년차는 3)</p>
    </div>

    <div class="column exposed-setting">
      <div class="step-title">연차공개설정</div>
      <div class="radio-wrap">
        <span>
          <input
            v-model="interestOrgName"
            name="exposedSet"
            type="radio"
            value=""
            id="unExposed"
          />
          <label for="unExposed" class="sm">비공개</label>
        </span>
        <span>
          <input
            v-model="interestOrgName"
            name="exposedSet"
            type="radio"
            value=""
            id="exposed"
          />
          <label for="exposed" class="sm">공개</label>
        </span>
      </div>
    </div>
  </div>
  <!-- Wrap END -->
</template>

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
    const title = "연봉리뷰등록1";
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

.radio-wrap {
  /* label radio custom version */
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    width: 100%;

    input[type="radio"] {
      display: none;
    }
    label {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: 1px solid #6200ea;
      box-sizing: border-box;
      text-align: center;
      background: #fff;
      color: #6200ea;
    }
    label.sm {
      height: 30px;
      line-height: 30px;
      font-size: 13px;
    }

    input[type="radio"]:checked + label {
      background: #6200ea;
      color: #fff;
    }
  }
}

input[type="text"],
input[type="number"] {
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
  input[type="text"],
  input[type="number"] {
    width: 100%;
  }
  select {
    width: 100%;
  }
  &--col2 {
    input[type="text"] {
      width: 50%;
    }
    select {
      width: 50%;
    }
  }
  &.exposed-setting {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .step-title {
      margin-top: 0;
    }
    .radio-wrap {
      width: 100px;
    }
  }
}
.discription {
  font-size: 14px;
  color: #6200ea;
}
</style>
