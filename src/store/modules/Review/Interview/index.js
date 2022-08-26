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
    item1Yn:null,
    item1:null,
    item2:null,
    item3:null,
    item4:null,
    item5:null,
    qlist:null,
  }
}

export const InterviewReview = {
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
    setReq2(state, {item1Yn, item1, item2, item3, item4, item5, qlist}){
      console.log('#mutaion.setReq2 : ', item1Yn, item1, item2, item3, item4, item5, qlist);
      const reqData = state.reqData;
      reqData['item1Yn'] = item1Yn;
      reqData['item1'] = item1;
      reqData['item2'] = item2;
      reqData['item3'] = item3;
      reqData['item4'] = item4;
      reqData['item5'] = item5;
      reqData['qlist'] = qlist;
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
    setReq2({commit}, {item1Yn, item1, item2, item3, item4, item5, qlist}){
      
      console.log('#actions.setReq2 : ', item1Yn, item1, item2, item3, item4, item5, qlist);
      commit("setReq2", {item1Yn, item1, item2, item3, item4, item5, qlist});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    reqData : state => state.reqData
  },
}
