<template>
  <div id="header" class="clearfix">
    <v-row>
      <div class="header__bar">
        <div class="logo" @click="$router.push({ name: 'home' }).catch(() => {})">
          <a href="/home"> <img src="../../assets/image/logo@3x.png" alt="logo" /></a>
        </div>
        <!-- //logo -->
        <div class="search__bar" @click="onClickSearchBar">
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
            solo>
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-title>
                  Search for your favorite
                  <strong>Cryptocurrency</strong>
                </v-list-item-title>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attr, on, selected }">
              <v-chip v-bind="attr" :input-value="selected" color="blue-grey" class="white--text" v-on="on">
                <v-icon left> </v-icon>
                <span v-text="'중랑구'"></span>
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
          <v-btn color="white" fab small>
            <v-icon> mdi-magnify </v-icon>
          </v-btn>
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
        <div class="my__page__item" v-for="(list, idx) in lists" :key="list">
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
          <v-btn class="mx-2 heart" fab dark small color="white" @click="deleteBtn(idx)">
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
import EventBus from '@/EventBus/EventBus';
// import { mapGetters } from "vuex";
// import { mapState } from "vuex";
export default {
  mounted() {
    this.fetchData; // 데이터 호출
    // this.recieveData();
    EventBus.$on('addFavorite', this.recieveData);
    EventBus.$on('listDelete', this.deleteBtn);
  },
  props: {
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isEditing: false,
    isLoading: false,
    isMypage: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    lists: [],
    menuList: [
      '김치찌개',
      '된장찌개',
      '순두부찌개',
      '제육볶음',
      '김치전',
      '파전',
      '콩비지찌개',
      '잡채',
      '마라탕',
      '지삼선',
      '마파두부',
      '싼라펀',
      '꿔바로우',
      '미씨엔',
      '카오렁미엔',
      '우육면',
      '연어초밥',
      '모듬초밥',
      '참치초밥',
      '연어사시미',
      '광어사시미',
      '모듬사시미',
      '카이센동',
      '연어동',
      '팟타이',
      '쌀국수',
      '분짜',
      '쏨땀',
      '매운쌀국수',
      '곱창쌀국수',
      '커리덮밥',
      '탄두리치킨',
      '양념치킨',
      '후라이드치킨',
      '치킨버거',
      '제로콜라',
      '간장치킨',
      '갈릭치킨',
      '반반치킨',
      '핫도그',
    ],
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
      // Lazily load input items
      fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(res => res.clone().json())
        .then(res => {
          this.items = res;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
  methods: {
    deleteBtn(idx) {
      var index = this.lists.findIndex(function (num) {
        return idx === num;
      });
      this.lists.splice(index, 1);
    },
    // 검색창 클릭시 데이터 확인
    onClickSearchBar() {
      console.log(this.dataList);
    },
    recieveData(selectedRes) {
      //RestaurantDetail 컴퍼넌트에서 데이터를 Wish List에 추가하기
      this.lists.push(selectedRes);
    },
  },
  computed: {
    // ...mapState(["dataList"]),
    // ...mapGetters(["fetchData"]),
  },
};
</script>

<style>
@import url(../../assets/css/common.css);
@import url(../../assets/css/style.css);
@import url(../../assets/css/fonts.css);
</style>
