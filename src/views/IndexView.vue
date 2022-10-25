<template>
  <div>
    <HeaderSection />
    <!-- {{ dataList }} -->
    <router-view />
    <!-- <FooterSection /> -->
  </div>
</template>

<script>
// import axios from "axios";
import HeaderSection from "@/components/common/HeaderSection.vue";
import { mapGetters } from "vuex";

export default {
  name: "ImgCard",
  data() {
    return {
      // dataList: [], //모든 식당
      koreanFood: [], //한식
      chineseFood: [], //중국식
      japaneseFood: [], //일본식
      globalFood: [], //외국음식
      FastFood: [], //패스트푸드
    };
  },
  components: {
    HeaderSection,
    // FooterSection,
  },

  created() {
    // this.fetchData();
  },

  methods: {
    //데이터 호출 함수
  },
  computed: {
    ...mapGetters(["fetchData"]),
  },
};
</script>

<style>
@import "@/assets/css/style.css";
@import "@/assets/css/fonts.css";
</style>
