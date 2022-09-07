import accountApi from '@/api/account'
import router from '@/router'

const SIGNUP_DATA = () => {
  return {
    snsTypeCode : null,
    socialId : null,
    allCheckSignup: false,
    checkSignupService: false,
    checkSignupPrivacy: false,
  }
}

export const Account = {
  namespaced: false,
  state: {
    user: null,
    token: null,
    signupData: SIGNUP_DATA()
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    setSignup(state, {userId, snsTypeCode}){
      console.log('#mutaion.setSignup : ', userId, snsTypeCode);
      const signupData = state.signupData;
      signupData['socialId'] = userId;
      signupData['snsTypeCode'] = snsTypeCode;
      state.signupData = signupData;
    },
    setSignupGubn(state, {gubn}){
      console.log('mutations : ', gubn);
      const signupData = state.signupData;
      signupData['gubnCode'] = gubn;
    },
    setAllCheckSignup(state, {allCheckSignup}){
      console.log('mutations : ', allCheckSignup);
      const signupData = state.signupData;
      signupData['allCheckSignup'] = allCheckSignup;
    },
    setCheckSignupService(state, {checkSignupService}){
      console.log('mutations : ', checkSignupService);
      const signupData = state.signupData;
      signupData['checkSignupService'] = checkSignupService;

      if(signupData['checkSignupPrivacy'] == true 
          && signupData['checkSignupService'] == true){
        signupData['allCheckSignup'] = true;
      }else{
        signupData['allCheckSignup'] = false;
      }
    },
    setCheckSignupPrivacy(state, {checkSignupPrivacy}){
      console.log('mutations : ', checkSignupPrivacy);
      const signupData = state.signupData;
      signupData['checkSignupPrivacy'] = checkSignupPrivacy;

      if(signupData['checkSignupPrivacy'] == true 
          && signupData['checkSignupService'] == true){
        signupData['allCheckSignup'] = true;
      }else{
        signupData['allCheckSignup'] = false;
      }
    },
    clearSignup(state){
      state.signupData = SIGNUP_DATA();
    }

    
  },
  actions: {
    fetchUser ({state, commit}, callback) {
      state.user
        ? callback && callback(state.user)
        : accountApi.getUser(res => {
            commit('setUser', res.data)
            callback && callback(res.data)
          }
        )
    },
    refreshUser ({state, commit}, callback) {
      accountApi.getUser(
        res => {
          commit('setUser', res.data)
          callback && callback()
        }
      )
    },
    logout({commit}){
      commit("setToken", null);
      commit("setUser", null);
      router.push("/login").catch(() => {}); 
    },
    setSignup({commit}, {userId, snsTypeCode}){
      commit("setSignup", {userId, snsTypeCode});
    },
    setSignupGubn({commit}, {gubn}){
      commit("setSignupGubn", {gubn});
    },
    setAllCheckSignup({commit}, {allCheckSignup}){
      console.log('actions : ', allCheckSignup);
      commit("setAllCheckSignup", {allCheckSignup});
    },
    setCheckSignupService({commit}, {checkSignupService}){
      console.log('actions : ', checkSignupService);
      commit("setCheckSignupService", {checkSignupService});
    },
    setCheckSignupPrivacy({commit}, {checkSignupPrivacy}){
      console.log('actions : ', checkSignupPrivacy);
      commit("setCheckSignupPrivacy", {checkSignupPrivacy});
    },
    clearSignup({commit}){
      commit("clearSignup");
    }
  },
  getters: {
    user: state => state.user,
    token: state => state.token,
    signupData : state => state.signupData
  },
}
