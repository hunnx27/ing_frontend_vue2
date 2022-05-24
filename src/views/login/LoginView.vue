<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h3>함께 만드는 유아교사 필수앱</h3>
        <h1>원앤집</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="12">
        <v-text-field v-model="user.name" :rules="inputRules" label="이메일 주소" placeholder="Placeholder" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="12">
        <v-text-field v-model="user.password" :rules="inputRules" label="비밀번호" outlined></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-btn block color="primary" @click="login">LOGIN</v-btn>
      </v-col>

      <v-col cols="12" sm="12" md="12">
        <div class="caption text-center mt-6">또는 간편 로그인</div>
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" sm="12" md="12" >
      <ul class="text-center" style="padding-left:0">
        <li v-for="social in socials" v-bind:key="social.socialType" style="">
          <button @click="socialLogin(social.socialType)">
            <img :src="social.src"/>
          </button>
        </li>
      </ul>
      </v-col>
    </v-row>
    <v-row>
      
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
  ul{
    padding: 0;
    li{
      padding: 0 0.8rem;
      img{
        width: 2.2em;
        height: 2.2em;
      }
    }
  }
</style>
<script>
/* eslint-disable */
import CounterItem from '/src/components/moduleB/PreviewItem.vue'
import $ from '@/util/utils'

export default {
  name: 'LoginItem',
  props: {
    msg: String
  },
  components:{
    CounterItem
  },
  data:()=>({
    user:{
      name: '',
      password: ''
    },
    inputRules:[
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    socials: [
        {
          socialType: 'google',
          src: $.getSocialImage('google'),
          width: '32px',
          height: '32px',
          comment: '구글 로그인'
        },
        {
          socialType: 'facebook',
          src: $.getSocialImage('facebook'),
          width: '32px',
          height: '32px',
          comment: '페이스북 로그인'
        },
        {
          socialType: 'naver',
          src: $.getSocialImage('naver'),
          width: '32px',
          height: '32px',
          comment: '네이버 로그인'
        },
        {
          socialType: 'kakao',
          src: $.getSocialImage('kakao'),
          width: '32px',
          height: '32px',
          comment: '카카오 로그인'
        }
      ]
  }),
  methods:{
    login(){
      alert(this.user.name);
    },
    socialLogin(src){
      alert(src)
    }
  }
}
</script>
