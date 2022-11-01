<template>
  <v-pagination class="pagenation" v-model="page" :length="Math.floor(totalNum / 6) === 1 ? 2 : 1" square @input="updatePage"></v-pagination>
</template>

<script>
export default {
  name: "ListPagenation",
  props: ["totalNum"], //보여질 식당 데이터 개수
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    //페이지 이동시 선택한 pageNumber 전달
    updatePage() {
      this.$emit("updatePage", this.page);
    },
  },
};
</script>
