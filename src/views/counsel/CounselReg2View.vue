<template>
  <!-- Wrap START -->
  <div class="counselReg2View page-wrap">
    <div class="step-title">상담분류</div>
    <div class="column">
      <select class="line" v-model="qnaItem">
        <option v-for="(item) in getQnaItemList()" :key="item.code" :value="item.code">{{item.name}}</option>
      </select>
    </div>

    <div class="step-title">궁금한 내용</div>
    <div class="column">
      <textarea v-model="txt" name="" id="" cols="0" rows="0"></textarea>
    </div>

    <!-- <div class="step-title">사진첨부(최대5장) 선택사항</div>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="이미지를 첨부하세요"
      prepend-icon="mdi-camera"
      label="이미지"
    ></v-file-input> -->
    <!-- <div v-if="images"
       class="w-full h-full flex items-center">
      <img :src="images" alt="image">
    </div>
    <div v-else
        class="w-full h-full flex items-center justify-center cursor-pointer hover:bg-pink-100"
        @click="clickInputTag()">
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="이미지를 첨부하세요"
          prepend-icon="mdi-camera"
          multiple
          label="이미지"
          class="hidden"
          ref="image"
          @change="uploadImage()"
        ></v-file-input>
    </div> -->
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
        
    <div class="box-point">
      <div class="box-point--title">포인트</div>
      <span class="box-point--text">
        내 보유포인트 <span class="box-point--text--blue">3,150</span>
        <span class="deduction_txt">: 상담등록시100P 차감됩니다.</span>
      </span>
    </div>

    <div class="btn-wrap">
      <div class="step-title">공개설정</div>
      <CheckOpenYNItem style="flex: 0.5 1 auto;" :selected="shortOpenYn=='Y'?'N':'Y'" @change="onChangeOpenYn"></CheckOpenYNItem>
    </div>
    <v-card v-if="shortOpenYn=='Y'">
        <v-card-text>비공개글은 등록 후 24시간만 공개되며,<br/>
        답변이 완료되면 질문자와 답변자의 마이페이지>상담내역 에서만 확인할 수 있습니다.
        </v-card-text>
    </v-card>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import counselApi from "@/api/counsel";
import CheckOpenYNItem from "@/components/common/CheckOpenYNItem.vue";

export default {
  name: "counselReg2View",
  components:{CheckOpenYNItem},
  data() {
    return {
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      txt:null,
      shortOpenYn:'N',
      qnaItem: null,
      qnaSItemList: [
        {code:"QS01", name:"고민상담"},
        {code:"QS02", name:"우리반아이"},
        {code:"QS03", name:"휴가/휴직"},
        {code:"QS04", name:"호봉/수당"},
        {code:"QS05", name:"승급/임용"},
        {code:"QS06", name:"동료/보조/대체"},
        {code:"QS07", name:"기관문의"},
      ],
      qnaIItemList: [
        {code:"QI01", name:"고민상담"},
        {code:"QI02", name:"자격증"},
        {code:"QI03", name:"실습/자원봉사"},
        {code:"QI04", name:"취업/진로/임용"},
        {code:"QI05", name:"교사월급"},
        {code:"QI06", name:"기관문의"},
      ],
      // images: '',
      url: null,
      image: null,
    };
  },
  methods: {
    ...mapActions('Counsel',['setReq', 'setReq2', 'clearReq']),
    doCheck() {
      this.submit();
    },
    submit: function(){
      const qnaItem = this.qnaItem
      const txt = this.txt
      const shortOpenYn = this.shortOpenYn
      this.setReq2({qnaItem,txt,shortOpenYn});
      let form = new FormData()

      // Image File Setting
      if(this.image){
        for(let i=0; i<this.image.length; i++){
          const file = this.image[i];
          form.append(`files[${i}]`, file);
        }
      }
      
      // 저장 데이터 셋팅
      Object.entries(this.reqData).forEach(item => {
        form.append(item[0], item[1]);
      });
      
      counselApi.saveCounsel(
        form,
        (body) => {
          console.log("succss.body : ", body);
          alert('상담이 저장되었습니다.');
          this.$router.push("/counsel/counselReg3");
        },
        (err) =>{
          console.log(err);
          alert('상담 등록 시스템 오류가 있습니다.');
        }
      );
    },
    onChangeOpenYn(value){
      this.shortOpenYn = value=='Y'?'N':'Y';
    },
    getQnaItemList(){
      debugger;
      let list = [];
      if(this.user!=null){
        const gubn = this.user.gubn;
        if('TEACHER' == gubn){
          // gubn : TEACHER
          list = this.qnaSItemList;
        }else{
          // gubn : PARENT
          list = this.qnaIItemList;
        }
      }
      return list;
    }
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters('Counsel',['reqData']),
  },
  created() {
    const title = "상담요청(상담요청2페이지)";
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
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
</style>
