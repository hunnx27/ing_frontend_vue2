<template>
  <div>
    <h1>This is an ModuleA Component</h1>
    {{ counter }}
    <v-btn @click="inc">inc</v-btn><br/>
    <v-btn @click="axios">axios</v-btn>
  </div>
</template>
<script>
/* eslint-disable */
import store from '@/store/index'
import handler from '@/api/res-handler'
import axios from 'axios'

export default {
  data(){
    return {
      counter: 1,
    }
  },
  methods:{
    inc(){
      this.counter++;
    },
    appendAuth(config) {
      const token = store.getters.token
      if (token) {
        if (!config) config = { headers: {} }
        if (!config.headers) config.headers = {}
        config.headers.Authorization = `Bearer ${store.getters.token}`
      }
      return config
    },
    success(body) {
      debugger;
      this.setToken(body.token)
      this.id = this.password = ''
      this.isProcess = false
      this.fetchUser(() => {
        this.$emit('onCloseModal')
      })
    },
    axios(){
      debugger;
      const body = {
          name: 'hello@naver.com',
          password: 'test2',
          socialType: 'LOCAL'
        }
      const url = '/auth/login';
      const wrap = (url) => `${url}`
      const config = this.appendAuth(config);
      const handlerres = handler.handle(this.success);
       axios.post(wrap(url), body, config)
        .then(function(res){
          debugger;
          console.log('res : ', res);
          console.log('handler: ', handlerres);
          handlerres(res);
          console.log('END');
        })
        .catch((err)=>console.log(err));
    }
  }
};
</script>