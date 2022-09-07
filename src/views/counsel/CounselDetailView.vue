<template>
  <!-- Wrap START -->
  <div class="CounselDetailView">
    <!-- section1 -->
    <div v-if="Object.keys(item).length>0">
      <div class="lighten-5 pa-0 ma-0 block" :style="{backgroundImage: `url('/resources/images/new_list_top.jpg')`}">
        <v-row no-gutters class="px-4 pt-4">
          <v-col class="text-left">
            <v-chip color="white" outlined v-if="item.counselStateCode=='R'">{{item.counselStateName}}</v-chip>
            <v-chip color="yellow" outlined v-else>{{item.counselStateName}}</v-chip>
          </v-col>
          <v-col class="text-right">
            <v-chip color="red" text-color="white" v-if="item.isMine">내질문</v-chip>
            <v-chip color="white" outlined v-else>{{item.gubnName}}</v-chip>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width: 100%;position:relative">
          <v-col class="py-0 px-3">
            <div class="px-9">
              <v-row no-gutters>
                <v-col
                  class="py-3 text-h7"
                  style="color: #039be5; font-weight: bolder"
                >
                  {{item.addedTagData}}
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="pa-2 white--text counsel-txt" v-html="item.txt.replaceAll('\n','<br/>')">
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width: 100%;position:relative">
          <v-col class="pa-0 ma-0">
            <div class="pa-0 ma-0">
              <v-row no-gutters>
                <v-col
                  class="white--text"
                  style="text-align:right;"
                >
                  <span style="cursor:pointer;padding:5px 20px" v-if="item.isMine==true" @click="updateCounsel">수정</span>
                </v-col>
              </v-row>
              <v-row no-gutters class="pa-5 ma-0">
                <v-col class=" white--text">
                  기관 - 전체 | 지역 - {{findZoneName}}
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        
      </div>
      <div class="ma-0 pa-0">
        <v-row no-gutters class="pa-3" style="background-color: #000000cc">
          <v-col class="text-left white--text"> {{item.createDate}} </v-col>
          <v-col class="text-right white--text">
            답변({{item.reportCnt}}) 포인트(답변10/채택100)
          </v-col>
        </v-row>
      </div>
    </div>
    <LoadingItem isLoading="true" v-else></LoadingItem>

    <div class="answer">
      <div class="answer-list">
        <p v-if="item.reportCnt">답변, <span class="answer-total">{{item.reportCnt}}</span>건이 있습니다.</p>
        <p v-else>답변이 필요합니다.</p>
        <v-btn v-if="!item.isMine" rounded class="purple darken-1 btn-answer" @click="writeAnswer">답변하기</v-btn>
      </div>
      <ul>
        <li v-for="answerItem in answerList" :key="answerItem.id">
          <div class="answer-label-wrap">
            <v-chip label color="red" text-color="white" style="margin-right:5px" v-show="answerItem.isMine==true">내답변</v-chip>
            <v-chip label color="#6200ea" text-color="white" v-show="answerItem.counselStateCode=='A'">질문자채택</v-chip>
          </div>
          <div class="user-adopt">
            <div class="user">{{answerItem.gubnName}}</div>
            <div class="adopt">
              채택 답변수<span class="answer-total">{{answerItem.stateAdoptedCnt}}</span>건
            </div>
          </div>
          <div class="modify">
            <span class="ago">{{answerItem.time}}</span>
            <v-btn
              rounded
              v-if="answerItem.isMine==true && item.counselStateCode!='A'"
              @click="updateAnswer(answerItem.id)"
              class="purple-text darken-1"
              >수정</v-btn
            >
            <span v-if="answerItem.isMine==true && item.counselStateCode=='A'">수정기간만료</span>
          </div>
          <div v-show="answerItem.counselStateCode=='A'" style="padding: 10px;border-top: 1px solid #6200ea;font-weight: bolder;display: flex;">
            <span><v-icon color="orange" style="font-size:16px">mdi-chevron-right</v-icon></span>
            <span>질문자 : {{answerItem.commentTxt}}</span>
          </div>
          <div class="reply-comment">
            <p v-html="answerItem.txt.replaceAll('\n','<br/>')"></p>
            <div class="comment">
              <div>
                <span class="reply-num reply-num--on" @click="writeComment(answerItem.id)">댓글 ({{answerItem.commentCnt}})</span>
                <span class="vote-num vote-num--on" @click="recommendAnswer(answerItem.id, answerItem.isRecommend, answerItem.isMine)">추천 ({{answerItem.recommendCnt}})</span>
              </div>
              <div>
                <v-btn class="purple-text darken-1 report-reply"  
                    v-if="item.counselStateCode!='A' && item.isMine==true" 
                    @click="dialog=true;selectedAnswerId=answerItem.id;">채택하기</v-btn>
                <v-btn class="purple-text darken-1 report-reply" @click="noticeAnswer(answerItem.id, answerItem.isNotice)">신고</v-btn>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>

    <TextareaDialogItem
      v-model="dialog"
      title="답변채택"
      msg="따뜻한 원&집을 만들어요.<br/>답변 채택 메시지를 남겨주세요."
      @ok="saveAdopt($event)"
      @cancel="cancelAdopt($event)"
    >
    </TextareaDialogItem>

  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import counselApi from "@/api/counsel";
