import router from '@/router'

const REQ_DATA = () => {
  return {
    //Req1
    interestCompanyName:null,
    workExp:null,
    workExpOpenYn:null,
    companyId:null,
    companyName:null,
    //Req2
    txt:null,
    likeCode:null,
    //Req3
  }
}

export const CompanyReview = {
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
    setCompany(state, {companyId, companyName}){
      console.log('#mutaion.setCompany : ', companyId, companyName);
      const reqData = state.reqData;
      reqData['companyId'] = companyId;
      reqData['companyName'] = companyName;
      state.reqData = reqData;
    },
    setReq2(state, {txt, likeCode}){
      console.log('#mutaion.setReq2 : ', txt, likeCode);
      const reqData = state.reqData;
      reqData['txt'] = txt;
      reqData['likeCode'] = likeCode;
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
    setCompany({commit}, {companyId, companyName}){
      console.log('#actions.setCompany : ', companyId, companyName);
      commit("setCompany", {companyId, companyName});
    },
    setReq2({commit}, {txt, likeCode}){
      
      console.log('#actions.setReq2 : ', txt, likeCode);
      commit("setReq2", {txt, likeCode});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
