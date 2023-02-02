<template>
  <!-- 用来承载内容 -->
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

/* flex布局样式 */
.flex-float {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  align-items: center;
}

.el-main {
  background: #efefef;
}

.page_content {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  padding: 20px;
  background: #fff;
  margin-top: 30px;
}

/* 设置自动以的loading加载 */
.el-loading-spinner {
  background-image: url("./assets/loading.gif");
  background-repeat: no-repeat;
  background-size: 200px 120px;
  height: 100px;
  width: 100%;
  background-position: center;
  top: 40%;
}

.el-loading-spinner .circular {
  display: none;
}

.el-loading-spinner .el-loading-text {
  margin: 85px 0px;
}
</style>
