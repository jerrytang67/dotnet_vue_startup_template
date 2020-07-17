import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import Axios from "axios";

import MainPage from "./pages/Main.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

let store = new Vuex.Store({
  state: {
    blogs: [],
  },
  mutations: {
    SAVE_BLOGS(state, payload) {
      state.blogs = payload;
    },
  },
  actions: {
    loadBlogs({ commit }) {
      Axios.get("/blog").then((res) => {
        commit("SAVE_BLOGS", res.data);
      });
    },
  },
});

let router = new VueRouter({
  mode: "history",
  routers: [
    {
      path: "/",
      component: MainPage,
    },
  ]
});

new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
