<template>
  <div class="app">
    <v-container>
      <v-layout>
        <v-flex>
          <v-btn class="ma-2 homeBtn black--text" color="white" dark @click="$router.push({ name: 'site' }).catch(() => {})"
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
            <div class="search_warning" v-show="this.filteredData.length == 0 ? true : false">검색결과가 없습니다.</div>
            <imgcard v-for="(item, idx) in visibleDatas" :key="idx" :item="item" :selectedRegion="selectedRegion" :selectedMenu="selectedMenu" />
          </v-sheet>
          <v-sheet class="search_list_pagenation">
            <list-pagenation @updatePage="updatePage" @change="updatePage" :totalNum="totalNum" />
          </v-sheet>
          <v-sheet height="50"></v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
    <FooterSection />
  </div>
</template>

<script>
import Imgcard from "./Imgcard.vue";
import ListPagenation from "./ListPagenation.vue";
import FooterSection from "@/components/common/FooterSection.vue";

export default {
  name: "SearchList",
  components: { Imgcard, ListPagenation, FooterSection },
  mounted() {
    // 라우터 파라미터 호출
    this.selectedRegion = this.$route.params.region; //선택한 지역
    this.selectedMenu = this.$route.params.menu; //선택한 메뉴

    this.toTheTop(); // 페이지 최상위로
    this.updateVisibleDatas(); // 데이터 필터링 후 보여지는 데이터
  },

  data() {
    return {
      filteredData: [], // 필터링한 함수
      totalNum: 0, // filteredData 개수
      visibleDatas: [], // 6개씩 보여주기
      currentPage: 0, // 현재 페이지
      pageSize: 6, // 보여줄 개수
      selectedRegion: "", // 선택한 지역
      selectedMenu: "", // 선택한 메뉴
    };
  },

  methods: {
    // 렌더링 시 페이지 최상위로
    toTheTop() {
      window.scrollTo(0, 0);
    },

    // 페이지 이동시
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateCard();
    },

    // 선택한 지역, 메뉴로 데이터 필터링 후 보여지는 데이터
    updateVisibleDatas() {
      // ex) 도봉구, 중랑구 ...
      if (this.selectedRegion.length == 2) {
        this.filteredData = this.$store.getters.getData.filter(
          (e) =>
            (e.region.slice(0, 2) == this.selectedRegion && e.title == this.selectedMenu) ||
            (e.region.slice(0, 2) == this.selectedRegion && e.menu[0].name == this.selectedMenu) ||
            (e.region.slice(0, 2) == this.selectedRegion && e.menu[1].name == this.selectedMenu) ||
            (e.region.slice(0, 2) == this.selectedRegion && e.menu[2].name == this.selectedMenu) ||
            (e.region.slice(0, 2) == this.selectedRegion && e.menu[3].name == this.selectedMenu) ||
            (e.region.slice(0, 2) == this.selectedRegion && e.menu[4].name == this.selectedMenu) ||
            (e.region.slice(0, 2) == this.selectedRegion && e.menu[5].name == this.selectedMenu)
        );
      } else if (this.selectedRegion.length == 3) {
        this.filteredData = this.$store.getters.getData.filter(
          (e) =>
            (e.region.slice(0, 3) == this.selectedRegion && e.title == this.selectedMenu) ||
            (e.region.slice(0, 3) == this.selectedRegion && e.menu[0].name == this.selectedMenu) ||
            (e.region.slice(0, 3) == this.selectedRegion && e.menu[1].name == this.selectedMenu) ||
            (e.region.slice(0, 3) == this.selectedRegion && e.menu[2].name == this.selectedMenu) ||
            (e.region.slice(0, 3) == this.selectedRegion && e.menu[3].name == this.selectedMenu) ||
            (e.region.slice(0, 3) == this.selectedRegion && e.menu[4].name == this.selectedMenu) ||
            (e.region.slice(0, 3) == this.selectedRegion && e.menu[5].name == this.selectedMenu)
        );
        // ex) 동대문구, 서대문구 ...
      } else if (this.selectedRegion.length == 4) {
        this.filteredData = this.$store.getters.getData.filter(
          (e) =>
            (e.region == this.selectedRegion && e.title == this.selectedMenu) ||
            (e.region == this.selectedRegion && e.menu[0].name == this.selectedMenu) ||
            (e.region == this.selectedRegion && e.menu[1].name == this.selectedMenu) ||
            (e.region == this.selectedRegion && e.menu[2].name == this.selectedMenu) ||
            (e.region == this.selectedRegion && e.menu[3].name == this.selectedMenu) ||
            (e.region == this.selectedRegion && e.menu[4].name == this.selectedMenu) ||
            (e.region == this.selectedRegion && e.menu[5].name == this.selectedMenu)
        );
      }
      this.totalNum = this.filteredData.length;
      this.updateCard();
    },

    // 업데이트
    updateCard() {
      if (this.currentPage === 2) {
        this.visibleDatas = this.filteredData.slice(this.pageSize, this.filteredData.length);
      } else {
        this.visibleDatas = this.filteredData.slice(0, this.pageSize);
      }
    },
  },
};
</script>
