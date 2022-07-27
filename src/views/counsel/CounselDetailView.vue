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
            <v-container class="px-9">
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
            </v-container>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width: 100%;position:relative">
          <v-col class="pa-0 ma-0">
            <v-container class="pa-0 ma-0">
              <v-row no-gutters>
                <v-col
                  class="white--text"
                  style="text-align:right;"
                >
                  <span style="cursor:pointer;padding:5px 20px" @click="updateCounsel">수정</span>
                </v-col>
              </v-row>
              <v-row no-gutters class="pa-5 ma-0">
                <v-col class=" white--text">
                  기관 - 전체 | 지역 - {{findZoneName}}
                </v-col>
              </v-row>
            </v-container>
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
    <v-btn @click="test">TEST</v-btn>


    <div class="answer">
      <div class="answer-list">
        <p v-if="item.reportCnt">답변, <span class="answer-total">{{item.reportCnt}}</span>건이 있습니다.</p>
        <p v-else>답변이 필요합니다.</p>
        <v-btn v-if="!item.isMine" rounded class="purple darken-1 btn-answer">답변하기</v-btn>
      </div>
      <ul>
        <li>
          <span class="answer-label">내답변</span>
          <div class="user-adopt">
            <div class="user">유아교사</div>
            <div class="adopt">
              채택 답변수<span class="answer-total">0</span>건
            </div>
          </div>
          <div class="modify">
            <span class="ago"><span class="time">0</span>분전</span>
            <v-btn
              rounded
              v-bind:key="expand"
              @click="expand = !expand"
              class="purple-text darken-1"
              >수정</v-btn
            >
          </div>

          <div v-show="expand" class="reply-comment">
            <p>test</p>
            <div class="comment">
              <div>
                <span class="reply-num reply-num--on">댓글 (0)</span>
                <span class="vote-num vote-num--on">추천 (0)</span>
              </div>
              <v-btn class="purple-text darken-1 report-reply">신고</v-btn>
            </div>
          </div>
        </li>

        <li>
          <span class="answer-label">내답변</span>
          <div class="user-adopt">
            <div class="user">유아교사</div>
            <div class="adopt">
              채택 답변수<span class="answer-total">0</span>건
            </div>
          </div>
          <div class="modify">
            <span class="ago"><span class="time">0</span>분전</span>
            <v-btn rounded class="purple-text darken-1">수정</v-btn>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";
import counselApi from "@/api/counsel";
import LoadingItem from "@/components/common/LoadingItem.vue"

export default {

  name: "CounselDetailView",
  components:{LoadingItem},
  data() {
    return {
      expand: false,
      id: -1,
      item: {},
      findZoneName: '선택안함'
    };
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapActions('Counsel',['setReqAll', 'clearReq']),
    getCounselInfo(){
      this.clearReq();
      counselApi.getCounselInfo(this.id,
        (body)=>{
          console.log('body');
          if(body==null) 
            return;

          this.item = body!=null? body : {};
          const addedTagData = [];
          if(body.addedTagData!=null){
            const inputTagArr = body.addedTagData.split(" ");
            inputTagArr.forEach(inputTag => {
              const tags = inputTag.split("#");
                if(tags.length>1){
                    addedTagData.push(tags[1]);
                }
            })
          }
          const id = body.id;
          const interestOrgName = body.interestOrgName;
          const relatedZone = body.relatedZone;
          const qnaItem = body.qnaItem;
          const txt = body.txt;
          const shortOpenYn = body.shortOpenYn;
          this.setReqAll({id, addedTagData,interestOrgName,relatedZone,qnaItem,txt,shortOpenYn});
          this.getFindAddressSido(relatedZone);
        },
        (err)=>{
          console.log(err);
        })
    },
    test(){
      const param = {
        id:3
      }
      counselApi.getCounselAnswerAll(param,
        (body)=>{
          console.log(body);
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
        const findZone = body.find((sido) =>{
          const findCode = relatedZone!=null && relatedZone!='' ? relatedZone.substr(0, 2) : null;
          return sido.sidoCode == findCode;
        })
        this.findZoneName = findZone!=null? findZone.sidoName : '선택안함';
      });
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

    .answer-label {
      position: absolute;
      left: 10px;
      top: -27px;
      padding: 5px;
      line-height: 25px;
      background: #6200ea;
      color: #fff;
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
