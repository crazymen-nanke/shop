import {createRouter, createWebHistory} from "vue-router";
import store from "../store/index.js";

const routes = [
  {
    path: "/login",
    name: "loginView",
    component: () => import("../views/login/LoginView.vue"),
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../views/layout/LayoutView.vue"),
    // 重定向指定路由地址
    redirect: "/users",
    children: [
      {
        path: "/roles",
        name: "rolesList",
        component: () => import("../views/pages/RolesListView.vue"),
      },
      {
        path: "/users",
        name: "usersList",
        component: () => import("../views/pages/UsersListView.vue"),
      },
    ],
  },
];

// 创建路由对象
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 创建全局前置路由守卫
router.beforeEach((to, from, next) => {
  // to: 即将进入的目标路由对象
  // from：当前导航正要离开的路由
  // next：调用该方法来 resolve这个钩子

  const uInfo = store.state.uInfo.userInfo;
  if (!uInfo.account) {
    if (to.path === "/login") {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

// 暴露路由对象
export default router;
