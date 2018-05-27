import Vue from "vue";
import Vuex from "vuex";
import languages from "./modules/language";
import userDetails from "./modules/user";
import employees from './modules/employees';

Vue.use(Vuex);
const state = {
  count: 0
};
export default new Vuex.Store({
  state,
  modules: {
    languages,
    userDetails,
	employees
  }
});
