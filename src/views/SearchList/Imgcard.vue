<template>
  <div>
    <div v-for="arr in isArray" :key="arr.id" class="clearfix imgcard_box" @click="$router.push({ name: 'res_info' })">
      <v-card class="mx-auto my-8 imgcard" max-width="374" style="float: left">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>
        <v-img height="400" :src="arr.src"></v-img>
        <v-card-text>
          <div class="my-3 text-subtitle-3 card_category">
            {{ arr.category }}
            <v-rating :value="parseInt(arr.rating)" color="amber" style="float: right" dense half-increments readonly size="20"></v-rating>
          </div>
          <div class="card_name">{{ arr.name }}</div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImgCard",
  data() {
    return {
      isArray: [
        { id: 1, name: "하루 오마카세", category: "강남구 / 일식", src: "https://cdn.class101.net/images/251e72fa-d01c-4284-9ac2-54a7d7239e66", rating: "4.5" },
        { id: 2, name: "연호초밥", category: "강남구 / 일식", src: "https://cdn.imweb.me/thumbnail/20220305/df4a4f9664214.jpg", rating: "5" },
        { id: 3, name: "이젠스시", category: "강남구 / 일식", src: "https://i.ytimg.com/vi/73oDKtmqMcg/maxresdefault.jpg", rating: "4" },
        {
          id: 4,
          name: "이랴샤이",
          category: "강남구 / 일식",
          src: "https://blog.kakaocdn.net/dn/3viX4/btqFa7AlqgR/p3tjGWZ8bBLX3XNjNAXa30/img.jpg",
          rating: "3.5",
        },
        {
          id: 5,
          name: "하루 오마카세",
          category: "강남구 / 일식",
          src: "https://mp-seoul-image-production-s3.mangoplate.com/mango_pick/artpkhhvmxfmj_.jpg",
          rating: "5",
        },
        {
          id: 6,
          name: "이호라멘",
          category: "강남구 / 일식",
          src: "https://blog.kakaocdn.net/dn/meVt7/btqYIjAGYqQ/uiDSfGaZDFKxbGkKZZpDL0/img.jpg",
          rating: "4.5",
        },
        { id: 7, name: "잔월", category: "강남구 / 일식", src: "https://media-cdn.tripadvisor.com/media/photo-s/14/4d/3c/79/8-20.jpg", rating: "3.5" },
        { id: 8, name: "하루 오마카세", category: "강남구 / 일식", src: "https://i.ytimg.com/vi/vTFo2HuuJoA/maxresdefault.jpg", rating: "4" },
        { id: 9, name: "이춘복 참치", category: "강남구 / 일식", src: "https://sitem.ssgcdn.com/65/73/80/item/1000038807365_i1_1200.jpg", rating: "4" },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>
