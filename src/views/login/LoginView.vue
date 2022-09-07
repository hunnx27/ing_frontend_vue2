<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h3>함께 만드는 유아교사 필수앱</h3>
        <img
          src="/resources/images/logo_pink.png"
          style="width: 40px; height: 40px; vertical-align: top"
        />
        <h1 style="display: inline; line-height: 40px">원앤집</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          v-model="user.name"
          :rules="inputRules"
          label="이메일 주소"
          placeholder="Placeholder"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          type="password"
          v-model="user.password"
          :rules="inputRules"
          label="비밀번호"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-btn block color="primary" @click="login">LOGIN</v-btn>
      </v-col>

      <!-- <v-col cols="12" sm="12" md="12">
        <v-btn block color="primary" @click="membership">회원가입</v-btn>
      </v-col> -->

      <v-col cols="12" sm="12" md="12">
        <div class="caption text-center mt-6">또는 간편 로그인</div>
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" sm="12" md="12">
        <ul class="text-center" style="padding-left: 0">
          <li v-for="social in socials" v-bind:key="social.socialType" style="">
            <a :href="socialLoginUrl(social.socialType)">
              <img :src="social.src" />
            </a>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import $ from "@/util/utils";
import accountApi from "@/api/account";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "LoginItem",
  props: {
    msg: String,
  },
  components: {},
  data: () => ({
    user: {
      name: "",
      password: "",
    },
    isProcess: false,
    cannotLogin: false,
    isLoginFailed: false,
    inputRules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    socials: [
      {
        socialType: "google",
        src: $.getSocialImage("google"),
        width: "32px",
        height: "32px",
        comment: "구글 로그인",
      },
      {
        socialType: "facebook",
        src: $.getSocialImage("facebook"),
        width: "32px",
        height: "32px",
        comment: "페이스북 로그인",
      },
      {
        socialType: "naver",
        src: $.getSocialImage("naver"),
        width: "32px",
        height: "32px",
        comment: "네이버 로그인",
      },
      {
        socialType: "kakao",
        src: $.getSocialImage("kakao"),
        width: "32px",
        height: "32px",
        comment: "카카오 로그인",
      },
    ],
  }),
  methods: {
    ...mapActions(["fetchUser"]), // TODO 확인필요
    ...mapMutations(["setToken", "testToken"]), // TODO 확인필요
    login() {
      if (this.isProcess) return;
      if (this.user.name.trim() === "" || this.user.password.trim() === "") {
        this.cannotLogin = true;
        return;
      }
      accountApi.login(
        {
          name: this.user.name,
          password: this.user.password,
          socialType: "LOCAL",
        },
        (body) => {
          if (body == "error") {
            alert("계정정보가 일치하지 않습니다. 계정정보를 확인하세요.");
            return;
          }
          const token = body.data;
          this.setToken(token); // TODO 기능 확인 필요
          this.user.name = this.user.password = "";
          this.isProcess = false;
          this.fetchUser(() => {
            /*유저정보 다시 가져오기*/
            this.$router.push("/");
          }); // FIXME 구현해야함
          this.$router.push("/"); //FIXME fetchUser 내부로 옮겨야함
        },
        (err) => {
          if (err.response.data.status === 401) {
            this.isLoginFailed = true;
          }
          console.log(err);
          alert(err);
        }
      );
    },
    inputChanged() {
      if (!this.cannotLogin) return;
      if (this.user.name.trim() !== "" && this.user.password.trim() !== "") {
        this.cannotLogin = false;
      }
    },
    socialLoginUrl(socialType) {
      return $.getSocialLoginUrl(socialType);
    },
    membership() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 90px;
}
.fill-height {
  height: auto;
}

ul {
  padding: 0;
  li {
    padding: 0 0.8rem;
    img {
      width: 2.2em;
      height: 2.2em;
    }
  }
}
</style>
