import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    addedTagData : null,
    interestOrgName : null,
    interestZone : null,
    qnaItem: null,
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
    setReq2(state, {qnaItem,txt,shortOpenYn}){
      console.log('#mutaion.setReq2 : ', qnaItem,txt,shortOpenYn);
      const reqData = state.reqData;
      reqData['qnaItem'] = qnaItem;
      reqData['txt'] = txt;
      reqData['shortOpenYn'] = shortOpenYn;
      state.reqData = reqData;
    },
    clearReq(state){
      state.reqData = REQ_DATA();
    }
  },
  actions: {
    setReq({commit}, {interestOrgName, interestZone, addedTagData}){
      console.log('#actions.setReq : ', interestOrgName, interestZone, addedTagData);
      commit("setReq", {interestOrgName, interestZone, addedTagData});
    },
    setReq2({commit}, {qnaItem,txt,shortOpenYn}){
      console.log('#actions.setReq2 : ', qnaItem,txt,shortOpenYn);
      commit("setReq2", {qnaItem,txt,shortOpenYn});
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
