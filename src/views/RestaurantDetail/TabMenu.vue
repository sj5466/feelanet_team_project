<template>
  <div>
    <v-toolbar flat class="tab_margin">
      <template>
        <v-tabs v-model="tabs" fixed-tabs color="black">
          <v-tab href="#mobile-tabs-5-1" @click="$router.push({ name: 'res_info' })">
            <span class="tab_title_size">Detail</span>
          </v-tab>
          <v-tab href="#mobile-tabs-5-2" @click="$router.push({ name: 'res_review' }).catch(() => {})"> Review ({{ selectedRes.review.length }})</v-tab>
          <v-tab href="#mobile-tabs-5-3" @click="$router.push({ name: 'res_menu' }).catch(() => {})"> Menu </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  props: {
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tabs: null,
    };
  },
};
</script>
