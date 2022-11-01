<template>
  <div id="home">
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
