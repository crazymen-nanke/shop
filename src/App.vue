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
  padding: 20px;
  background: #fff;
  margin-top: 30px;
}
</style>
