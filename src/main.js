import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import gsap from "gsap";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

// import userStore from "@/store/index.js";

Vue.prototype.$axios = axios;
Vue.prototype.$gsap = gsap;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
