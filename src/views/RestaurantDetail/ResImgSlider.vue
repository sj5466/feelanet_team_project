<template>
  <v-sheet class="mx-auto" max-width="87%">
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(img, idx) in selectedRes.subImg" :key="idx">
        <v-img class="mx-2 table_slider_img" :src="img"></v-img>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "ResImgSlider",

  data() {
    return {};
  },
  props: {
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  mounted() {},

  methods: {},
};
</script>
