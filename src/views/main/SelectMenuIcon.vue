<template>
  <div id="icon">
    <div class="menu__icon">
      <div
        class="menu__icon__img"
        v-for="(icon, idx) in icons"
        :key="idx"
        @click="scroll(icon.name)"
      >
        <img :src="icon.image" :alt="icon.alt" />
      </div>
    </div>
  </div>
  <!-- //icon -->
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
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
#icon {
  position: fixed;
  z-index: 7000;
  left: 0;
  bottom: 0;
  padding: 0 2em;
  max-height: 14.4rem;
  overflow: hidden;
}
.menu__icon {
  display: flex;
  font-size: 0;
}
.menu__icon__img {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3.5rem;
  transition: 1s;
}
.menu__icon__img {
  transform: translateY(0);
}
.menu__icon__img.down {
  transform: translateY(100px);
}
.menu__icon__img:hover {
  transform: translateY(0px);
}
.menu__icon__img.active {
  transform: translateY(0px);
}
.menu__icon__img img {
  width: 75% !important;
}
</style>
