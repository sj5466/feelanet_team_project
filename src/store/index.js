import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios';
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()], //새로고침시에도 데이터가 초기화되지 않음
  state: {
    //computed
    allData: [], //모든 식당 정보
    // filteredData: [],
    visibleDatas: [],
    currentPage: 0,
    pageSize: 12,
    restaurantInfo: [], //선택한 식당 정보
    koreanFood: [], //한식
    chineseFood: [], //중국식
    japaneseFood: [], //일본식
    globalFood: [], //외국음식
    FastFood: [], //패스트푸드
  },
  getters: {
    //computed
    getData(state) {
      return state.allData;
    },
  },
  mutations: {
    //method
    // selectRes(state, payload) {
    //   state.restaurantInfo = []; // 배열 초기화
    //   state.restaurantInfo.push(payload);
    // },
    // addReview() {},
    // deleteReview() {},
    // editReview() {},

    currentData(state, dataList) {
      state.allData = dataList;
      // console.log(state.allData);
    },

    updateVisibleDatas(state, dataList) {
      // state.filteredData = dataList;
      // state.filteredData = state.dataList.filter((e) => e.region == "중랑구");
      // console.log(state.filteredData);
      state.visibleDatas = dataList.slice(state.currentPage * state.pageSize, state.currentPage * state.pageSize + state.pageSize);
      // console.log(state.visibleDatas);
      // if (state.visibleDatas.length == 0 && state.currentPage > 0) {
      //   state.updateVisibleDatas(state.currentPage - 1);
      // }
      // window.scrollTo(0, 0);
      // console.log(state.filteredData);
    },
  },
  actions: {
    setData({ commit }, dataList) {
      // console.log(dataList);
      commit("currentData", dataList);
      // sessionStorage.setItem("datas", JSON.stringify(dataList));
    },
  },
  modules: {},
});
