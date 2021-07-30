import http from "./http";

const api = {
  // get 测试
  getTest: async function(params) {
    try {
      await http.get("/getIndex", { params: params });
    } catch (error) {
      console.log("--- try-catch 捕获错误 --->", error);
    }
  },

  // post 测试
  postTest: async function(params) {
    try {
      await http.post("/postIndex", { params: params });
    } catch (error) {
      console.log("--- try-catch 捕获错误 --->", error);
    }
  },
};

export default api;
