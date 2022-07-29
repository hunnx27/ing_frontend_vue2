

<template>
  
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <div class="layerpopup--tag">
          <div class="pop-title">{{title}}</div>
          <div class="pop-body" style="text-align:center" v-html="msg">
          </div>
          <div class="column">
            <textarea v-model="content"></textarea>
          </div>
        </div>
        <v-card-actions>
          <v-btn class="button" color="primary" text @click.stop="cancel();dialog = false">취소</v-btn>
          <v-btn class="button" color="primary" text @click.stop="ok();dialog = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
</template>

<script>
export default {
  name: "TextareaDialogItem",
  components: {},
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    title:{
      type: String,
      required: true,
    },
    msg:{
      type: String,
      required: true,
    }
  },
  data() {
    return {
      content:null
    };
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    ok(){
      this.$emit("ok", this.content);
      this.content = null;
    },
    cancel(){
      this.$emit("cancel", this.content);
      this.content = null;
    }
  },
  created: function () {
  },
};
</script>

<style lang="scss" scoped>
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

.v-dialog {
  .column{
    display:flex;
    textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      margin: 10px;
      background: #fff;
      box-sizing: border-box;
      border: 1px solid #d8d8d8;
    }
  }
}
</style>
