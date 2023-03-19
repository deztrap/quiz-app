import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllQuestions: [],
    individualQuestion: "",
  },
  getters: {
    getQuestion(state) {
      return state.individualQuestion;
    },
    getAllQuestions(state) {
      return state.AllQuestions;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
