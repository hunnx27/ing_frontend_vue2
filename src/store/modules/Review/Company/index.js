import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    param1 : null,
    param2 : null,
  }
}

export const CompanyReview = {
  state: {
    companyReviewData: REQ_DATA()
  },
  mutations: {
    setReq(state, {param1, param2}){
      console.log('#mutaion.setReq : ', param1, param2);
      const companyReviewData = state.companyReviewData;
      companyReviewData['param1'] = param1;
      companyReviewData['param2'] = param2;
      state.companyReviewData = companyReviewData;
    },
    clearReq(state){
      state.companyReviewData = REQ_DATA();
    }
  },
  actions: {
    setReq({commit}, {param1, param2}){
      console.log('#actions.setReq : ', param1, param2);
      commit("setReq", {param1, param2});
    },
    clearReq({commit}){
      commit("clearReq");
    }
  },
  getters: {
    companyReviewData : state => state.companyReviewData
  },
}
