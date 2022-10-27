<template>
  <div class="app">
    <v-container class="restaurant">
      <v-layout>
        <v-flex>
          <v-btn
            class="ma-2 backBtn black--text"
            color="white"
            dark
            @click="$router.push({ name: 'search_list' }).catch(() => {})"
            ><v-icon dark left class="black--text"> mdi-arrow-left </v-icon>Back
          </v-btn>
          <v-sheet class="tab_menu">
            <tab-menu :selectedRes="selectedRes" />
          </v-sheet>
          <v-sheet class="tab_info">
            <router-view :selectedRes="selectedRes" />
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
    <FoooterSection />
  </div>
</template>
<script>
import TabMenu from './TabMenu.vue';
import FoooterSection from '@/components/common/FooterSection.vue';
export default {
  components: { TabMenu, FoooterSection },
  name: 'RestaurantDetail',
  props: {
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  mounted: {},
  data() {
    return {
      reviewCount: '',
    };
  },
  methods: {},
};
</script>

<style>
.app {
  position: relative;
}
.backBtn {
  position: absolute;
  left: 2vw;
  top: 13vh;
}
.restaurant {
  min-height: 44vw;
}
@media (max-width: 1800px) {
  .restaurant {
    min-height: 60vw;
  }
}
</style>
