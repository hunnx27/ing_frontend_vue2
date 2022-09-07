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
      <div class="comment-box-wrap" ref="commentBoxWrap" v-show="!isLoading">
        <!-- Comment Box START -->
        <div class="comment-box" v-for="item in commentList" :key="item.id">
          <div class="comment-info">
            <div class="info-detaile">
              <span class="info-box skyblue">{{item.gubnName}}</span
              ><span class="info-box" :class="item.isCounselWriter?'purple':item.isAnswerWriter?'blue':null" v-show="item.isCounselWriter || item.isAnswerWriter">{{item.writerName}}</span
              ><span class="info-box black">{{item.time}}</span>
            </div>
            <div class="btn-box">
              <v-btn
                elevation="1"
                x-small
                class="purple-text darken-1"
                style="margin-right: 5px"
                v-if="item.isMine==true"
                @click="dialog=true;selectedCommentId=item.id;selectedCommentTxt=item.txt"
                >수정</v-btn
              >
              <v-btn elevation="1" x-small class="purple-text darken-1" @click="deleteComment(item.id)" v-if="item.isMine==true">삭제</v-btn>
            </div>
          </div>
          <div class="comment" v-html="item.txt.replaceAll('\n','<br/>')">
          </div>
        </div>
        <!-- Comment Box END -->
      </diV>
      <LoadingItem isLoading="true" v-show="isLoading"></LoadingItem>
      <!-- Comment Box Wrap END -->
    </div>
    <!-- Comment Wrap END -->
    <div class="coment-input">
      <div class="input-wrap">
      <!-- <input type="text" value="" name="" id=""> -->
      <textarea v-model="txt"></textarea>
      </div>
      <button type="button" @click="submitComment">등록</button>
    </div>

    <TextareaNoTitleDialogItem
      v-model="dialog"
      :content="selectedCommentTxt"
      :key="selectedCommentId"
      placeholder="내용을 입력하세요."
      @ok="updateComment($event)"
      @cancel=";"
      v-if="dialog"
    >
    </TextareaNoTitleDialogItem>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import counselApi from "@/api/counsel";
import LoadingItem from "@/components/common/LoadingItem.vue"
import TextareaNoTitleDialogItem from "@/components/common/dialog/TextareaNoTitleDialogItem.vue"

export default {
  name: "CounselCommentWrite",
  components:{LoadingItem, TextareaNoTitleDialogItem},
  data() {
    return {
      txt: null,
      parentCounselId: -1,
      btnActiveColor: 'red',
      isShowAnswer: false,
      commentList: [],
      dialog: false,
      isLoading: false,
      selectedCommentId: -1,
      selectedCommentTxt: null,      
    };
  },
  methods: {
    ...mapActions(["logout"]),
    // ...mapActions('Counsel',['saveComment','getCommentByAnswerId']),
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
    },
    submitComment(){
      this.isLoading = true;
      let form = new FormData()
      form.append("txt", this.txt);
      form.append("parentCounselId", this.parentCounselId);
      counselApi.saveComment(form, 
        (body) => {
          console.log("succss.body : ", body);
          this.txt = null;
          this.getCommentList();
        },
        (err) =>{
          console.log(err);
          alert('댓글 등록 시스템 오류가 있습니다.');
          this.isLoading = false;
        }
      );
    },
    getCommentList(){
      this.isLoading = true;
      counselApi.getCommentByAnswerId(this.parentCounselId,
        (body) => {
          this.commentList = body.data;
          this.isLoading = false;
          setTimeout(()=>{this.scrollToElement();}, 0);
        },
        (err) =>{
          console.log(err);
          this.isLoading = false;
          setTimeout(()=>{this.scrollToElement();}, 0);
        });
    },
    deleteComment(id){
      const isConfirm = confirm("댓글을 삭제하시겠습니까?");
      if(!isConfirm){
        return;
      }
      
      counselApi.deleteComment(id,
        (body) => {
          console.log("succss.body : ", body);
          this.getCommentList();
        },
        (err) =>{
          console.log(err);
          alert('댓글 등록 시스템 오류가 있습니다.');
          this.isLoading = false;
        })

    },
    updateComment(e){
      const txt = e;
      const id = this.selectedCommentId;
      this.isLoading = true;
      let form = new FormData()
      form.append("txt", txt);
      counselApi.updateComment(id,form, 
        (body) => {
          console.log("succss.body : ", body);
          this.txt = null;
          this.getCommentList();
        },
        (err) =>{
          console.log(err);
          alert('댓글 등록 시스템 오류가 있습니다.');
          this.isLoading = false;
        }
      );
    },
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters('Counsel',['reqData']),
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
      isShowStarBtn: false,
      isShowChartBoxBtn: false,
    };
    this.$emit("setLayout", title, options);

    this.parentCounselId = this.$route.params.id;
    this.getCommentList();
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
