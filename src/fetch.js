import Fly from 'flyio/dist/npm/fly'

const fly = new Fly()
// 配置请求基地址
fly.config.baseURL = 'https://tcyx.demo.chilunyc.com/admin/'


fly.interceptors.request.use(req => {
  req.headers['Authorization'] = 'BearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1NjQ0MDIwNTc4MzYsImV4cCI6MTU2NTAwNjg1NywidXNlcklkIjoxfQ.4eLx2kERP5jn4UvImpiSCf84hy-n8_aTVOCOt-EN5vr6mrywXMhLi93RfjFN-Rt5Pe85htRT4RqvSprFwIpTuQ'
  return req
})

fly.interceptors.response.use(
  res => {
    return res.data.data
  },
)

export default fly
