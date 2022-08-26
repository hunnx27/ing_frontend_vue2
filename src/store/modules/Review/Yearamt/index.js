import router from '@/router'

const REQ_DATA = () => {
  return {
    interestCompanyName:null,
    workExp:null,
    workExpOpenYn:null,
    companyId:null,
    amt:null, 
    etcYn:null, 
    endYn:null, 
    etcObj:null, 
    etcTemp:null,
  }
}

export const YearamtReview = {
  namespaced: true,
  state: {
    reqData: REQ_DATA()
  },
  mutations: {
    setReq1(state, {interestCompanyName, workExp, workExpOpenYn}){
      console.log('#mutaion.setReq : ', interestCompanyName, workExp, workExpOpenYn);
      const reqData = state.reqData;
      reqData['interestCompanyName'] = interestCompanyName;
      reqData['workExp'] = workExp;
      reqData['workExpOpenYn'] = workExpOpenYn;
      state.reqData = reqData;
    },
    setCompany(state, {companyId}){
      console.log('#mutaion.setCompany : ', companyId);
      const reqData = state.reqData;
      reqData['companyId'] = companyId;
      state.reqData = reqData;
    },
    setReq2(state, {amt, etcYn, endYn, etcObj, etcTemp}){
      console.log('#mutaion.setReq2 : ', amt, etcYn, endYn, etcObj, etcTemp);
      const reqData = state.reqData;
      reqData['amt'] = amt;
      reqData['etcYn'] = etcYn;
      reqData['endYn'] = endYn;
      reqData['etcObj'] = etcObj;
      reqData['etcTemp'] = etcTemp;
      state.reqData = reqData;
    },
    clearReq(state){
      state.reqData = REQ_DATA();
    }
  },
  actions: {
    setReq1({commit}, {interestCompanyName, workExp, workExpOpenYn}){
      console.log('#actions.setReq : ', interestCompanyName, workExp, workExpOpenYn);
      commit("setReq1", {interestCompanyName, workExp, workExpOpenYn});
    },
    setCompany({commit}, {companyId}){
      console.log('#actions.setCompany : ', companyId);
      commit("setCompany", {companyId});
    },
    setReq2({commit}, {amt, etcYn, endYn, etcObj, etcTemp}){
      
      console.log('#actions.setReq2 : ', amt, etcYn, endYn, etcObj, etcTemp);
      commit("setReq2", {amt, etcYn, endYn, etcObj, etcTemp});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
