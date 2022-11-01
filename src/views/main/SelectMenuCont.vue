<template>
  <div id="menu">
    <div class="menu__item items">
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
    <div class="section__item items" ref="sectionItemData">
      <div class="section__container" v-for="(item, idx) in items" :key="idx" :id="item.name" :class="item.name" :ref="item.name">
        <div class="contents">
          <div class="side__title">
            <p>
              {{ item.side1 }}<span class="line"></span><span>{{ item.side2 }}</span>
            </p>
          </div>
          <router-link :to="'/search_list/' + region + '/' + menu">
            <div class="image">
              <img :src="item.image" :alt="item.title" @click="setMenu(item.title)" />
              <div class="click__effect">
                <i class="fa-regular fa-hand-pointer"></i>
                <span>click</span>
              </div>
            </div>
          </router-link>
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
    region: "",
    menu: "",
  }),

  methods: {
    setMenu(menu) {
      this.region = sessionStorage.getItem("region");
      sessionStorage.setItem("menu", menu);
      this.menu = sessionStorage.getItem("menu");
    },
  },
};
</script>
