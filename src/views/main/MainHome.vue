<template>
  <div id="home">
    <!-- <p>Home 입니다.</p> -->
    <router-view />
    <SelectRegion />
    <SelectMenu />
  </div>
</template>

<script>
import SelectRegion from "../main/SelectRegion.vue";
import SelectMenu from "../main/SelectMenu";
export default {
  components: {
    SelectRegion,
    SelectMenu,
  },
};
</script>

<style></style>
