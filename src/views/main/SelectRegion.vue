<template>
  <div id="region">
    <div class="region">
      <h2 class="region__title">
        <i class="fa-solid fa-quote-left"></i>
        당신이 원하는 정보가 요기 다 있지~!
        <i class="fa-solid fa-quote-right"></i>
      </h2>
      <p class="region__desc">어떤 지역의 맛집을 원하시나요? 해당 지역을 선택해주세요!</p>
      <div class="text-left region__items">
        <v-btn
          rounded
          color="#ECBF41"
          dark
          min-width="180px"
          min-height="50px"
          v-for="(region, index) in regions"
          :key="index"
          @click="scroll('select'), setRegion(region.name)"
        >
          <span>{{ region.name }}</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
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
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
    setRegion(name) {
      sessionStorage.setItem("region", name);
    },
  },
};
</script>
