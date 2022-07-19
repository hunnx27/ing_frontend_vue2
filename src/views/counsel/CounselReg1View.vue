<template>
  <!-- Wrap START -->
  <div class="counselReg1View page-wrap">
    <div class="page-txt">
      <p>유아교사(멘토)를 찾는데 활용됩니다.</p>
    </div>
    <div class="step-title">질문과 관련된 기관을 선택하세요.</div>
    <div>
      <input name="intrsOrg" type="radio" value="all" id="allChoice" />
      <label for="allChoice">전체</label>
      <input
        name="intrsOrg"
        type="radio"
        value="kindergarten"
        id="kindergartenChoice"
      />
      <label for="kindergartenChoice">유치원</label>
      <input
        name="intrsOrg"
        type="radio"
        value="daycarecenter"
        id="careCenterChoice"
      />
      <label for="careCenterChoice">어린이집</label>
    </div>

    <div class="step-title">질문과 관련된 기관을 선택하세요.</div>
    <div class="column--col2">
      <select class="line" name="intrsZonePrefix" attr="sido_code">
        <option value="11">서울특별시</option>
      </select>
      <select class="line" name="intrsZone" attr="sigungu_code">
        <option value="">전체</option>
        <option value="11680">강남구</option>
        <option value="error">FIXME: ADDRESS Table처리필요</option>
      </select>
    </div>

    <div class="step-title">#태그입력</div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <div class="column">
          <input
            type="text"
            class="line"
            name="majorSchool"
            v-bind="attrs"
            v-on="on"
          />
        </div>
      </template>

      <v-card>
        <div class="layerpopup--tag">
          <div class="pop-title">태그입력</div>
          <div class="pop-body">
            <div>
              <span class="btn-tag btn-tag--purple">#유아원선택</span>
              <span class="btn-tag btn-tag--gray">#기능</span>
              <span class="btn-tag btn-tag--blue">#이사</span>
              <span class="btn-tag btn-tag--blue">#고민</span>
              <span class="btn-tag btn-tag--green">#부조리</span>
            </div>
            <div class="wrap-inputbtn">
              <input
                type="text"
                class="line"
                name="taginput"
                v-bind="attrs"
                v-on="on"
              />
              <button type="button">추가</button>
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">취소</v-btn>
          <v-btn color="primary" text @click="dialog = true">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "counselReg1View",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["logout"]),
    doNext() {
      this.$router.push("/counsel/counselReg2");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "교사멘토 매칭";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: true,
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

.v-dialog {
  overflow: hidden;
  border-radius: 15px;
}
.layerpopup {
  &--tag {
    background: #fff;

    .pop-title {
      height: 90px;
      line-height: 90px;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      background: #e4034f;
      color: #fff;
    }

    .pop-body {
      padding: 20px;
    }

    .btn-tag {
      display: inline-block;
      margin: 10px 10px 0 10px;
      width: 100px;
      height: 30px;
      font-size: 15px;
      line-height: 30px;
      color: #fff;
      text-align: center;
      &--purple {
        background: #673bb7;
      }
      &--blue {
        background: #465a65;
      }
      &--green {
        background: #689f39;
      }
      &--gray {
        background: #607d8b;
      }
    }

    .wrap-inputbtn {
      position: relative;
      margin-top: 20px;
      padding-right: 60px;
      input {
        width: 100%;
      }
      button {
        position: absolute;
        right: 0;
        top: 0;
        width: 55px;
        height: 46px;
        line-height: 46px;
        background: #009788;
        color: #fff;
      }
    }
  }
}

.v-dialog > .v-card > .v-card__actions {
  padding: 0;
}
.v-card__actions > .v-btn.v-btn {
  margin: 0 !important;
  padding: 0;
  width: 50%;
  background: #f7f7f7;
  border-radius: 0;
  box-sizing: border-box;
  color: #8c8c8c !important;
  font-weight: 600;
  border: 1px solid #b5b5b5;
}
</style>
