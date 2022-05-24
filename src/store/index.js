import Vue from 'vue'
import Vuex from 'vuex'
import { Counter } from "@/store/modules/Counter";
import { ModuleA } from "@/store/modules/ModuleA";

Vue.use(Vuex)

export default new Vuex.Store({
  Counter, ModuleA
})
