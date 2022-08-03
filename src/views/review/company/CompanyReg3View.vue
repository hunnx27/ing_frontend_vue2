<template>
  <!-- Wrap START -->
  <div class="CompanyReg3View page-wrap">
    <div class="page-txt">
      <p style="color:red;margin-bottom:5px">원앤집은 선택형 리뷰 시스템으로</p>
      <p style="color:red"><span style="color:orange">익명</span>을 보장합니다.</p>
    </div>
    <hr/>

    <div class="step-title">업무량</div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
      <p>생일잔치는 행사횟수에 포함하지 않아요</p>
    </div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
    </div>

    <div class="step-title">직무만족</div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
    </div>

    <div class="step-title">원내분위기</div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="column">
      <select class="line" >
        <option v-for="(item) in list" :key="item" :value="item">{{item}}</option>
      </select>
    </div>

    <div class="step-title">사진첨부(최대5장) 선택사항</div>
    <v-img :src="url"></v-img>
    <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="이미지를 첨부하세요"
          prepend-icon="mdi-camera"
          multiple
          label="이미지"
          class="hidden"
          ref="image"          
          v-model="image"
        ></v-file-input>


  </div>
  <!-- Wrap END -->
</template>

<style></style>
<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "CompanyReg3View",
  data() {
    return {
      list: ["test1","test2"],
      url: null,
      image: null,
    };
  },
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "기관리뷰등록3";
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

.btn-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .step-title {
    margin-top:0
    // position: absolute;
    // left: 0;
    // top: 50%;
    // transform: translate(0, -50%);
    // margin-top: 0;
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
  padding: 28px 0;
  width: 50%;
  background: #f7f7f7;
  border-radius: 0;
  box-sizing: border-box;
  color: #8c8c8c !important;
  font-weight: 600;
  border: 1px solid #b5b5b5;
}
</style>
