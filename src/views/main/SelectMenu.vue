<template>
  <div id="select">
    <SelectMenuCont :scrollEvent="scrollEvent" />
    <SelectMenuIcon />
  </div>
</template>

<script>
import SelectMenuCont from "../main/SelectMenuCont.vue";
import SelectMenuIcon from "../main/SelectMenuIcon.vue";

export default {
  components: {
    SelectMenuCont,
    SelectMenuIcon,
  },
  data: () => ({}),
  created() {
    window.addEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        window.scrollY;
      // 2번째 섹션 가로모드
      let offset = scrollTop - document.querySelector("#select").offsetTop;
      // console.log(offset);
      if (scrollTop >= document.querySelector("#select").offsetTop) {
        // gsap.to 안에서는 자식 태그를 부르면 자동으로 불러진다
        // eslint-disable-next-line no-undef
        gsap.to("#menu", { left: -offset, ease: "linear" });
        // let checked = gsap.to("#menu", { left: -offset, ease: "linear" });
        // console.log(checked);
      }
      requestAnimationFrame(this.scrollEvent);
    },
  },
};
</script>

<style>
#select {
  position: relative;
  z-index: 7000;
  width: 100vw;
  height: 1057vh;
  background: beige;
}
._horizontal-scroll[data-v-5ce095ec]::-webkit-scrollbar {
  display: none;
}
</style>
