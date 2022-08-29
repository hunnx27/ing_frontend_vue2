import req from './req-wrapper'

const ROOT_URI = {
  COMPANY: '/api/company',
}

export default {

  getCompanyInfo(id, success, fail){
    const URI = `${ROOT_URI.COMPANY}/${id}`
    req.get(URI, success, fail);
  },

  getCompanyJipyoById(id, success, fail){
    const URI = `${ROOT_URI.COMPANY}/${id}/jipyo`
    req.get(URI, success, fail);
  },
  
  
}