import axios from 'axios'
// 音乐模块
export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'https://autumnfish.cn', // 网易云接口
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 3.发送真正的网络请求
  return instance(config)
}
// 安卓端
export function request2 (config) {
  // 1.创建axios的实例
  const instance2 = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout: 5000
  })

  instance2.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 2.2.响应拦截
  instance2.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 3.发送真正的网络请求
  return instance2(config)
}
// 天气
export function request3 (config) {
  // 1.创建axios的实例
  const instance3 = axios.create({
    baseURL: 'http://wthrcdn.etouch.cn',
    timeout: 5000
  })

  instance3.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 2.2.响应拦截
  instance3.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 3.发送真正的网络请求
  return instance3(config)
}
