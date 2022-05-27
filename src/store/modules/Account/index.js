import accountApi from '@/api/account'
import router from '@/router'
export const Account = {
  state: {
    user: null,
    token: null
  },
  getters: {
    user: state => state.user,
    token: state => state.token
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
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    testToken(state){
      alert('TOKEN : ' + state.token);
    }
  }
}
