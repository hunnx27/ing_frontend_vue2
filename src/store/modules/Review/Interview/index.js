import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    interestCompanyName:null,
    workExp:null,
    workExpOpenYn:null,
    zone:null,
    companyId:null,
  }
}

export const InterviewReview = {
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
    setCompanyId(state, {companyId}){
      console.log('#mutaion.setCompanyId : ', companyId);
      const reqData = state.reqData;
      reqData['companyId'] = companyId;
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
    setCompanyId({commit}, {companyId}){
      console.log('#actions.setCompanyId : ', companyId);
      commit("setCompanyId", {companyId});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
