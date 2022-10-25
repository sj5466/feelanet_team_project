<template>
  <div style="height: 750px">
    <div class="res_info">
      <div class="info_detail">
        <table class="detail_table">
          <tbody>
            <tr>
              <td class="td_a_width">
                <v-rating
                  :value="restaurantInfo[0].rates"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="35"></v-rating>
              </td>
              <td rowspan="6"><v-img class="table_img main_img" :src="restaurantInfo[0].mainImg"></v-img></td>
            </tr>
            <tr>
              <td>
                <h1>{{ restaurantInfo[0].name }} <v-btn depressed color="error" class="like_btn"> 찜하기♥ </v-btn></h1>
              </td>
            </tr>
            <tr>
              <td>주소 -{{ restaurantInfo[0].addr }}</td>
            </tr>
            <tr>
              <td>영업시간 - {{ restaurantInfo[0].time }}</td>
            </tr>
            <tr>
              <td>전화번호 - {{ restaurantInfo[0].hp === '' ? '02 12345678' : restaurantInfo[0].hp }}</td>
            </tr>
            <tr>
              <td class="tag_style">
                <span> #{{ restaurantInfo[0].region }}맛집 #{{ restaurantInfo[0].title }}</span>
                <span v-for="menu in restaurantInfo[0].menu" :key="menu.name"> #{{ menu.name }} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <img-slider />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImgSlider from './ResImgSlider.vue';
export default {
  components: { ImgSlider },
  name: 'DetailInfo',

  data() {
    return {};
  },
  mounted() {
    // console.log(this.restaurantInfo.name);
  },
  computed: {
    ...mapState(['restaurantInfo']),
  },

  methods: {},
};
</script>
