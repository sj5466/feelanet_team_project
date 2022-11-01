<template>
  <div>
    <div class="imgcard_box">
      <router-link :to="'/restaurant_detail/info/' + selectedRegion + '/' + selectedMenu + '/' + item.name">
        <v-card class="mx-auto my-8 imgcard" max-width="374" style="float: left" @click="getDetail(item, item.name)">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-img height="400" :src="item.mainImg"></v-img>
          <v-card-text>
            <div class="my-3 text-subtitle-3 card_category">
              {{ selectedRegion }} / {{ item.title }}
              <v-rating :value="item.rates" color="amber" style="float: right" dense half-increments readonly size="20"></v-rating>
            </div>
            <div class="card_name">{{ item.name }}</div>
          </v-card-text>
        </v-card>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImgCard",
  data() {
    return {};
  },
  props: {
    // 선택한 지역
    selectedRegion: {
      type: String,
      required: true,
    },

    //선택한 메뉴
    selectedMenu: {
      type: String,
      required: true,
    },

    //선택한 식당 정보
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getDetail(item, search) {
      sessionStorage.removeItem("Item"); // 기존 아이템 초기화
      sessionStorage.setItem("Item", JSON.stringify(item)); // 선택한 식당 정보 session에 저장
      sessionStorage.setItem("search", search); // 식당이름 session에 저장
      this.$store.dispatch("setItem", item); // 선택한 식당 정보 store에 저장
    },
  },
};
</script>
