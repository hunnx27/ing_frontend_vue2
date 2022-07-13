<template>
  <!-- Wrap START -->
  <div class="myinfo page-wrap">
    <div class="step-title">관심기관</div>
    <div>
      <input
        v-model="intrsOrg"
        name="intrsOrg"
        type="radio"
        value="ALL"
        id="allChoice"
      />
      <label for="allChoice">전체</label>
      <input
        v-model="intrsOrg"
        name="intrsOrg"
        type="radio"
        value="KINDERGARTEN"
        id="kindergartenChoice"
      />
      <label for="kindergartenChoice">유치원</label>
      <input
        v-model="intrsOrg"
        name="intrsOrg"
        type="radio"
        value="DAYCARECENTER"
        id="careCenterChoice"
      />
      <label for="careCenterChoice">어린이집</label>
    </div>

    <div class="step-title">출생연도</div>
    <div class="column">
      <select class="line" name="birthYYYY" v-model="birthYYYY">
        <option value="">선택하세요.</option>
        <option
          :value="n"
          v-for="n in yearRange(1953)"
          :key="n"
          :selected="n == birthYYYY"
        >
          {{ n }}
        </option>
      </select>
    </div>
    <div class="step-title">관심지역</div>
    <div class="column--col2">
      <select class="line" name="intrsZonePrefix" attr="sido_code">
        <option value="11">서울특별시</option>
      </select>
      <select
        class="line"
        name="intrsZone"
        v-model="intrsZone"
        attr="sigungu_code"
      >
        <option value="">전체</option>
        <option value="11680">강남구</option>
        <option value="error">FIXME: ADDRESS Table처리필요</option>
      </select>
    </div>

    <div class="step-title">출신학교</div>
    <div class="column">
      <input
        type="text"
        class="line"
        name="majorSchool"
        v-model="majorSchool"
      />
    </div>

    <div class="step-title">학과</div>
    <div class="column">
      <input
        type="text"
        class="line"
        name="majorDepartment"
        v-model="majorDepartment"
      />
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import accountApi from "@/api/account";
const title = "내 정보";
const options = {
  isShowCheckBtn: true,
  isShowNextBtn: false,
  isShowSearchBtn: false,
};

export default {
  name: "myinfoView",
  components: {},
  data() {
    return {
      intrsOrg: null,
      birthYYYY: 2021,
      intrsZone: null,
      majorSchool: null,
      majorDepartment: null,
    };
  },
  methods: {
    yearRange(startFrom) {
      var today = new Date();
      var year = today.getFullYear();
      const r = [];
      for (let i = startFrom; i <= year; i++) {
        r.push(i);
      }
      return r.reverse();
    },
    setLayout(options) {
      console.log(options);
      this.$emit("setLayout", title, options);
    },
    doCheck() {
      // 저장데이터 셋팅
      var saveDataObj = {
        intrsOrg: this.intrsOrg,
        birthYYYY: this.birthYYYY,
        intrsZone: this.intrsZone,
        majorSchool: this.majorSchool,
        majorDepartment: this.majorDepartment,
      };
      console.log("saveData : " + saveDataObj);
      var isOk = confirm("저장하시겠습니까?");
      if (isOk) {
        this.save(saveDataObj);
      }
    },
    save(paramObj) {
      console.log("BEFORE save Call");
      accountApi.saveMyinfo(
        paramObj,
        (body) => {
          console.log("succss.body : ", body);
          alert("fixme : 저장후 처리 로직 추가 하세요.", body);
        },
        (err) => {
          console.log("err : ", err);
          alert("FIXME : 에러처리하세요.", err);
        }
      );
      console.log("AFTER save Call");
    },
  },
  created() {
    console.log("HELLO!");
    this.setLayout(options);
  },
};
</script>

<style lang="scss" scoped>
.line {
  border: 1px solid #d8d8d8;
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
