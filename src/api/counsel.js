import req from './req-wrapper'
import buildURL from "axios/lib/helpers/buildURL";

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
    let URI = `${ROOT_URI.COUNSEL}?page=${page}&size=${size}&sort=${sort}`
    if(param.type!=null && ''!=param.type) URI = buildURL(URI, {counselSearchType: param.type});
    if(param.keyword!=null && ''!=param.keyword) URI = buildURL(URI, {keyword: param.keyword});
    if(param.gubn!=null && ''!=param.gubn) URI = buildURL(URI, {gubn: param.gubn});
    req.get(URI, success, fail);
  },
  getCounselInfo(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/${id}`
    req.get(URI, success, fail);
  },
  getAnswerAll(param, success, fail){
    const counselId = param.counselId;
    const page = param.page!=null? param.page : 0;
    const size = param.size!=null? param.size : 20;
    const sort = param.sort!=null? param.sort : 'createdAt,desc';
    const URI = `${ROOT_URI.COUNSEL}/${counselId}/answer?page=${page}&size=${size}&sort=${sort}`
    req.get(URI, success, fail);
  },
  saveAnswer(form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/answer`
    req.postMultipart(URI, form, success, fail);
  },
  getAnswerInfo(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}`
    req.get(URI, success, fail);
  },
  updateAnswer(id, form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}`
    req.putMultipart(URI, form, success, fail);
  },
  deleteAnswer(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}`
    req.delete(URI, success, fail);
  },
  adoptAnswer(id, body, success, fail){
    ///counsel/answer/{id}/adopt
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}/adopt`
    req.put(URI, body, success, fail);
  },
  getCommentByAnswerId(answerId, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/comment/answer/${answerId}`
    req.get(URI, success, fail);
  },
  saveComment(form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/comment`
    req.post(URI, form, success, fail);
  },
  updateComment(id, form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/comment/${id}`
    req.putMultipart(URI, form, success, fail);
  },
  deleteComment(id, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/comment/${id}`
    req.delete(URI, success, fail);
  },
  recommendAnswer(id, success, fail){
    ///counsel/answer/{id}/adopt
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}/recommend`
    req.post(URI, {}, success, fail);
  },
  noticeAnswer(id, success, fail){
    ///counsel/answer/{id}/adopt
    const URI = `${ROOT_URI.COUNSEL}/answer/${id}/notice`
    req.post(URI, {}, success, fail);
  },
  searchQnaitemCntByGubn(gubn, success, fail){
    const URI = `${ROOT_URI.COUNSEL}/search/gubn/${gubn}`
    req.get(URI, success, fail);
  },
  // searchCounselByTag({keyword,gubn}, success, fail){
  //   let URI = `${ROOT_URI.COUNSEL}/search/tag/${keyword}`
  //   if(gubn!=null && ''!=gubn) URI = buildURL(URI, {gubn: gubn});
  //   req.get(URI, success, fail);
  // },
  // searchCounselByQnaitem(code, success, fail){
  //   const URI = `${ROOT_URI.COUNSEL}/search/qnaitem/${code}`
  //   req.get(URI, success, fail);
  // }
}
