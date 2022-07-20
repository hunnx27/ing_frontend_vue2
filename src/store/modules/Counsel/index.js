import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    param1 : null,
    param2 : null,
  }
}

export const Counsel = {
  state: {
    counselData: REQ_DATA()
  },
  mutations: {
    setReq(state, {param1, param2}){
      console.log('#mutaion.setReq : ', param1, param2);
      const counselData = state.counselData;
      counselData['param1'] = param1;
      counselData['param2'] = param2;
      state.counselData = counselData;
    },
    clearReq(state){
      state.counselData = REQ_DATA();
    }
  },
  actions: {
    setReq({commit}, {param1, param2}){
      console.log('#actions.setReq : ', param1, param2);
      commit("setReq", {param1, param2});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    counselData : state => state.counselData
  },
}
