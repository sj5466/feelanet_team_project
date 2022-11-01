<template>
  <div id="icon">
    <div class="menu__icon">
      <div class="menu__icon__img" v-for="(icon, idx) in icons" :key="idx" @click="scroll(icon.name)">
        <img :src="icon.image" :alt="icon.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        id: 0,
        name: "korean__food",
        image: "../../assets/image/menu1@3x.png",
        alt: "한식",
        on: 0,
      },
      {
        id: 1,
        name: "chinese__food",
        image: "../../assets/image/menu2@3x.png",
        alt: "중식",
        on: 0,
      },
      {
        id: 2,
        name: "japan__food",
        image: "../../assets/image/menu3@3x.png",
        alt: "일식",
        on: 0,
      },
      {
        id: 3,
        name: "western__food",
        image: "../../assets/image/menu4@3x.png",
        alt: "양식",
        on: 0,
      },
      {
        id: 4,
        name: "fast__food",
        image: "../../assets/image/menu5@3x.png",
        alt: "패스트푸드",
        on: 0,
      },
    ],
  }),
  props: ["scrollIconEvent"],
  methods: {
    scroll(refName) {
      // 아이콘을 클릭시 해당 페이지로 화면을 전환하는 함수
      const element = document.getElementById(refName);
      if (element.id === "korean__food") {
        window.scrollTo({ top: 2900, behavior: "smooth" });
      } else if (element.id === "chinese__food") {
        window.scrollTo({ top: 4750, behavior: "smooth" });
      } else if (element.id === "japan__food") {
        window.scrollTo({ top: 6700, behavior: "smooth" });
      } else if (element.id === "western__food") {
        window.scrollTo({ top: 8600, behavior: "smooth" });
      } else if (element.id === "fast__food") {
        window.scrollTo({ top: 10520, behavior: "smooth" });
      }
    },
  },
};
</script>
