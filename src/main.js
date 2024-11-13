import { createApp } from "vue";
import router from "./components/router/index.js";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "swiper/swiper-bundle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

const app = createApp(App);
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
app.use(router);
app.mount("#app");
