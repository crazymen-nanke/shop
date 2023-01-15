import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../views/layout/LayoutView.vue"),
    // 重定向指定路由地址
    redirect: "/index",
    children: [
      {
        path: "/index",
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
