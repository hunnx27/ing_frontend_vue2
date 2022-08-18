import router from '@/router'

const REQ_DATA = () => {
  return {
    interestCompanyName:null,
    workExp:null,
    workExpOpenYn:null,
    zone:null,
    companyId:null,
    companyName:null,
  }
}

export const YearamtReview = {
  namespaced: true,
  state: {
    reqData: REQ_DATA()
  },
  mutations: {
    setReq1(state, {interestCompanyName, workExp, workExpOpenYn, zone}){
      console.log('#mutaion.setReq : ', interestCompanyName, workExp, workExpOpenYn);
      const reqData = state.reqData;
      reqData['interestCompanyName'] = interestCompanyName;
      reqData['workExp'] = workExp;
      reqData['workExpOpenYn'] = workExpOpenYn;
      reqData['zone'] = zone;
      state.reqData = reqData;
    },
    setCompany(state, {companyId, companyName}){
      console.log('#mutaion.setCompany : ', companyId, companyName);
      const reqData = state.reqData;
      reqData['companyId'] = companyId;
      reqData['companyName'] = companyName;
      state.reqData = reqData;
    },
    clearReq(state){
      state.reqData = REQ_DATA();
    }
  },
  actions: {
    setReq1({commit}, {interestCompanyName, workExp, workExpOpenYn, zone}){
      console.log('#actions.setReq : ', interestCompanyName, workExp, workExpOpenYn, zone);
      commit("setReq1", {interestCompanyName, workExp, workExpOpenYn, zone});
    },
    setCompany({commit}, {companyId, companyName}){
      console.log('#actions.setCompany : ', companyId, companyName);
      commit("setCompany", {companyId, companyName});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
