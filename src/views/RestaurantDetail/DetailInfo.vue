<template>
  <div class="detail">
    <div class="res_info">
      <div class="info_detail">
        <table class="detail_table">
          <tbody>
            <tr>
              <td class="td_a_width">
                <v-rating :value="selectedRes.rates" color="amber" dense half-increments readonly size="35"></v-rating>
              </td>
              <td rowspan="6"><v-img class="table_img main_img" :src="selectedRes.mainImg"></v-img></td>
            </tr>
            <tr>
              <td>
                <h1>
                  {{ selectedRes.name }}
                  <span @click="isActive(selectedRes.id)">
                    <v-btn depressed color="error" class="like_btn" outlined v-if="!selectedRes.active" @click="addFavorite(selectedRes)"> 찜하기♡ </v-btn>
                    <v-btn depressed color="error" class="white--text" v-else @click="listDelete(selectedRes)"> 취소하기 </v-btn>
                  </span>
                </h1>
              </td>
            </tr>
            <tr>
              <td>주소 -{{ selectedRes.addr }}</td>
            </tr>
            <tr>
              <td>영업시간 - {{ selectedRes.time }}</td>
            </tr>
            <tr>
              <td>전화번호 - {{ selectedRes.hp === "" ? "02 12345678" : selectedRes.hp }}</td>
            </tr>
            <tr>
              <td class="tag_style">
                <span> #{{ selectedRes.region }}맛집 #{{ selectedRes.title }}</span>
                <span v-for="menu in selectedRes.menu" :key="menu.name"> #{{ menu.name }} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <img-slider :selectedRes="selectedRes" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import ImgSlider from "./ResImgSlider.vue";
import EventBus from "@/EventBus/EventBus.js";

export default {
  components: { ImgSlider },
  name: "DetailInfo",
  props: {
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },

  mounted() {
    //Wish List의 하트 아이콘을 눌러 해당 내용을 삭제할 시 찜하기 버튼에 발생하는 이벤트
    EventBus.$on("favoritBtnActive", this.isActive);
  },
  methods: {
    addFavorite(selectedRes) {
      //찜하기버튼을 누르면 마이페이지 Wish List 항목에 추가되는 함수
      EventBus.$emit("addFavorite", selectedRes);
    },
    listDelete(idx) {
      //취소하기 버튼 누르면 마이페이지에서 찜하기가 취소되는 함수
      EventBus.$emit("listDelete", idx);
    },
    isActive(item) {
      //찜하기 버튼을 클릭시 발생하는 이벤트
      // eslint-disable-next-line vue/no-mutating-props
      if (this.selectedRes.id === item) {
        // eslint-disable-next-line vue/no-mutating-props
        this.selectedRes.active = !this.selectedRes.active;
      }
    },
  },
};
</script>
