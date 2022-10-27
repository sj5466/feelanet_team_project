<template>
  <div style="height: 750px">
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
                  <span @click="isEditing = !isEditing">
                    <v-btn
                      depressed
                      color="error"
                      class="like_btn"
                      outlined
                      v-if="isEditing"
                      @click="addFavorite(selectedRes)">
                      찜하기♡
                    </v-btn>
                    <v-btn depressed color="error" class="white--text" v-else @click="listDelete(selectedRes)">
                      취소하기
                    </v-btn>
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
              <td>전화번호 - {{ selectedRes.hp === '' ? '02 12345678' : selectedRes.hp }}</td>
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
import ImgSlider from './ResImgSlider.vue';
import EventBus from '@/EventBus/EventBus.js';

export default {
  components: { ImgSlider },
  name: 'DetailInfo',
  props: {
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: true,
    };
  },
  mounted() {
    // console.log(this.restaurantInfo.name);
    // console.log(this.selectedRes);
  },

  methods: {
    addFavorite(selectedRes) {
      //찜하기버튼을 누르면 마이페이지 Wish List 항목에 추가되는 함수
      EventBus.$emit('addFavorite', selectedRes);
    },
    listDelete(idx) {
      //취소하기 버튼 누르면 마이페이지에서 찜하기가 취소되는 함수
      EventBus.$emit('listDelete', idx);
    },
  },
};
</script>
