import req from './req-wrapper'

const ROOT_URI = {
  REVIEW: '/api/review',
  
}

export default {
  login (body, success, fail) {
    req.post(ROOT_URI.REVIEW, body, success, fail)
  },
}