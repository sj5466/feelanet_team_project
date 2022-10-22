<template>
  <div id="menu">
    <div class="menu__item">
      <h2 class="menu__item__title">
        <i class="fa-solid fa-quote-left"></i>
        어떤 음식을 원하시나요?
        <i class="fa-solid fa-quote-right"></i>
        <p>원하는 음식 종류를 선택해주세요.</p>
        <img src="../../assets/image/arrow@3x.png" alt="화살표" class="arrow" />
      </h2>
      <!-- //menu__title -->
      <div class="menu__item__desc">
        <p>
          오늘 뭐 먹지 고민이 되시나요? <br />
          지인과의 약속에 아직도 음식 메뉴를 선택하지 않으셨다구요!? <br />
          그렇다면 <em>Yoichi</em> 이용해 보세요! <br />
          서울 지역의 다양한 식당의 정보와 리뷰를 한눈에 확인 하실 수 있습니다.
          <span>
            음식 이미지를 선택하시면 추천 음식 창으로 이동 할 수 있습니다.<br />
            아이콘을 선택하시면 해당 페이지로 화면이 전환됩니다.
          </span>
        </p>
      </div>
    </div>
    <!-- //menu__item -->
    <div class="section__item">
      <div
        class="section__container"
        v-for="(item, idx) in items"
        :key="idx"
        :id="item.name"
        :class="item.name"
        :ref="item.name"
      >
        <div class="contents">
          <div class="side__title">
            <span>{{ item.side1 }}</span>
            <div class="line"></div>
            {{ item.side2 }}
          </div>
          <div
            class="image"
            @click="$router.push({ name: 'search_list' }).catch(() => {})"
          >
            <img :src="item.image" :alt="item.title" />
            <div class="click__effect">
              <i class="fa-regular fa-hand-pointer"></i>
              <span>click</span>
            </div>
          </div>
          <div class="desc">
            <h3>{{ item.title }}</h3>
            <span>
              {{ item.desc }}
            </span>
          </div>
        </div>
      </div>
      <!-- //section__item -->
    </div>
    <!-- // -->
  </div>
  <!-- //menu -->
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 0,
        name: "korean__food",
        side1: "koreanfood",
        side2: "choose",
        image: "../../assets/image/koreafood@3x.jpg",
        title: "한식",
        desc: "맛도 좋고 영양가도 좋은 한식을 오늘의 메뉴를 선택하시는 건 어떤가요? 어머니의 밥상이 생각나는 우리들의 밥상 한식을 선택해보세요.",
      },
      {
        id: 1,
        name: "chinese__food",
        side1: "chinesefood",
        side2: "choose",
        image: "../../assets/image/chinesefood@3x.jpg",
        title: "중식",
        desc: "마라탕부터 짜장면까지 다양한 종류의 중화요리들이 여러분을 기다리고 있습니다. 서울지역 중식요리를 통해 식도락을 떠나 보세요.",
      },
      {
        id: 2,
        name: "japan__food",
        side1: "japanesefood",
        side2: "choose",
        image: "../../assets/image/japanesefood@3x.jpg",
        title: "일식",
        desc: "일본식 가정식부터 초밥, 라멘까지 일본만의 특유 감성이 깃들여 있는 서울 지역 일식 맛집들을 만나보실 수 있습니다. ",
      },
      {
        id: 3,
        name: "western__food",
        side1: "westernfood",
        side2: "choose",
        image: "../../assets/image/westernfood@3x.jpg",
        title: "양식",
        desc: "특별한 날 분위기 좋은 곳에서 식사 어떠신가요? 스테이크, 토마호크, 파스타 등 다양한 양식 식당들을 만나 보실 수 있습니다.",
      },

      {
        id: 4,
        name: "fast__food",
        side1: "fastfood",
        side2: "choose",
        image: "../../assets/image/fastfood@3x.jpg",
        title: "패스트푸드",
        desc: "바쁜 일상 속 간편하게 먹을 수 있는 패스트푸드점 부터 여행을 온듯한 분위기를 연출하는 맛집 등 다양한 패스트푸드 식당들을 만나보실수 있습니다.",
      },
    ],
    select: 0,
  }),
  props: ["scrollEvent"],
};
</script>

<style>
#menu {
  height: 100%;
  width: 490vh;
  z-index: 4000;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  font-family: "GmarketSansLight";
}
#menu > div {
  position: relative;
  /* width: 200vh; */
  height: 100vh;
}
.menu__item {
  position: relative;
  min-width: 100vw;
  min-height: 63em;
  padding: 11em 0 28em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}
.menu__item__title {
  font-size: 3rem !important;
  font-family: "GmarketSansBold";
}
.menu__item__title .fa-quote-left {
  margin-right: 10px;
}
.menu__item__title .fa-quote-right {
  margin-left: 10px;
}
.menu__item__title p {
  font-size: 2rem !important;
  font-family: "GmarketSansMedium";
}
.menu__item__title .arrow {
  position: absolute;
  right: 2.5em;
  top: 62%;
  width: 130px;
  animation: downMove 1s infinite;
}
.menu__item__desc {
  margin-top: 3rem;
  font-size: 1.2rem;
  line-height: 2rem;
  width: 50%;
  margin-bottom: 0;
}
.menu__item__desc p {
  margin-bottom: 0 !important;
}
.menu__item__desc span {
  display: block;
  margin-top: 3rem;
}

.section__item {
  width: 1000vw;
  background: beige;
  display: flex;
}
.section__container {
  min-width: 100vw;
  position: relative;
  max-height: 69em;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: 1s;
}
.contents {
  margin-top: 11em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 80%;
}
.contents::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5em;
  transform: translateX(-50%);
  width: 100%;
  height: 15rem;
  border-radius: 15px;
}
#korean__food .contents::after {
  background: #f2f0d3;
}
#chinese__food .contents::after {
  background: #ebdfcb;
}
#japan__food .contents::after {
  background: #dce6d2;
}
#western__food .contents::after {
  background: #e2d7e2;
}
#fast__food .contents::after {
  background: #ead3d8;
}
.side__title {
  z-index: 12;
  text-transform: uppercase;
  font-size: 1.4rem;
  transform: rotate(90deg);
  position: absolute;
  left: -8em;
  top: 37%;
}
.side__title .line {
  display: inline-block;
  width: 53px;
  height: 1px;
  background: #000;
}
.image {
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 56em;
  height: 35em;
  overflow: hidden;
  cursor: pointer;
  background: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  font-family: "GmarketSansMedium";
  transition: 10s;
}
.image:hover img {
  opacity: 0.8;
}
.image:hover .click__effect {
  display: block;
}
.image img {
  width: 800px;
}
.click__effect {
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.click__effect i {
  line-height: 50px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  font-size: 30px;
}
.click__effect span {
  font-size: 35px;
  font-weight: 700;
  margin-left: 10px;
  color: #fff;
  text-shadow: 5px 5px 20px rgba(0, 0, 0, 1);
}
.desc {
  /* background: pink; */
  white-space: normal;
  width: 47em;
  z-index: 10;
  text-align: left;
  margin-left: 1em;
  margin-top: 3.5em;
}
.desc h3 {
  font-size: 2.3rem;
  margin-bottom: 1.3em;
  font-weight: bold;
}
.desc span {
  font-size: 1.2rem;
  line-height: 1.9rem;
}
/* animation */
@keyframes downMove {
  0% {
    transform: translateX(0.5vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
