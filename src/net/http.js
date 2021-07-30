import axios from "axios";
import log from "../utils/log";

let http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    log.req(config);
    return config;
  },
  (error) => {
    // TODO 对请求错误做点啥...什么时候会走请求错误？
    console.log("请求拦截器 - error：", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    log.res(response);
    return response;
  },
  (error) => {
    // TODO 对响应错误做点啥，http 错误状态应该是往这走，之后写点东西让4xx，5xx别裸奔
    console.log("响应拦截器 - error：", error);
    return Promise.reject(error);
  }
);

export default http;
