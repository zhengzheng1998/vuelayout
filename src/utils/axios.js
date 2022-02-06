import axios from 'axios'
import Cookie from 'js-cookie'
// 当创建实例的时候配置默认配置
const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? 'api' : ''
})

// 添加一个请求拦截器
// service.interceptors.request.use(function(config){
//   // 在请求发出之前进行一些操作
//   return config;
// },function(err){
//   // Do something with request error
//   return Promise.reject(error);
// });
// 添加一个响应拦截器
service.interceptors.response.use(function (res) {
  // 在这里对返回的数据进行处理
  return res.data
}, function (error) {
  const response = error.response
  const data = response.data
  if (response.status === 401) {
    Cookie.remove('token')
  }
  alert(data.message)
  // Do something with response error
  return Promise.reject(error)
})

export default {
  ...service,
  get (url, params) {
    return service.get(url, { params })
  }
}
