import req from './req-wrapper'

const ROOT_URI = {
  REVIEW: '/api/reviews',
  COMPANY: '/api/review/company',
  INTERVIEW: '/api/review/interview',
  YEARAMT: '/api/review/amt',
}

export default {
  getReviewAll(param, success, fail){
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'created_at,desc';
    const URI = `${ROOT_URI.REVIEW}/all?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  getReviewCompany(param, success, fail){
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'created_at,desc';
    const URI = `${ROOT_URI.REVIEW}/company?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  getReviewInterview(param, success, fail){
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'created_at,desc';
    const URI = `${ROOT_URI.REVIEW}/interview?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  getReviewAmt(param, success, fail){
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'created_at,desc';
    const URI = `${ROOT_URI.REVIEW}/amt?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  saveCompany(form, success, fail){
    const URI = `${ROOT_URI.COMPANY}`
    req.postMultipart(URI, form, success, fail);
  },
  saveInterview(body, success, fail){
    const URI = `${ROOT_URI.INTERVIEW}`
    req.post(URI, body, success, fail);
  },
  saveYearamt(body, success, fail){
    const URI = `${ROOT_URI.YEARAMT}`
    req.post(URI, body, success, fail);
  },
}