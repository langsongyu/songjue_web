import axios from "axios";

let http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
});

export default http;
