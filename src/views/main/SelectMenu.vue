<template>
  <div id="select">
    <SelectMenuCont :Horizontal="Horizontal" :scrollIconEvent="scrollIconEvent" />
    <SelectMenuIcon :scrollIconEvent="scrollIconEvent" />
  </div>
</template>

<script>
import SelectMenuCont from '../main/SelectMenuCont.vue';
import SelectMenuIcon from '../main/SelectMenuIcon.vue';

export default {
  components: {
    SelectMenuCont,
    SelectMenuIcon,
  },
  data: () => ({
    x: 1466,
  }),
  created() {
    window.addEventListener('scroll', this.Horizontal);
    window.addEventListener('scroll', this.scrollIconEvent);
  },
  mounted() {
    // let selectContainers = document.querySelectorAll('.section__container');
    // selectContainers.forEach(select => {
    //   console.log(select.getBoundingClientRect());
    // });
  },
  methods: {
    Horizontal() {
      //--> 가로모드 생성
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
      // 2번째 섹션 가로모드
      let offset = scrollTop - document.querySelector('#select').offsetTop;
      // console.log(offset);
      if (scrollTop >= document.querySelector('#select').offsetTop) {
        // gsap.to 안에서는 자식 태그를 부르면 자동으로 불러진다
        // eslint-disable-next-line no-undef
        gsap.to('#menu', { left: -offset, ease: 'linear' });
      }
      requestAnimationFrame(this.Horizontal);
    },
    scrollIconEvent() {
      let selectContainers = document.querySelectorAll('.section__container');
      let selectItem = document.querySelector('.section__item');
      let iconImg = document.querySelectorAll('.menu__icon__img');

      for (let i = 0; i < selectContainers.length; i++) {
        if (selectContainers[i].getBoundingClientRect().x <= 0) {
          var currentIndex = 0;
          if (selectItem.getBoundingClientRect().x > -1669) {
            currentIndex = 1;
            selectItem.style.background = 'beige';
          } else if (selectItem.getBoundingClientRect().x > -3338) {
            currentIndex = 2;
            selectItem.style.background = '#ECE7DE';
          } else if (selectItem.getBoundingClientRect().x > -5007) {
            currentIndex = 3;
            selectItem.style.background = '#E2E7DE';
          } else if (selectItem.getBoundingClientRect().x > -6676) {
            currentIndex = 4;
            selectItem.style.background = '#EBE0EB';
          } else if (selectItem.getBoundingClientRect().x > -8345) {
            currentIndex = 5;
            selectItem.style.background = '#F5E3E7';
          } else {
            currentIndex = 5;
            selectItem.style.background = '#F5E3E7';
          }

          iconImg.forEach(icon => {
            if (icon.className.split(' ')[1]) {
              icon.classList.remove('active');
            } else {
              document.querySelector('.menu__icon > div:nth-child(' + currentIndex + ')').classList.add('active');
            }
          });
        } else {
          document.querySelector('.menu__icon > div:nth-child(' + (i + 1) + ')').classList.remove('active');
        }
      }
    },
  },
};
</script>

<style>
#select {
  position: relative;
  z-index: 7000;
  width: 100vw;
  height: 548vw;
  /* height: 1057vh; */
  /* background: beige; */
}
._horizontal-scroll[data-v-5ce095ec]::-webkit-scrollbar {
  display: none;
}
</style>
