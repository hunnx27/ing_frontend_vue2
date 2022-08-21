import router from '@/router'

const REQ_DATA = () => {
  return {
    //Req
    companyId:null,
    companyName:null,
    sigugunName:null,
    establishmentTypeName:null,
  }
}

export const CompanySearch = {
  namespaced: true,
  state: {
    reqData: REQ_DATA()
  },
  mutations: {
    setReq(state, {companyId, companyName, sigugunName, establishmentTypeName}){
      console.log('#mutaion.setReq : ', companyId, companyName, sigugunName, establishmentTypeName);
      const reqData = state.reqData;
      reqData['companyId'] = companyId;
      reqData['companyName'] = companyName;
      reqData['sigugunName'] = sigugunName;
      reqData['establishmentTypeName'] = establishmentTypeName;
      state.reqData = reqData;
    },
    clearReq(state){
      state.reqData = REQ_DATA();
    }
  },
  actions: {
    setReq({commit}, {companyId, companyName, sigugunName, establishmentTypeName}){
      console.log('#actions.setReq : ', companyId, companyName, sigugunName, establishmentTypeName);
      commit("setReq", {companyId, companyName, sigugunName, establishmentTypeName});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
