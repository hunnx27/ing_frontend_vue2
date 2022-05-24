<template>
  <v-container fluid>
    <h3>함께 만드는 유아교사 필수앱</h3>
    <h1>원앤집</h1>
    <input type="text" name="" id="" placeholder="이메일 주소"><br/>
    <input type="text" name="" id="" placeholder="비밀번호"><br/>
    <button>LOGIN</button>
    <hr>
    <button>카카오톡</button>
    <button>페이스북</button>
    <button>구글</button>
  </v-container>
</template>

<script>
/* eslint-disable */
import CounterItem from '/src/components/moduleB/PreviewItem.vue'
export default {
  name: 'LoginItem',
  props: {
    msg: String
  },
  components:{
    CounterItem
  }
}
</script>
