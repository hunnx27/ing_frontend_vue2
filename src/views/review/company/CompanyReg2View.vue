<template>
  
  <!-- Wrap START -->
  <div class="CompanyReg2View">
    <div class="page-txt" style="padding:30px 15px 15px">
      <p>
        <span style="color: red">원앤집은 선택형 리뷰 시스템으로</span><br />
        <span style="color: orange">익명을 보장합니다.</span>
      </p>
    </div>
    <div class="page_txt" style="height:150px;position:relative;background-size:cover;background-repeat: no-repeat;" :style="{backgroundImage: `url('/resources/images/review_bg.jpg')`}">
      <p style="color:white;line-height:26px;text-align:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">
        <span style="font-size:20px;font-weight:bolder">{{companyName}}</span><br/>
        <span style="">경기도 고양시 덕양구{{sigugunName}}</span><br/>
        <span style="">국공립{{establishmentTypeName}}</span><br/>
      </p>
    </div>

    <div class="page-wrap">
      <div class="step-title">한줄평가</div>
      <div class="column" style="margin-top: 10px">
        <textarea></textarea>
      </div>

      
      <div class="step-title">계속 근무하고 싶나요?</div>
      <CheckLikeItem style="flex: 0.5 1 auto;" :selected="likeCode" @change="onChangeLikeCode"></CheckLikeItem>
    </div>
    
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import CheckLikeItem from "@/components/company/CheckLikeItem.vue";

export default {
  name: "CompanyReg2View",
  components:{
    CheckLikeItem
  },
  data() {
    return {
      dialog: false,
      addTagData: null,
      addedTagData: [],
      addingTagData: [],
      interestCompanyName: null,
      relatedZone: null,
      likeCode: null,
    };
  },
  methods: {
    ...mapActions('Counsel',['setReq']),
    onChangeLikeCode(value){
      this.likeCode = value;
    }
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters("CompanyReview",["reqData"]),
  },
  created() {
    if (this.reqData != null) {
      const yearamt = this.reqData;
      //if(yearamt.workExpOpenYn) this.workExpOpenYn = yearamt.workExpOpenYn;
      if(yearamt.amt) this.amt = yearamt.amt;
      if(yearamt.etcYn) this.etcYn = yearamt.etcYn;
      if(yearamt.endYn) this.endYn = yearamt.endYn;
      if(yearamt.etcTemp)this.etcTemp = yearamt.etcTemp;
      if(yearamt.etcObj)this.etcObj = yearamt.etcObj;
      if(yearamt.etcObj)this.etcItem = Object.keys(yearamt.etcObj).map(item=>Number(item));
      if(yearamt.companyName) this.companyName = yearamt.companyName;
    }
    const title = this.companyName? this.companyName : "-";
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
