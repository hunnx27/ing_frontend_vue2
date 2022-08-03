import router from '@/router'

const REQ_DATA = () => {
  return {
    id: -1,
    addedTagData : null,
    interestCompanyName : null,
    relatedZone : null,
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
    setReq(state, {interestCompanyName, relatedZone, addedTagData}){
      console.log('#mutaion.setReq : ', interestCompanyName, relatedZone, addedTagData);
      const reqData = state.reqData;
      reqData['interestCompanyName'] = interestCompanyName;
      reqData['relatedZone'] = relatedZone;
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
    setReqAll(state, {
      id,addedTagData,interestCompanyName,relatedZone,qnaItem,txt,shortOpenYn
    }){
      console.log('#mutaion.setReqAll : ', id,addedTagData,interestCompanyName,relatedZone,qnaItem,txt,shortOpenYn);
      const reqData = state.reqData;
      reqData['id'] = id;
      reqData['interestCompanyName'] = interestCompanyName;
      reqData['relatedZone'] = relatedZone;
      reqData['addedTagData'] = addedTagData;
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
    setReq({commit}, {interestCompanyName, relatedZone, addedTagData}){
      console.log('#actions.setReq : ', interestCompanyName, relatedZone, addedTagData);
      commit("setReq", {interestCompanyName, relatedZone, addedTagData});
    },
    setReq2({commit}, {qnaItem,txt,shortOpenYn}){
      console.log('#actions.setReq2 : ', qnaItem,txt,shortOpenYn);
      commit("setReq2", {qnaItem,txt,shortOpenYn});
    },
    setReqAll({commit}, 
      {id, addedTagData,interestCompanyName,relatedZone,qnaItem,txt,shortOpenYn}
    ){
      console.log('#actions.setReqAll : ', id,addedTagData,interestCompanyName,relatedZone,qnaItem,txt,shortOpenYn);
      commit("setReqAll", {id,addedTagData,interestCompanyName,relatedZone,qnaItem,txt,shortOpenYn});
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
