import req from './req-wrapper'

const ROOT_URI = {
  COMPANY: '/api/company',
  COMPANIES: '/api/companies',
}

export default {

  getCompanyInfo(id, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${id}`
    req.get(URI, success, fail);
  },

  getCompanyJipyoById(id, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${id}/jipyo`
    req.get(URI, success, fail);
  },
  

  /* 
  단건조회
  */
  getCompanyDetailInfo({companyId, id}, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/companies/${id}`
    req.get(URI, success, fail);
  },

  getInterviewDetailInfo({companyId, id}, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/interviews/${id}`
    req.get(URI, success, fail);
  },
  getAmtDetailInfo({companyId, id}, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/amts/${id}`
    req.get(URI, success, fail);
  },
  
  /*
  기관의 리스트가져오기
  */
  getCompanyReviewListById(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/companies`
    req.get(URI, success, fail);
  },
  getInterviewReviewListById(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/interviews`
    req.get(URI, success, fail);
  },
  getYearamtReviewListById(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/amts`
    req.get(URI, success, fail);
  },
  
}