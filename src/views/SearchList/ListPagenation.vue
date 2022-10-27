<template>
  <v-pagination class="pagenation" v-model="page" :length="5" square @input="updatePage"></v-pagination>
</template>

<script>
export default {
  name: "ListPagenation",
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    updatePage() {
      this.$emit("updatePage", this.page);
    },
  },
};
</script>
