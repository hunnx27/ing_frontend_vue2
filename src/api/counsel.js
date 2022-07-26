import req from './req-wrapper'

const ROOT_URI = {
  COUNSEL: '/api/counsel'
}

export default {
  saveCounsel(form, success, fail){
    const URI = `${ROOT_URI.COUNSEL}`
    req.postMultipart(URI, form, success, fail);
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
  }
}
