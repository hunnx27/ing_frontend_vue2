<template>
  <!-- Wrap START -->
  <div class="CounselCommentWrite page-wrap" style="padding-top: 10px;">
    <div class="step-title">
      <v-btn :color="!isShowAnswer?'red':'grey'" outlined tile class="btn-rect" @click="toggleAnswer">원문보기</v-btn>
    </div>

    <div class="comment-wrap">
      <div class="answer-list" :class="{hide:!isShowAnswer}">
        <ul>
          <li>
            <span>[질문]</span>
            <div class="ellipsis">
              난 이런게 궁금했어요 항상난 이런게 궁금했어요 항상난 이런게
              궁금했어요 항상난 이런게 궁금했어요 항상난 이런게 궁금했어요 항상
            </div>
          </li>
          <li>
            <span>[답변]</span>
            <div class="ellipsis">testsdsresrsrrsrr</div>
          </li>
        </ul>
      </div>
      <!-- Comment Box Wrap START -->
      <div class="comment-box-wrap" ref="commentBoxWrap">
        
      <div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END --><div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END --><div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END --><div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END --><div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END --><div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END --><div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END --><div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END -->
        <div class="comment-box">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">유아교사</span
              ><span class="info-box blue">답변자</span
              ><span class="info-box black">0분전</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1">삭제</v-btn>
            </div>
          </div>
          <div class="comment">
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
            qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
          </div>
        </div>
        <!-- Comment Box END -->
      </diV>
      <!-- Comment Box Wrap END -->
    </div>
    <!-- Comment Wrap END -->
    <div class="coment-input">
      <div class="input-wrap">
      <!-- <input type="text" value="" name="" id=""> -->
      <textarea name="" id="" cols="0" rows="0"></textarea>
      </div>
      <button type="button" @click="scrollToElement">등록</button>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "CounselCommentWrite",
  data() {
    return {
      btnActiveColor: 'red',
      isShowAnswer: false,
    };
  },
  methods: {
    ...mapActions(["logout"]),
    scrollToElement() {
      const cont = this.$refs.commentBoxWrap;
      // let scrollHeight =  cont.scrollHeight;
      // window.scrollTo(0, scrollHeight);
      const elArr = cont.children;
      const el = elArr!=null? elArr[elArr.length-1] : null;
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    toggleAnswer(){
      this.isShowAnswer=!this.isShowAnswer;
      setTimeout(()=>{this.scrollToElement();}, 0);
    }
    
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.scrollToElement();
  },
  created() {
    const title = "댓글";
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
.page-txt {
  padding-bottom: 20px;
  border-bottom: 1px solid #a1a1a1;
  text-align: center;
}
.step-title {
  display: flex;
  position: relative;
  font-size: 20px;
  font-weight: 600;

  .btn-rect {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    /* padding: 0 15px; */
    /* height: 30px; */
    font-size: 14px;
    /* line-height: 30px;*/

    &.on {
      background: #fca32d;
      color: #fff;
    }
  }
}
.comment-wrap {
    position: fixed;
    bottom: 88px;
    left: 15px;
    overflow-y: auto;
    width: calc(100% - 30px);
    height: calc(100% - 198px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  
  .answer-list.hide{
    visibility: hidden;
    height: 0px;
    padding: 0;
    margin: 0;
  }
  .answer-list {
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    ul {
      padding: 0;
      li:first-child{
        margin-top:0
      }
      li {
        display: block;
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #d4d7dc;

        span {
          font-weight: 600;
        }
        .ellipsis {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      li:nth-child(odd) {
        background: #edf8fe;
      }
      li:nth-child(even) {
        background: #fff;
      }
    }
  }
  .comment-box-wrap{
    display: flex;
    justify-content: flex-end;
    // height: 100%;
    width: 100%;
    overflow-x: hidden;
    flex-flow: row wrap;
    .comment-box {
      // position: absolute;
      width: 100%;
      // bottom: 15px;
      // left: 15px;
      padding: 10px;
      border: 3px solid #b2d2e7;
      background: #fff;
      flex-direction: column;
      .comment-info {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #d6d6d6;

        .info-detaile {
          .info-box {
            margin-right: 5px;
            padding: 0 10px;
            color: #fff;
            font-size: 15px;
            &.skyblue {
              background: #1cbabb;
            }
          }
        }
      }
      .comment {
        font-size: 16px;
        word-break: break-all;
      }
    }
  }
}

.coment-input {
  position:fixed;bottom:0;left:0;
  width:100%;background:#fff;
  .input-wrap {
    border: 1px solid #a1a1a1;
    padding: 15px 50px 15px 10px;
    height: 78px;
    input {width:100%;border:1px solid #a1a1a1;}
    textarea {width: 100%;height: 46px;margin: 0;padding: 0;}
  }
  button {
    position: absolute;
    right: 12px;
    top: 10px;
    width: 105px;
    height: 57px;
    line-height: 57px;
    background: #999;
    color: #fff;
    text-align: center;
  }

}
</style>