import LoadingItem from "@/components/common/LoadingItem.vue"
import TextareaDialogItem from "@/components/common/dialog/TextareaDialogItem.vue"

export default {

  name: "CounselDetailView",
  components:{LoadingItem, TextareaDialogItem},
  data() {
    return {
      id: -1,
      item: {},
      findZoneName: '선택안함',
      answerList:[],
      dialog:false,
      selectedAnswerId:-1
    };
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions('Counsel',['setReqAll', 'clearReq']),
    getCounselInfo(){
      this.clearReq();
      counselApi.getCounselInfo(this.id,
        (body)=>{
          if(body==null) 
            return;

          this.item = body!=null? body.data : {};
          const res = body.data;
          const addedTagData = [];
          if(res.addedTagData!=null){
            const inputTagArr = res.addedTagData.split(" ");
            inputTagArr.forEach(inputTag => {
              const tags = inputTag.split("#");
                if(tags.length>1){
                    addedTagData.push(tags[1]);
                }
            })
          }
          const id = res.id;
          const interestCompanyName = res.interestCompanyName;
          const relatedZone = res.relatedZone;
          const qnaItem = res.qnaItem;
          const txt = res.txt;
          const shortOpenYn = res.shortOpenYn;
          this.setReqAll({id, addedTagData,interestCompanyName,relatedZone,qnaItem,txt,shortOpenYn});
          this.getFindAddressSido(relatedZone);
          this.getAnswerList();
        },
        (err)=>{
          console.log(err);
        })
    },
    getAnswerList(){
      const param = {
        counselId:this.id
      }
      counselApi.getAnswerAll(param,
        (body)=>{
          console.log(body);
          this.answerList = body.data;
        },
        (err)=>{
          console.log(err);
        })
    },
    goBack(){
      const URI = `/`;
      this.$router.push(URI);
    },
    updateCounsel(id){
      const URI = `/counsel/counselUpdate2`;
      this.$router.push(URI);
    },
    getFindAddressSido(relatedZone){
      accountApi.getAddressSido((body)=>{
        if(body == null) return;
        const findZone = body.data.find((sido) =>{
          const findCode = relatedZone!=null && relatedZone!='' ? relatedZone.substr(0, 2) : null;
          return sido.sidoCode == findCode;
        })
        this.findZoneName = findZone!=null? findZone.sidoName : '선택안함';
      });
    },
    writeAnswer(){
      const URI = `/counsel/counselAnswerWrite`;
      this.$router.push(URI);
    },
    updateAnswer(id){
      const URI = `/counsel/counselAnswerUpdate/${id}`;
      this.$router.push(URI);
    },
    writeComment(id){
      const URI = `/counsel/counselCommentWrite/${id}`;
      this.$router.push(URI);
    },
    recommendAnswer(answerId, isRecommend, isMine){
      
      if(isRecommend == true){
        alert('이미추천되었습니다.');
        return;
      }
      if(isMine == true){
        alert('내글은 추천할 수 없습니다.');
        return;
      }
      
      counselApi.recommendAnswer(
        answerId,
        (body)=>{
          console.log(body);
          alert('추천되었습니다.');
        },
        (err)=>{
          console.log(err);
        }
      )
    },
    noticeAnswer(answerId, isNotice){
      if(isNotice==true){
        alert('이미 신고가 되었습니다.');
        return;
      }
      const isConfirm = confirm('신고를 하시겠습니까?');
      
      if(!isConfirm){
        return
      }

      counselApi.noticeAnswer(
        answerId,
        (body)=>{
          console.log(body);
          alert("신고되었습니다.");
        },
        (err)=>{
          console.log(err);
        }
      )
    },
    saveAdopt(e){

      const answerId = this.selectedAnswerId;
      const parentCounselId = this.id;
      const commentTxt = e;
      const answerAccountId = null; //FIXME 정의필요
      counselApi.adoptAnswer(
        answerId,
        {
          answerId: answerId,
          commentTxt: commentTxt,
          parentCounselId: parentCounselId,
          answerAccountId: answerAccountId
        },
        (body)=>{
          console.log(body);
        },
        (err)=>{
          console.log(err);
        }
      )
      this.selectedAnswerId = -1;
    },
    cancelAdopt(e){
      this.selectedAnswerId = -1;
    },
    reportAnswer(id){

    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const title = "상담 상세";
    const options = {
      isShowCheckBtn: false,
      isShowNextBtn: false,
      isShowSearchBtn: false,
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    this.getCounselInfo();
  },
};
</script>

<style lang="scss" scoped>
.block{
    position:relative;
    background-size: cover;
}
.block:before{
  background-color:#33333388;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}
.v-application ul {
  padding: 0;

  li {
    display: block;
    position: relative;
    padding: 0;
    margin-top: 22px;
    border-bottom: 3px solid #e5e5e5;
    background: #fff;

    div.answer-label-wrap{
      position:absolute; 
      top:-23px; 
      margin-left:10px; 
      width:100%;

      .answer-label {
      // position: absolute;
      position: relative;
      padding: 8px;
      margin-right:5px;
      line-height: 25px;
      background: #6200ea;
      color: #fff;
    }
    }
  }
}
.answer-list {
  padding: 20px 0 20px;
  text-align: center;

  .answer-total {
    color: #6b73e0;
    font-weight: 600;
  }
}
.btn-answer {
  color: #fff;
}
.user-adopt {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border-top: 3px solid #6200ea;

  .user {
    position: relative;
    padding: 0 10px 0 0;
    margin: 0 10px 0 0;

    &::after {
      display: block;
      content: "";
      clear: both;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 1px;
      height: 30px;
      background: #e5e5e5;
    }
  }
}
.counsel-txt{
  min-height:70px;
}
.modify {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #6200ea;

  .ago {
    line-height: 36px;
  }
}
.reply-comment {
  padding: 10px;
  background: #fcf3ff;

  .comment {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .reply-num {
      display: inline-block;
      position: relative;
      margin-right: 20px;
      padding-left: 25px;

      &::before {
        display: block;
        clear: both;
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 20px;
        height: 18px;
        background: url(/public/resources/images/adv_off.png) no-repeat 0 0;
        background-size: 100%;
      }

      &--on {
        &::before {
          background: url(/public/resources/images/adv_on.png) no-repeat 0 0;
          background-size: 100%;
        }
      }
    }
    .vote-num {
      display: inline-block;
      position: relative;
      padding-left: 25px;

      &::before {
        display: block;
        clear: both;
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 20px;
        height: 18px;
        background: url(/public/resources/images/advice_icon_recommand_off.png)
          no-repeat 0 0;
        background-size: 100%;
      }

      &--on {
        &::before {
          background: url(/public/resources/images/advice_icon_recommand_on.png)
            no-repeat 0 0;
          background-size: 100%;
        }
      }
    }
  }
}
</style>
