<template>
  <!-- Wrap START -->
  <div class="CounselDetailView">
    <!-- section1 -->
    <div>
      <div class="lighten-5 pa-0 ma-0" style="background-color: #333333dd">
        <v-row no-gutters class="px-4 pt-4">
          <v-col class="text-left">
            <v-chip color="yellow" outlined>답변완료</v-chip>
          </v-col>
          <v-col class="text-right">
            <v-chip color="white" outlined>예비교사</v-chip>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width: 100%">
          <v-col class="py-0 px-3">
            <v-container class="px-9">
              <v-row no-gutters>
                <v-col
                  class="py-3 text-h7"
                  style="color: #039be5; font-weight: bolder"
                >
                  #고민 #상담 #고민상담 #만3세지도
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="pa-2 white--text">
                  만 3세 부종교사입니다.<br /><br />
                  저희반에 혼나도 혼나는 상황인지 인지를 못하는 유아가 있어요.
                  반일반때는 그래도 집중해서 활동에 참여하는편인데 종일반 때는
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </div>
      <div class="ma-0 pa-0">
        <v-row no-gutters class="pa-3" style="background-color: #000000cc">
          <v-col class="text-left white--text"> 2022.05.24 23:34 </v-col>
          <v-col class="text-right white--text">
            답변(2) 포인트(답변10/채택100)
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="answer">
      <div class="answer-list">
        <p>답변, <span class="answer-total">4</span>건이 있습니다.</p>
        <v-btn rounded class="purple darken-1 btn-answer">답변하기</v-btn>
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

export default {
  name: "CounselDetailView",
  data() {
    return {
      expand: false,
    };
  },
  methods: {
    ...mapActions(["logout"]),
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
  },
};
</script>

<style lang="scss" scoped>
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
      line-height: 20px;
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
