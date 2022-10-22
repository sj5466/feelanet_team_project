<template>
    <v-pagination class="pagenation" v-model="page" :length="10" square></v-pagination>
</template>

<script>
export default {
  name: "ListPagenation",
  data() {
    return {
      page: 1,
    };
  },
};
</script>
