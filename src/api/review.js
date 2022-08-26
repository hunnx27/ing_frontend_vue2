import req from './req-wrapper'

const ROOT_URI = {
  REVIEW: '/api/review',
  COMPANY: '/api/review/company',
  INTERVIEW: '/api/review/interview',
  YEARAMT: '/api/review/amt',
  
  
}

export default {
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