<template>
  <!-- Wrap START -->
  <div class="CounselComentWrite page-wrap">
    <div class="step-title">
      <span class="btn-rect">원문보기</span>
    </div>

    <div class="answer-list">
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

    <div class="coment-box">
      <div class="coment-info">
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
      <div class="coment">
        qmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqmffkqm
      </div>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import accountApi from "@/api/account";

export default {
  name: "CounselCommentlWrite",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
  },
  computed: {
    ...mapGetters(["user"]),
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
    padding: 0 15px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    border: 1px solid #000;

    &.on {
      background: #fca32d;
      color: #fff;
    }
  }
}
.answer-list {
  ul {
    padding: 0;

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
.coment-box {
  position: fixed;
  width: calc(100% - 30px);
  bottom: 15px;
  left: 15px;
  padding: 10px;
  border: 3px solid #b2d2e7;
  background: #fff;
  .coment-info {
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
  .coment {
    font-size: 16px;
    word-break: break-all;
  }
}
</style>
