import Vue from "vue";
import VueRouter from "vue-router";
import DrinksView from "../views/DrinksView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: () => ({
      path: "/drinks"
    })
  },
  {
    path: "/drinks",
    name: "drinks",
    component: DrinksView
  },
  {
    path: "/drinks/:slug",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/DetailView.vue")
  },
  {
    path: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFoundView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
