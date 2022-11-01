<template>
  <div id="header" class="clearfix">
    <v-row>
      <div class="header__bar">
        <div class="logo" @click="$router.push({ name: 'home' }).catch(() => {})">
          <a href="/home"> <img src="../../assets/image/logo@3x.png" alt="logo" /></a>
        </div>
        <!-- //logo -->
        <div class="search__bar">
          <v-autocomplete
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            chips
            clearable
            hide-details
            hide-selected
            item-text="name"
            item-value="id"
            label="지역 및 음식을 검색해주세요"
            solo
            @input.native="inputEvent"
          >
            <template v-slot:no-data>
              <v-list-item> <v-list-item-title> 지역 및 음식을 검색해주세요 </v-list-item-title>> </v-list-item>
            </template>
            <template v-slot:selection="{ attr, on, item, selected }">
              <v-chip v-bind="attr" :input-value="selected" color="black" outlined class="white--text" v-on="on">
                <span class="search__word" v-text="setRegion(item.name)"></span>
              </v-chip>
            </template>

            <template v-slot:item="{ item }">
              <v-list-item-avatar color="indigo" class="text-h5 font-weight-light white--text">
                {{ item.name.charAt(0) }}
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-bitcoin</v-icon>
              </v-list-item-action>
            </template>
          </v-autocomplete>
        </div>

        <div class="search__icon">
          <router-link :to="'/search_list/' + region + '/' + searchedItem" @click.native="searchItem">
            <v-btn color="white" fab small>
              <v-icon> mdi-magnify </v-icon>
            </v-btn>
          </router-link>
        </div>
        <!-- //search__icon -->
        <!-- heart__icon -->
        <v-btn class="mx-2" fab dark small color="white" @click="isMypage = !isMypage">
          <v-icon dark color="pink"> mdi-heart </v-icon>
        </v-btn>
        <!-- // heart__icon -->
      </div>
      <!-- // header__bar-->
    </v-row>
    <!-- //row -->

    <div class="my__page" v-if="isMypage">
      <h1 class="my__page__title">나의 Wish List</h1>
      <div class="my__page__list">
        <div class="my__page__phrases" v-show="lists.length == 0 ? true : false">Wish List를 채워 보세요!</div>
        <div class="my__page__item" v-for="list in lists" :key="list.name">
          <div class="my__page__contents">
            <div class="photo">
              <img :src="list.mainImg" :alt="list.alt" />
            </div>
            <div class="list">
              <div class="list__title">
                <p>
                  {{ list.name }}
                </p>
                <span>{{ list.rates }}</span>
              </div>
              <p class="list__desc">{{ list.region }}- {{ list.title }}</p>
            </div>
          </div>
          <v-btn class="mx-2 heart" fab dark small color="white" @click="deleteBtn(list.id), favoritBtnActive(list.id)">
            <v-icon dark small color="pink"> mdi-heart </v-icon>
          </v-btn>
        </div>
      </div>
      <!-- //my__page__list -->
      <div class="my__page__login">
        <div class="text-center">
          <v-btn rounded color="pink" dark> 조선만님 환영합니다 </v-btn>
        </div>
      </div>
    </div>
    <!-- //my__page -->
  </div>
  <!-- //header -->
</template>

<script>
import EventBus from "@/EventBus/EventBus";
export default {
  mounted() {
    this.fetchData; // 데이터 호출
    EventBus.$on("addFavorite", this.recieveData);
    EventBus.$on("listDelete", this.deleteBtn);
  },
  props: ["selectedRes"],
  data: () => ({
    isEditing: false,
    isLoading: false,
    isMypage: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    lists: [],
    regions: [
      { id: 0, name: "도봉구" },
      { id: 1, name: "강북구" },
      { id: 2, name: "노원구" },
      { id: 3, name: "중랑구" },
      { id: 4, name: "동대문구" },
      { id: 5, name: "서대문구" },
      { id: 6, name: "성북구" },
      { id: 7, name: "종로구" },
      { id: 8, name: "은평구" },
      { id: 9, name: "성동구" },
      { id: 10, name: "강남구" },
      { id: 11, name: "마포구" },
      { id: 12, name: "용산구" },
      { id: 13, name: "중구" },
      { id: 14, name: "관악구" },
      { id: 15, name: "영등포구" },
      { id: 16, name: "광진구" },
      { id: 17, name: "강동구" },
      { id: 18, name: "송파구" },
      { id: 19, name: "구로구" },
      { id: 20, name: "서초구" },
      { id: 21, name: "동작구" },
      { id: 22, name: "양천구" },
      { id: 23, name: "금천구" },
    ],
    region: "",
    searchedItem: "",
    inputValue: "",
  }),
  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;
      this.isLoading = true;
      this.items = this.regions;
      this.isLoading = false;
    },
  },

  methods: {
    deleteBtn(idx) {
      //삭제 버튼 함수
      var index = this.lists.findIndex(function (num) {
        return num.id === idx;
      });
      this.lists.splice(index, 1);
    },
    favoritBtnActive(selectedRes) {
      //취소버튼을 누르면 취소하기에서 찜하기로 바뀌는 게 하는 함수
      EventBus.$emit("favoritBtnActive", selectedRes);
    },
    recieveData(selectedRes) {
      //RestaurantDetail 컴퍼넌트에서 데이터를 Wish List에 추가하기
      this.lists.push(selectedRes);
    },
    // 검색창 지역 저장
    setRegion(name) {
      this.region = name;
      return name;
    },
    // 검색 버튼 클릭시
    searchItem() {
      if (document.URL.indexOf("http://localhost:8080/home") >= 0) {
        return;
      } else if (this.region === "") {
        alert("지역을 먼저 검색해주세요");
      } else {
        // 새로고침시 데이터 리로드
        window.location.reload();
      }
    },
    // 검색창 입력값 저장
    inputEvent($event) {
      if ($event.target.value != null) {
        this.inputValue = $event.target.value;
        sessionStorage.setItem("searchItem", this.inputValue); // 검색값 저장
        this.searchedItem = sessionStorage.getItem("searchItem");
      }
    },
  },
};
</script>

<style>
@import url(../../assets/css/common.css);
@import url(../../assets/css/style.css);
@import url(../../assets/css/fonts.css);
.v-text-field.v-text-field--solo .v-input__control input {
  font-size: 16px;
}
</style>
