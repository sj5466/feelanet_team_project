<template>
  <div id="home">
    <!-- <p>Home 입니다.</p> -->
    <!-- <router-view /> -->
    <SelectRegion @setRegion="setRegion" />
    <SelectMenu @setMenu="setMenu" />
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
  methods: {
    setRegion(name) {
      this.$emit("setRegion", name);
    },
    setMenu(menu) {
      this.$emit("setMenu", menu);
    },
  },
};
</script>
