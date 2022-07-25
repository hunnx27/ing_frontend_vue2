import req from './req-wrapper'

const ROOT_URI = {
  LOGIN: '/auth/login',
  USER: '/api/accounts/me',
  SIGNUP: '/auth/oauth2/signup',
  ACCOUNT: '/api/accounts',
  ADDRESS: '/api/common/address',
}

export default {
  login (body, success, fail) {
    req.post(ROOT_URI.LOGIN, body, success, fail)
  },
  deleteUser(success, fail){
    const yes = confirm("정말로 회원을 탈퇴하시겠습니까?");
    if(yes){
      const URI = `${ROOT_URI.ACCOUNT}/me`;
      req.delete(URI, success, fail);
    }
  },
  getUser (success) {
    req.get(ROOT_URI.USER, success)
  },
  signup(body, success, fail){
    req.post(ROOT_URI.SIGNUP, body, success, fail);
  },
  getMyinfo(id, success){
    const URI = `${ROOT_URI.ACCOUNT}/${id}/myinfo`
    req.get(URI, success);
  },
  getAddress(success){
    req.get(ROOT_URI.ADDRESS, success);
  },
  getAddressSido(success){
    const URI = `${ROOT_URI.ADDRESS}/sido`
    req.get(URI, success);
  },
  getAddressBySido(sidoCode, success){
    const URI = `${ROOT_URI.ADDRESS}/sido/${sidoCode}`
    req.get(URI, success);
  },
  saveMyinfo(body, success, fail){
    const URI = `${ROOT_URI.ACCOUNT}/me/myinfo`
    req.put(URI, body, success, fail);
  },
  getMyPointHistories(success, fail){
    const URI = `${ROOT_URI.ACCOUNT}/me/pointHistories`
    req.get(URI, success);
  },
}
