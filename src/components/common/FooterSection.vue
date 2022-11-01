<template>
  <div id="footer">
    <div class="footer__logo">
      <em>Yoichi</em>
      <span>맛집 검색 사이트</span>
    </div>
    <!-- //footer__ligo -->
    <div class="footer__contents">
      <ul class="footer__list">
        <li v-for="(list, idx) in footerlists" :key="idx">
          <a href="javascript:return false;">{{ list }}</a>
        </li>
      </ul>
      <div class="footer__sns">
        <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </div>
      <div class="footer__copyright">
        <span>&copy; 2022 YOICHI ALL RIGHTS RESERVED.</span>
      </div>
    </div>
    <!-- //footer__contents -->
  </div>
  <!-- //footer -->
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-instagram", "mdi-facebook", "mdi-twitter", "mdi-youtube"],
    footerlists: ["회사소개", "공지사항", "처리방침", "이용약관", "법적조치"],
  }),
};
</script>

<style></style>
