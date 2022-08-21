import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Counter } from "@/store/modules/Counter";
import { ModuleA } from "@/store/modules/ModuleA";
import { Account } from '@/store/modules/Account'
import { Counsel } from '@/store/modules/Counsel'
import { CompanyReview } from '@/store/modules/Review/Company'
import { InterviewReview } from '@/store/modules/Review/Interview'
import { YearamtReview } from '@/store/modules/Review/Yearamt'
import { CompanySearch } from '@/store/modules/Common/CompanySearch'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: [ createPersistedState({ storage: window.sessionStorage })],
  modules: {Counter, ModuleA, Account, Counsel, CompanyReview, InterviewReview, YearamtReview,CompanySearch},
  strict: debug

})
