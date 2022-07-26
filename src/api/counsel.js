import req from './req-wrapper'

const ROOT_URI = {
  COUNSEL: '/api/counsel'
}

export default {
  saveCounsel(form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}`
    req.postMultipart(URI, form, success, fail);
  },
  updateCounsel(id, form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/${id}`
    req.putMultipart(URI, form, success, fail);
  },
  deleteCounsel(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/${id}`
    req.delete(URI, success, fail);
  },
  getCounselAll(param, success, fail){
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'createdAt,desc';
    const URI = `${ROOT_URI.COUNSEL}?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  getCounselInfo(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/${id}`
    req.get(URI, success, fail);
  },
  getAnswerAll(param, success, fail){
    const id = param.id;
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'createdAt,desc';
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  saveAnswer(form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/answer`
    req.postMultipart(URI, form, success, fail);
  },
  updateAnswer(id, form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}`
    req.putMultipart(URI, form, success, fail);
  },
  deleteAnswer(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}`
    req.delete(URI, success, fail);
  },
  getCommentAll(answerId, param, success, fail){
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'createdAt,desc';
    const URI = `${ROOT_URI.COUNSEL}/comment/answer/${answerId}?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  saveComment(form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/comment`
    req.postMultipart(URI, form, success, fail);
  },
  updateComment(id, form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/comment/${id}`
    req.putMultipart(URI, form, success, fail);
  },
  deleteComment(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/comment/${id}`
    req.delete(URI, success, fail);
  },
}
