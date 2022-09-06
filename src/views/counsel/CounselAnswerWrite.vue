<template>
  <!-- Wrap START -->
  <div>
    <div class="" style="background-color:#dedede;padding: 15px 15px 15px" v-show="isShowCounselTxt">
      <div style="display: flex;">
        <span style="padding-right: 7px;font-weight:bolder">Q.</span>
        <span style="width:100%" v-html="counselTxt.replaceAll('\n','<br/>')"></span>
      </div>
    </div>
    <div class="CounselAnswerWrite page-wrap" style="padding-top:10px">
      <div style="height:20px" v-show="!isShowCounselTxt"></div>
      <div class="step-title">
        답변
        <span class="btn-text on" @click="isShowCounselTxt=!isShowCounselTxt;">상담글보기</span>
      </div>
      <div class="column">
        <textarea v-model="txt" name="" id="" cols="0" rows="0"></textarea>
      </div>

      <div class="step-title">사진첨부(최대5장) 선택사항</div>
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
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import counselApi from "@/api/counsel";

export default {
  name: "CounselAnswerWrite",
  data() {
    return {
      counselId: -1,
      counselTxt: '',
      isShowCounselTxt: false,
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],

      txt: '',
      image: null,
    };
  },
  methods: {
    doCheck() {
      this.submit();
    },
    submit: function(){
      let form = new FormData()
      // Image File Setting
      if(this.image){
        for(let i=0; i<this.image.length; i++){
          const file = this.image[i];
          form.append(`files[${i}]`, file);
        }
      }
      form.append("txt", this.txt);
      form.append("parentCounselId", this.counselId);
      counselApi.saveAnswer(
        form,
        (body) => {
          console.log("succss.body : ", body);
          alert('상담이 저장되었습니다.');
          this.$router.push(`/counsel/counselDetail/${this.counselId}`);
        },
        (err) =>{
          console.log(err);
          alert('상담 등록 시스템 오류가 있습니다.');
        }
      );
    },
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters('Counsel',['reqData']),
  },
  created() {
    const title = "수정/답변하기";
    const options = {
      isShowCheckBtn: true,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);

    if(this.reqData!=null){
      this.counselId = this.reqData.id;
      this.counselTxt = this.reqData.txt;
    }
  },
};
</script>

<style lang="scss" scoped>
.page-txt {
  padding-bottom: 20px;
  border-bottom: 1px solid #a1a1a1;
  text-align: center;
}
.step-title {
  position: relative;
  font-size: 20px;
  font-weight: 600;

  .btn-text {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    padding: 0 10px;
    height: 25px;
    font-size: 15px;
    line-height: 25px;
    border-radius: 20px;
    background: #aeaeae;
    color: #fff;

    &.on {
      background: #fca32d;
    }
  }
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
}
</style>
