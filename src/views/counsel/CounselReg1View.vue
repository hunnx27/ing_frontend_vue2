<template>
  
  <!-- Wrap START -->
  <div class="counselReg1View page-wrap">
    <div class="page-txt">
      <p>유아교사(멘토)를 찾는데 활용됩니다.</p>
    </div>
    <div class="step-title">질문과 관련된 기관을 선택하세요.</div>
    <div>
      <input v-model="interestOrgName" name="interestOrg" type="radio" value="all" id="allChoice" />
      <label for="allChoice">전체</label>
      <input
        v-model="interestOrgName"
        name="interestOrg"
        type="radio"
        value="kindergarten"
        id="kindergartenChoice"
      />
      <label for="kindergartenChoice">유치원</label>
      <input
        v-model="interestOrgName"
        name="interestOrg"
        type="radio"
        value="daycarecenter"
        id="careCenterChoice"
      />
      <label for="careCenterChoice">어린이집</label>
    </div>

    <div class="step-title">질문과 관련된 지역을 선택하세요.</div>
    <div class="column--col2">
      <select class="line" name="interestZonePrefix" attr="sido_code" v-model='interestSidoCode' @change="getAddressBySido">
        <option v-for="(item) in sidoList" :value="item.sidoCode" :key="item.sidoCode" >{{item.sidoName}}</option>
      </select>
      <select
        class="line"
        name="interestZone"
        v-model="interestZone"
        attr="sigungu_code"
      >
        <option value="">전체</option>
        <option 
          v-for="(item) in sigugunList" 
          :value="item.sigunguCode" 
          :key="item.id"
          :selected="item.sidoCode == interestZone"
        >{{item.sigunguName}}
        </option>
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
            :value="addedTagDataStr"
            readonly
            v-bind="attrs" v-on="on"
          />
        </div>
      </template>

      <v-card>
        <div class="layerpopup--tag">
          <div class="pop-title">태그입력</div>
          <div class="pop-body">
            <div>
              <span v-for="(item, idx) in addedTagData" :key="idx" class="btn-tag btn-tag--green">#{{item}}</span>
              <span v-for="(item, idx) in addingTagData" :key="idx+'adding'" class="btn-tag btn-tag--green">#{{item}}</span>
            </div>
            <div class="wrap-inputbtn">
              <input
                type="text"
                class="line"
                name="taginput"
                v-model="addTagData"
              />
              <button type="button" @click="addTag">추가</button>
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">취소</v-btn>
          <v-btn color="primary" text @click="confirmTagInput();dialog = false">확인</v-btn>
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
      interestOrgName: null,
      interestSidoCode: null,
      interestZone: null,
      sidoList: [],
      sigugunList: [],

      addTagData: null,
      addedTagData: [],
      addingTagData: []
    };
  },
  methods: {
    ...mapActions('Counsel',['setReq']),
    doNext() {
      const interestOrgName = this.addedTagData;
      const interestZone = this.interestOrgName;
      const addedTagData = this.interestZone;
      this.setReq({interestOrgName, interestZone, addedTagData});
      this.$router.push("/counsel/counselReg2");
    },
    getAddressSido(){
      accountApi.getAddressSido((body)=>{
        console.log(body);
        this.sidoList = body;
        this.getAddressBySido();
      });
    },
    getAddressBySido(){
      if(this.interestSidoCode){
        accountApi.getAddressBySido(this.interestSidoCode, (body)=>{
          console.log(body);
          this.sigugunList = body;
        });
      }
    },
    addTag(){
      if(this.addedTagData.includes(this.addTagData)){
        alert('이미 등록된 태그입니다.');
        return;
      }
      if(this.addingTagData.includes(this.addTagData)){
        alert('이미 등록된 태그입니다.');
        return;
      }
      
      this.addingTagData.push(this.addTagData);
      this.addTagData = null;
    },
    confirmTagInput(){
      this.addedTagData.push(...this.addingTagData);
      this.addingTagData = [];
    }
  },
  computed: {
    ...mapGetters(["user"]),
    addedTagDataStr(){
      var rs = "";
      this.addedTagData.forEach((data, idx)=>{
        rs+=`#${data}`;
        if(idx != this.addedTagData.length-1) rs += ' '
      })
      return rs;
    }
  },
  created() {
    const title = "교사멘토 매칭";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: true,
      isShowSearchBtn: false,
    };
    this.$emit("setLayout", title, options);
    this.getAddressSido();
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
