import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    param1 : null,
    param2 : null,
  }
}

export const YearamtReview = {
  state: {
    yearamtReviewData: REQ_DATA()
  },
  mutations: {
    setReq(state, {param1, param2}){
      console.log('#mutaion.setReq : ', param1, param2);
      const yearamtReviewData = state.yearamtReviewData;
      yearamtReviewData['param1'] = param1;
      yearamtReviewData['param2'] = param2;
      state.yearamtReviewData = yearamtReviewData;
    },
    clearReq(state){
      state.yearamtReviewData = REQ_DATA();
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
    yearamtReviewData : state => state.yearamtReviewData
  },
}
