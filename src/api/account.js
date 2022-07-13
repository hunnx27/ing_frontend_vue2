import req from './req-wrapper'

const ACCOUNT_URI = {
  LOGIN: '/auth/login',
  USER: '/api/accounts/me',
  SIGNUP: '/auth/oauth2/signup',
  SAVE_MYINFO: '/auth/oauth2/signup',
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
  saveMyinfo(body, success, fail){
    req.post(ACCOUNT_URI.SAVE_MYINFO, body, success, fail);
  }
}
