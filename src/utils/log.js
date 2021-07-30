const logUtil = {
  // 发起 http 请求的日志
  req(config) {
    console.log("------ 发起 " + config.method + " 请求 ---> url: " + config.url);
    console.log("请求参数: ", config.params);
    console.log("完整 config: ", config);
    console.log("");
  },

  // 接收 http 响应的日志
  res(response) {
    console.log("------ 接收到 http 响应 ---> url: " + response.url);
    console.log("接口返回参数: ", response.data);
    console.log("完整响应体: ", response);
    console.log("");
  },
};

export default logUtil;
