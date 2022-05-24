import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Counter } from "@/store/modules/Counter";
import { ModuleA } from "@/store/modules/ModuleA";
import { Account } from '@/store/modules/Account'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: [ createPersistedState({ storage: window.sessionStorage })],
  modules: [Counter, ModuleA, Account],
  strict: debug

})
