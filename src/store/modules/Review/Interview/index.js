import accountApi from '@/api/account'
import router from '@/router'

const REQ_DATA = () => {
  return {
    param1 : null,
    param2 : null,
  }
}

export const InterviewReview = {
  state: {
    interviewReviewData: REQ_DATA()
  },
  mutations: {
    setReq(state, {param1, param2}){
      console.log('#mutaion.setReq : ', param1, param2);
      const interviewReviewData = state.interviewReviewData;
      interviewReviewData['param1'] = param1;
      interviewReviewData['param2'] = param2;
      state.interviewReviewData = interviewReviewData;
    },
    clearReq(state){
      state.interviewReviewData = REQ_DATA();
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
    interviewReviewData : state => state.interviewReviewData
  },
}
