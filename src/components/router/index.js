import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Beranda",
    component: () => import("../views/index.vue"),
    meta: {
      title: "WebisTekita | Beranda",
    },
  },
  {
    path: "/desain-grafis",
    name: "DesainGrafis",
    component: () => import("../views/graphic-design.vue"),
    meta: {
      title: "WebisTekita | Desain Grafis",
    },
  },
  {
    path: "/website",
    name: "Website",
    component: () => import("../views/website.vue"),
    meta: {
      title: "WebisTekita | Website",
    },
  },
  {
    path: "/periklanan",
    name: "Periklanan",
    component: () => import("../views/advertising.vue"),
    meta: {
      title: "WebisTekita | Periklanan",
    },
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: () => import("../views/about.vue"),
    meta: {
      title: "WebisTekita | Tentang",
    },
  },
  {
    path: "/kontak",
    name: "Kontak",
    component: () => import("../views/contact.vue"),
    meta: {
      title: "WebisTekita | Kontak",
    },
  },
  {
    path: "/ketentuan",
    name: "Ketentuan",
    component: () => import("../views/terms.vue"),
    meta: {
      title: "WebisTekita | Ketentuan",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Mengatur judul halaman berdasarkan meta
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
