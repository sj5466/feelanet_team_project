<template>
  <div style="height: 750px">
    <div class="res_info">
      <div class="info_detail">
        <table class="detail_table">
          <tbody>
            <tr>
              <td class="td_a_width">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="35"></v-rating>
              </td>
              <td rowspan="6">
                <v-img
                  class="table_img"
                  src="https://cdn.class101.net/images/251e72fa-d01c-4284-9ac2-54a7d7239e66"></v-img>
              </td>
            </tr>
            <tr>
              <td>
                <h1>하루 오마카세 <v-btn depressed color="error" class="like_btn"> 찜하기♥ </v-btn></h1>
              </td>
            </tr>
            <tr>
              <td>주소 - 서울시 강남구 서초대로 14길</td>
            </tr>
            <tr>
              <td>영업시간 - 11:00 ~ 20:00</td>
            </tr>
            <tr>
              <td>예약 - 02.1234.5678</td>
            </tr>
            <tr>
              <td class="tag_style">#강남구 #일식 #오마카세 #강남역맛집 #스시</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 이미지 슬라이드 -->
    <img-slider />
  </div>
</template>

<script>
import ImgSlider from './ResImgSlider.vue';
export default {
  components: { ImgSlider },
  name: 'DetailInfo',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
