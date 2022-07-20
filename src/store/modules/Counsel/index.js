import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    addedTagData : null,
    interestOrgName : null,
    interestZone : null,
    qnaItemName: null,
    txt:null,
    shortOpenYn:'N',
  }
}

export const Counsel = {
  namespaced: true,
  state: {
    reqData: REQ_DATA()
  },
  mutations: {
    setReq(state, {interestOrgName, interestZone, addedTagData}){
      console.log('#mutaion.setReq : ', interestOrgName, interestZone, addedTagData);
      const reqData = state.reqData;
      reqData['interestOrgName'] = interestOrgName;
      reqData['interestZone'] = interestZone;
      reqData['addedTagData'] = addedTagData;
      state.reqData = reqData;
    },
    //TODO!!!!
    //TODO!!!!
    //TODO!!!!
    //TODO!!!!
    //TODO!!!!
    //TODO!!!!
    //setReq2(...)
    clearReq(state){
      state.reqData = REQ_DATA();
    }
  },
  actions: {
    setReq({commit}, {interestOrgName, interestZone, addedTagData}){
      console.log('#actions.setReq : ', interestOrgName, interestZone, addedTagData);
      commit("setReq", {interestOrgName, interestZone, addedTagData});
    },
    clearReq({commit}){
      console.log('clearReq');
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
