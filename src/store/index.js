import Vue from "vue";
import Vuex from "vuex";
import * as auth from "@/modules/authentication.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth
  }
});
