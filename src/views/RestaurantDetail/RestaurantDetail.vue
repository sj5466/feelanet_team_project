<template>
  <div class="app">
    <v-container class="restaurant">
      <v-layout>
        <v-flex>
          <router-link :to="'/search_list/' + region + '/' + menu">
            <v-btn class="ma-2 backBtn black--text" color="white" dark>
              <v-icon dark left class="black--text"> mdi-arrow-left </v-icon>
              Back
            </v-btn>
          </router-link>
          <v-sheet class="tab_menu">
            <tab-menu :selectedRes="selectedRes" />
          </v-sheet>
          <v-sheet class="tab_info">
            <router-view :selectedRes="selectedRes" />
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
    <FoooterSection />
  </div>
</template>
<script>
import TabMenu from "./TabMenu.vue";
import FoooterSection from "@/components/common/FooterSection.vue";
export default {
  components: { TabMenu, FoooterSection },
  name: "RestaurantDetail",
  data() {
    return {
      // session에 저장한 데이터 호출
      region: sessionStorage.getItem("region"), // 선택한 지역 region에 저장
      menu: sessionStorage.getItem("menu"), // 선택한 메뉴 menu에 저장
      selectedRes: JSON.parse(sessionStorage.getItem("Item")), // 선택한 식당 정보 selectedRes에 저장
    };
  },
};
</script>
