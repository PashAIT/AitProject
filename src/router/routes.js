export default [
  {
    path: "/",
    component: () => import("../pages/home.vue"),
  },
  {
    path: "/aboutUs",
    component: () => import("../pages/about-us.vue"),
  },
  {
    path: "/aitBlog",
    component: () => import("../pages/ait-blog.vue"),
  },
  {
    path: "/blogInfo",
    component: () => import("../../src/components/AitBlog/blog-info.vue"),
  },
  {
    path: "/contact",
    component: () => import("../pages/contact.vue"),
  },
  {
    path: "/logIn",
    component: () => import("../pages/logIn.vue"),
  },
  {
    path: "/registration",
    component: () =>
      import("../../src/components/Registration/registration.vue"),
  },
];
