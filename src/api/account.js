import req from './req-wrapper'

const ACCOUNT_URI = {
  LOGIN: '/auth/login',
  USER: '/api/accounts/me',
  SIGNUP: '/auth/oauth2/signup',
  ACCOUNT: '/api/accounts',
  ADDRESS: '/api/common/address',
}

export default {
  login (body, success, fail) {
    req.post(ACCOUNT_URI.LOGIN, body, success, fail)
  },
  getUser (success) {
    req.get(ACCOUNT_URI.USER, success)
  },
  signup(body, success, fail){
    req.post(ACCOUNT_URI.SIGNUP, body, success, fail);
  },
  getMyinfo(id, success){
    const URI = `${ACCOUNT_URI.ACCOUNT}/${id}/myinfo`
    req.get(URI, success);
  },
  getAddress(success){
    req.get(ACCOUNT_URI.ADDRESS, success);
  },
  saveMyinfo(body, success, fail){
    const URI = `${ACCOUNT_URI.ACCOUNT}/me/myinfo`
    req.put(URI, body, success, fail);
  },
  
  
}
