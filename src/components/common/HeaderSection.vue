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
            label="지역이나 음시종류를 검색 해주세요"
            solo>
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-title>
                  Search for your favorite
                  <strong>Cryptocurrency</strong>
                </v-list-item-title>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attr, on, item, selected }">
              <v-chip v-bind="attr" :input-value="selected" color="blue-grey" class="white--text" v-on="on">
                <v-icon left> mdi-bitcoin </v-icon>
                <span v-text="item.name"></span>
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
            <!-- <v-icon> mdi-close </v-icon> -->
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
        <div class="my__page__item" v-for="list in mylists" :key="list">
          <div class="my__page__contents">
            <div class="photo">
              <img :src="list.image" :alt="list.alt" />
            </div>
            <div class="list">
              <div class="list__title">
                <p>
                  {{ list.title }}
                </p>
                <span>{{ list.score }}</span>
              </div>
              <p class="list__desc">종로구 - 중식</p>
            </div>
          </div>
          <v-btn class="mx-2 heart" fab dark small color="white" @click.stop="deleteBtn(list.id)">
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
export default {
  data: () => ({
    isEditing: false,
    isLoading: false,
    isMypage: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    lists: {},
    mylists: [
      {
        id: 0,
        image: '../../assets/image/mylist1.png',
        title: '팔레드 신',
        alt: '식당1',
        score: '4.6',
        desc: '종로구 - 중식',
      },
      {
        id: 1,
        image: '../../assets/image/mylist2.png',
        title: '반티엔야오',
        alt: '식당2',
        score: '4.4',
        desc: '강남구 - 중식',
      },
      {
        id: 2,
        image: '../../assets/image/mylist3.png',
        title: '농민백암순대',
        alt: '식당3',
        score: '4.8',
        desc: '강남구 - 한식',
      },
      {
        id: 3,
        image: '../../assets/image/mylist4.png',
        title: '호운',
        alt: '식당4',
        score: '4.5',
        desc: '강북구 - 한식',
      },
      {
        id: 4,
        image: '../../assets/image/mylist3.png',
        title: '농민백암순대',
        alt: '식당5',
        score: '4.8',
        desc: '강남구 - 한식',
      },
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
    deleteBtn(id) {
      var index = this.mylists.findIndex(function (item) {
        return item.id === id;
      });
      this.mylists.splice(index, 1);
    },
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style>
@import url(../../assets/css/common.css);
@import url(../../assets/css/style.css);
@import url(../../assets/css/fonts.css);

/* .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
  border-radius: 50px;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot.active {
  border-radius: 0px;
} */
</style>
