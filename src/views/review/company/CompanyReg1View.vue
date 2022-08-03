<template>
  
  <!-- Wrap START -->
  <div class="CompanyReg1View page-wrap">
    <div class="page-txt">
      <p style="color:black;margin-bottom:5px">철저한 익명을 보장합니다.</p>
      <p>원앤집 리뷰는 작성자 추정이 되지 않습니다. 기관에 대한 진솔한 정보를 공유하세요.</p>
    </div>
    <div class="step-title">관심기관</div>
    <CheckCompanyItem :selected="interestCompanyName" isShowAll='false' @change="onChangeCompany" ref="CheckCompanyItem"></CheckCompanyItem>
    <div class="column" style="margin-top: 10px">
      <input type="text" class="line" name="" readonly placeholder="기관명을 두 글자 이상 입력하세요." @click="searchCompany"/>
    </div>

    <div class="step-title">근무시 교사연차</div>
    <div class="column" style="margin-top: 10px">
      <input type="text" class="line" name="" placeholder="근무시 마지막 연차를 입력하세요."/>
      <p>재직중이면 현재 연차를 입력해요(3년차는 3)</p>
    </div>

    <div class="btn-wrap">
      <div class="step-title">연차공개설정</div>
      <CheckOpenYNItem style="flex: 0.5 1 auto;" :selected="workExpOpenYn" @change="onChangeWorkExpOpenYn"></CheckOpenYNItem>
    </div>
    
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import CheckCompanyItem from "@/components/common/CheckCompanyItem.vue";
import CheckOpenYNItem from "@/components/common/CheckOpenYNItem.vue";

export default {
  name: "CompanyReg1View",
  components:{
    CheckCompanyItem, CheckOpenYNItem
  },
  data() {
    return {
      dialog: false,
      addTagData: null,
      addedTagData: [],
      addingTagData: [],
      interestCompanyName: null,
      relatedZone: null,
      workExpOpenYn: 'N',
    };
  },
  methods: {
    ...mapActions('Counsel',['setReq']),
    searchCompany(){
      console.log('구현');
    },
    // doNext() {
    //   const interestCompanyName = this.interestCompanyName;
    //   const relatedZone = this.relatedZone;
    //   const addedTagData = this.addedTagData
    //   this.setReq({interestCompanyName, relatedZone, addedTagData});
    //   this.$router.push("/counsel/counselReg2");
    // },
    // getAddressSido(){
    //   accountApi.getAddressSido((body)=>{
    //     console.log(body);
    //     this.sidoList = body;
    //     this.getAddressBySido();
    //   });
    // },
    // getAddressBySido(){
    //   if(this.interestSidoCode){
    //     accountApi.getAddressBySido(this.interestSidoCode, (body)=>{
    //       console.log(body);
    //       this.sigugunList = body;
    //     });
    //   }
    // },
    // addTag(){
    //   if(this.addedTagData.includes(this.addTagData)){
    //     alert('이미 등록된 태그입니다.');
    //     return;
    //   }
    //   if(this.addingTagData.includes(this.addTagData)){
    //     alert('이미 등록된 태그입니다.');
    //     return;
    //   }
      
    //   this.addingTagData.push(this.addTagData);
    //   this.addTagData = null;
    // },
    // confirmTagInput(){
    //   this.addedTagData.push(...this.addingTagData);
    //   this.addingTagData = [];
    // },
    onChangeCompany(value){
      this.interestCompanyName = value;
    },
    // onChangeZone(value){
    //   this.relatedZone = value;
    // }
    onChangeWorkExpOpenYn(value){
      this.workExpOpenYn = value;
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "기관리뷰 작성";
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
