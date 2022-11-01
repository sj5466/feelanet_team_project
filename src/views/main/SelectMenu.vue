<template>
  <div id="select">
    <SelectMenuCont @setMenu="setMenu" />
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
  data: () => ({
    x: 1466,
  }),
  created() {
    window.addEventListener("scroll", this.Horizontal);
    window.addEventListener("scroll", this.scrollIconEvent);
  },
  destroyed() {
    window.removeEventListener("scroll", this.Horizontal);
    window.removeEventListener("scroll", this.scrollIconEvent);
  },
  methods: {
    Horizontal() {
      //--> 가로모드 생성
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
      // 2번째 섹션 가로모드
      let offset = scrollTop - document.querySelector("#select").offsetTop;
      // console.log(offset);
      if (scrollTop >= document.querySelector("#select").offsetTop) {
        // gsap.to 안에서는 자식 태그를 부르면 자동으로 불러진다
        // eslint-disable-next-line no-undef
        gsap.to("#menu", { left: -offset, ease: "linear" });
      }
      // requestAnimationFrame(this.Horizontal);44
    },
    scrollIconEvent() {
      //가로 스크롤 시 발생하는 이벤트(배경색, 아이콘)
      let selectItem = document.querySelector(".section__item");

      if (selectItem.getBoundingClientRect().x > -50) {
        document.querySelector(".menu__icon > div:nth-child(1)").style.transform = "translateY(80px)";
      } else if (selectItem.getBoundingClientRect().x > -1669) {
        document.querySelector(".menu__icon > div:nth-child(2)").style.transform = "translateY(80px)";
        document.querySelector(".menu__icon > div:nth-child(1)").style.transform = "translateY(10px)";
        selectItem.style.background = "beige";
      } else if (selectItem.getBoundingClientRect().x > -3338) {
        document.querySelector(".menu__icon > div:nth-child(3)").style.transform = "translateY(80px)";
        document.querySelector(".menu__icon > div:nth-child(2)").style.transform = "translateY(10px)";
        document.querySelector(".menu__icon > div:nth-child(1)").style.transform = "translateY(80px)";
        selectItem.style.background = "#ECE7DE";
      } else if (selectItem.getBoundingClientRect().x > -5007) {
        document.querySelector(".menu__icon > div:nth-child(4)").style.transform = "translateY(80px)";
        document.querySelector(".menu__icon > div:nth-child(3)").style.transform = "translateY(10px)";
        document.querySelector(".menu__icon > div:nth-child(2)").style.transform = "translateY(80px)";
        selectItem.style.background = "#E2E7DE";
      } else if (selectItem.getBoundingClientRect().x > -6676) {
        document.querySelector(".menu__icon > div:nth-child(5)").style.transform = "translateY(80px)";
        document.querySelector(".menu__icon > div:nth-child(4)").style.transform = "translateY(10px)";
        document.querySelector(".menu__icon > div:nth-child(3)").style.transform = "translateY(80px)";
        selectItem.style.background = "#EBE0EB";
      } else if (selectItem.getBoundingClientRect().x > -8345 && selectItem.getBoundingClientRect().x > -7000) {
        document.querySelector(".menu__icon > div:nth-child(5)").style.transform = "translateY(10px)";
        document.querySelector(".menu__icon > div:nth-child(4)").style.transform = "translateY(80px)";
        selectItem.style.background = "#F5E3E7";
      }
    },
    setMenu(menu) {
      //상위 컴퍼넌트로 메뉴에 대한 정보를 전달
      this.$emit("setMenu", menu);
    },
  },
};
</script>
<style>
._horizontal-scroll[data-v-5ce095ec]::-webkit-scrollbar {
  display: none;
}
</style>
