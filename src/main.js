import Vue from "vue";
import App from "./App.vue";

import "@/scss/config.scss";
import "@/registerServiceWorker";

import router from "./router";
import store from "./store";

import "bootstrap";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
