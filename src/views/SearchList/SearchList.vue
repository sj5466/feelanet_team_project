<template>
  <div class="app">
    <v-container>
      <v-layout>
        <v-flex>
          <v-btn
            class="ma-2 homeBtn black--text"
            color="white"
            dark
            @click="$router.push({ name: 'site' }).catch(() => {})"
            ><v-icon dark left class="black--text"> mdi-arrow-left </v-icon>home
          </v-btn>
          <v-sheet class="search_list_title"
            ><span>{{ selectedRegion }} {{ selectedMenu }}</span> 맛집</v-sheet
          >
          <v-sheet class="search_list_setRegion"
            ><div @click="$router.push({ name: 'site' }).catch(() => {})">
              <a>다른 지역 음식을 찾으신다면?</a>
            </div></v-sheet
          >
          <v-sheet class="search_list_imgcard">
            <imgcard v-for="(item, idx) in visibleDatas" :key="idx" :item="item" @getDetail="getDetail" />
          </v-sheet>
          <v-sheet class="search_list_pagenation">
            <list-pagenation @updatePage="updatePage" @change="updatePage" />
          </v-sheet>
          <v-sheet height="50"></v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import Imgcard from './Imgcard.vue';
import ListPagenation from './ListPagenation.vue';
import FooterSection from '@/components/common/FooterSection.vue';

export default {
  name: 'SearchList',
  components: { Imgcard, ListPagenation, FooterSection },

  props: {
    selectedRegion: {
      type: String,
      required: true,
    },
    selectedMenu: {
      type: String,
      required: true,
    },
  },

  mounted() {
    this.toTheTop();
    this.updateVisibleDatas();
  },

  data() {
    return {
      filteredData: [],
      visibleDatas: [],
      currentPage: 0,
      pageSize: 9,
    };
  },

  methods: {
    toTheTop() {
      window.scrollTo(0, 0);
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleDatas();
    },

    updateVisibleDatas() {
      // 지역, 메뉴 선택시 필터
      if (this.selectedRegion.length == 3) {
        this.filteredData = this.$store.getters.getData.filter(
          e => e.region.slice(0, 3) == this.selectedRegion && e.title == this.selectedMenu,
        );
      } else {
        this.filteredData = this.$store.getters.getData.filter(
          e => e.region == this.selectedRegion && e.title == this.selectedMenu,
        );
      }
      // 9개씩 보여주기
      this.visibleDatas = this.filteredData.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize,
      );
      if (this.visibleDatas.length == 0 && this.currentPage > 0) {
        this.updateVisibleDatas(this.currentPage - 1);
      }
    },

    getDetail(item) {
      // console.log(item);
      this.$emit('getDetail', item);
    },
  },
};
</script>

<style>
.search_list {
  position: relative;
}
.homeBtn {
  position: absolute;
  left: 2vw;
  top: 13vh;
}
</style>
