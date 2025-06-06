import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store/index.js";
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.loginRequire) {
    if (store.getters.getUserId) {
      next();
    } else {
      console.log(from);
      alert("You should do sign in or sign up first");
      next({ name: "Login" });
    }
  } else {
    if (
      !from.path.startsWith("/user") ||
      (from.path.startsWith("/user") && !store.getters.getUserId)
    ) {
      if (to.name == "Register") {
        if (from.name == "Sign") {
          next();
        } else {
          alert("You can go to this page only after a sign up");
          next(router.replace({ name: from.name }));
        }
      } else {
        next();
      }
    } else {
      console.log(from.path.startsWith("/user"));
      next(router.replace({ name: from.name }));
    }
  }
});

export default router;
