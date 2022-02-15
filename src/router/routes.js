export default [
  {
    path: "/",
    component: () => import("../pages/home.vue"),
  },
  {
    path: "/aboutUs",
    component: () => import("../pages/about-us.vue"),
  },
];
