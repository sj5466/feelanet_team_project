<template>
  <v-sheet class="mx-auto" max-width="87%">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(img, idx) in restaurantInfo[0].subImg" :key="idx">
        <v-img class="mx-2 table_slider_img" :src="img"></v-img>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ResImgSlider",

  data() {
    return {
      slideImg: [
        { id: 1, src: "https://cdn.imweb.me/thumbnail/20220305/df4a4f9664214.jpg" },
        { id: 2, src: "https://i.ytimg.com/vi/73oDKtmqMcg/maxresdefault.jpg" },
        {
          id: 3,
          src: "https://sitem.ssgcdn.com/65/73/80/item/1000038807365_i1_1200.jpg",
        },
        {
          id: 4,

          src: "https://mp-seoul-image-production-s3.mangoplate.com/mango_pick/artpkhhvmxfmj_.jpg",
        },
        {
          id: 5,

          src: "https://blog.kakaocdn.net/dn/meVt7/btqYIjAGYqQ/uiDSfGaZDFKxbGkKZZpDL0/img.jpg",
        },
        { id: 6, src: "https://media-cdn.tripadvisor.com/media/photo-s/14/4d/3c/79/8-20.jpg" },
        { id: 7, src: "https://i.ytimg.com/vi/vTFo2HuuJoA/maxresdefault.jpg" },
        { id: 8, src: "https://sitem.ssgcdn.com/65/73/80/item/1000038807365_i1_1200.jpg" },
      ],
    };
  },

  mounted() {},
  computed: {
    ...mapState(["restaurantInfo"]),
  },
  methods: {},
};
</script>
