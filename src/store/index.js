import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()], //"vuex"로 allData를 localStorage에 저장, 새로고침시에도 데이터가 초기화되지 않음
  state: {
    allData: [], //모든 식당 정보
    Item: [], //선택한 식당 정보
  },
  getters: {
    //모든 식당 정보 가져오기
    getData(state) {
      return state.allData;
    },

    //선택한 식당 정보 가져오기
    getItem(state) {
      return state.Item;
    },
  },
  mutations: {
    //모든 식당 정보 allData에 저장
    currentData(state, dataList) {
      state.allData = dataList;
    },

    //선택한 식당 정보 Item에 저장
    currentItem(state, Item) {
      state.Item = Item;
    },
  },
  actions: {
    //모든 식당 정보 받기 from IndexView.vue
    setData({ commit }, dataList) {
      commit("currentData", dataList);
    },

    //선택한 식당 정보 받고 sessionStorage에 저장  from ImgCard.vue
    setItem({ commit }, Item) {
      commit("currentItem", Item);
      sessionStorage.setItem("currentItem", Item);
    },
  },
});
