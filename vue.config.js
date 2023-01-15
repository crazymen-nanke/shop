const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 取消代码规范检查
  lintOnSave: false,
});
