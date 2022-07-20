import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    param1 : null,
    param2 : null,
  }
}

export const Account = {
  state: {
    reqData: REQ_DATA()
  },
  mutations: {
    setReq(state, {param1, param2}){
      console.log('#mutaion.setReq : ', param1, param2);
      const reqData = state.reqData;
      reqData['param1'] = param1;
      reqData['param2'] = param2;
      state.reqData = reqData;
    },
    clearReq(state){
      state.reqData = REQ_DATA();
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
    reqData : state => state.reqData
  },
}
