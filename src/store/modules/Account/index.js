import accountApi from '@/api/account'
import router from '@/router'
export const Account = {
  state: {
    user: null,
    token: null,
    signupData: null
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
      const signupData = {};
      signupData['socialId'] = userId;
      signupData['snsTypeCode'] = snsTypeCode;
      state.signupData = signupData;
    },
    clearSignup(state){
      state.signupData = null;
    }

    
  },
  actions: {
    fetchUser ({state, commit}, callback) {
      state.user
        ? callback && callback()
        : accountApi.getUser(
          res => {
            commit('setUser', res.user)
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
