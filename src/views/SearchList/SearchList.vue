<template>
  <div class="app">
    <v-container>
      <v-layout>
        <v-flex>
          <v-sheet class="search_list_title"><span>강남구 일식</span> 맛집</v-sheet>
          <v-sheet class="search_list_setRegion"
            ><div @click="$router.push({ name: 'home' }).catch(() => {})">
              <a href="#">다른 지역 음식을 찾으신다면?</a>
            </div></v-sheet
          >
          <v-sheet class="search_list_imgcard">
            <imgcard />
          </v-sheet>
          <v-sheet class="search_list_pagenation">
            <list-pagenation />
          </v-sheet>
          <v-sheet height="50"></v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Imgcard from './Imgcard.vue';
import ListPagenation from './ListPagenation.vue';
export default {
  components: { Imgcard, ListPagenation },

  name: 'SearchList',

  data() {
    return {};
  },

  mounted() {
    this.toTheTop();
  },

  methods: {
    toTheTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
