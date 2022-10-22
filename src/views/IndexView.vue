<template>
  <div>
    <HeaderSection />
    <router-view />
    <!-- <FooterSection /> -->
  </div>
</template>

<script>
import HeaderSection from '@/components/common/HeaderSection.vue';
// import FooterSection from '@/components/common/FooterSection.vue';
import axios from 'axios';
export default {
  components: {
    HeaderSection,
    // FooterSection,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      axios
        .get(
          'https://seoul.openapi.redtable.global/api/food/img?serviceKey=Jk1Pqe2UKNpRhMkZ7Fe7EdaFBUDjaRgxtw4TSgBuajifAEVUK9o1wArWSsmggcTN',
        )
        .then(function (response) {
          console.log(response.data.body[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@import '@/assets/css/style.css';
@import '@/assets/css/fonts.css';
</style>
