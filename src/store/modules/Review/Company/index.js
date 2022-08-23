import router from '@/router'

const REQ_DATA = () => {
  return {
    //Req1
    interestCompanyName:null,
    workExp:null,
    workExpOpenYn:null,
    //setCompany
    companyId:null,
    //Req2
    txt:null,
    likeCode:null,
    //Req3
    itemB1:null,
    itemB2:null,
    itemB3:null,
    itemC1:null,
    itemC2:null,
    itemC3:null,
    itemD1:null,
    itemD2:null,
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
    setCompany(state, {companyId}){
      console.log('#mutaion.setCompany : ', companyId);
      const reqData = state.reqData;
      reqData['companyId'] = companyId;
      state.reqData = reqData;
    },
    setReq2(state, {txt, likeCode}){
      console.log('#mutaion.setReq2 : ', txt, likeCode);
      const reqData = state.reqData;
      reqData['txt'] = txt;
      reqData['likeCode'] = likeCode;
      state.reqData = reqData;
    },
    setReq3(state, {itemB1, itemB2, itemB3, itemC1, itemC2, itemC3, itemD1, itemD2}){
      const reqData = state.reqData;
      reqData['itemB1'] = itemB1;
      reqData['itemB2'] = itemB2;
      reqData['itemB3'] = itemB3;
      reqData['itemC1'] = itemC1;
      reqData['itemC2'] = itemC2;
      reqData['itemC3'] = itemC3;
      reqData['itemD1'] = itemD1;
      reqData['itemD2'] = itemD2;
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
    setReq2({commit}, {txt, likeCode}){
      
      console.log('#actions.setReq2 : ', txt, likeCode);
      commit("setReq2", {txt, likeCode});
    },
    setReq3({commit}, {itemB1, itemB2, itemB3, itemC1, itemC2, itemC3, itemD1, itemD2}){
      console.log('#actions.setReq3 : ', itemB1, itemB2, itemB3, itemC1, itemC2, itemC3, itemD1, itemD2);
      commit("setReq3", {itemB1, itemB2, itemB3, itemC1, itemC2, itemC3, itemD1, itemD2});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
