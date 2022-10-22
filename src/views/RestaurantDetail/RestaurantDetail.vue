<template>
  <div class="app">
    <v-container>
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
            <tab-menu />
          </v-sheet>
          <v-sheet class="tab_info">
            <router-view />
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import TabMenu from './TabMenu.vue';
export default {
  components: { TabMenu },
  name: 'RestaurantDetail',
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
</style>
