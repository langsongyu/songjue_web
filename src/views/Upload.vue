<template>
  <div class="test_page">
    <el-button @click="getTest" size="small" type="primary">GET请求</el-button>
    <el-button @click="postTest" size="small" type="primary">POST请求</el-button>
  </div>
</template>

<script>
import api from "../net/api";
export default {
  name: "upload",
  setup() {
    async function getTest() {
      const params = {};
      api.getTest(params);
    }

    async function postTest() {
      const params = {};
      api.postTest(params);
    }

    return {
      getTest,
      postTest,
    };
  },
};
</script>

<style>
.test_page {
  padding: 40px;
}

.el-button {
  margin-bottom: 15px;
}
</style>
