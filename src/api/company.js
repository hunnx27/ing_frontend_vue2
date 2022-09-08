import req from './req-wrapper'
import buildURL from "axios/lib/helpers/buildURL";

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

  getCompanyJipyos({page,size,sort},success, fail){
    // 기초파라미터 설정
    page = page!=null? page : 0;
    size = size!=null? size : 4;
    sort = sort!=null? sort : 'created_at,desc';
    const URI = `${ROOT_URI.COMPANIES}/jipyos`
    req.get(URI, success, fail);
  },

  getCompanySearch({name,sido,interestZone,interestCompany},{page,size,sort}, success, fail){
    // 기초파라미터 설정
    page = page!=null? page : 0;
    size = size!=null? size : 20;
    sort = sort!=null? sort : 'officeName,asc';
    let URI = `${ROOT_URI.COMPANIES}/search?page=${page}&size=${size}&sort=${sort}`;

    // 조건파라미터 설정
    let code = '';
    if(interestZone!=null && interestZone!=''){
      code = interestZone;
    }else if(sido!=null && sido!=''){
      code = sido;
    }

    if(name!=null && ''!=name) URI = buildURL(URI, {name: name});
    if(code!=null && ''!=code) URI = buildURL(URI, {code: code});
    if(interestCompany!=null && ''!=interestCompany) URI = buildURL(URI, {interestCompany: interestCompany});

    // API Call!
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
  기관의 리뷰 리스트가져오기
  */
  getCompanyReviewListByCompanyId(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/companies`
    req.get(URI, success, fail);
  },
  getInterviewReviewListByCompanyId(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/interviews`
    req.get(URI, success, fail);
  },
  getYearamtReviewListByCompanyId(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/amts`
    req.get(URI, success, fail);
  },

  /**
   * 기관의 리뷰 집계정보 가져오기
   */
   getInterviewReviewInfoByCompanyId(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/interviews/info`
    req.get(URI, success, fail);
  },
  getAmtAvgByCompanyId(companyId, success, fail){
    const URI = `${ROOT_URI.COMPANIES}/${companyId}/review/amts/avg`
    req.get(URI, success, fail);
  },

  
}