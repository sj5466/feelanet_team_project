<template>
  <div class="slider" ref="direction">
    <div class="prev" @click="scrollPrev(1)">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div class="slider__items">
      <div class="item" v-for="(img, idx) in selectedRes.subImg" :key="idx">
        <img :src="img" />
      </div>
    </div>
    <div class="next" @click="scrollNext(1)">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "ResImgSlider",

  data() {
    return {
      init: 0,
    };
  },
  props: {
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.scrollPrev;
    this.scrollNext;
  },
  destroyed() {
    this.scrollPrev;
    this.scrollNext;
  },
  methods: {
    scrollPrev() {
      //왼쪽 버튼 클릭시 image slider가 왼쪽으로 이동
      let directionCont = document.querySelector(".slider__items");
      this.init -= 410;
      directionCont.scrollTo({
        top: 0,
        left: this.init,
        behavior: "smooth",
      });
    },
    scrollNext() {
      //오른쪽 버튼 클릭시 image slider가 오른쪽으로 이동
      let directionCont = document.querySelector(".slider__items");
      this.init += 410;
      directionCont.scrollTo({
        top: 0,
        left: this.init,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style></style>
