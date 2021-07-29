import axios from "axios";

let http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
});

http.interceptors.request.use(
  (config) => {
    // TODO 发送请求前做点啥
    console.log(config)
    return config
  },
  (error) => {
    // TODO 对请求错误做点啥
    console.log(error)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    // TODO 对响应数据做点啥
    console.log(response)
    return response
  },
  (error) => {
    // TODO 对响应错误做点啥，http 错误状态应该是往这走，写点东西让4xx，5xx别裸奔
    console.log(error)
    return Promise.reject(error)
  }
)

export default http;
