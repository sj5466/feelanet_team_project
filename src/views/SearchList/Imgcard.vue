<template>
  <div>
    <div class="imgcard_box" @click="getDetail(item), $router.push({ name: 'res_info' }).catch(() => {})">
      <v-card class="mx-auto my-8 imgcard" max-width="374" style="float: left">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>
        <v-img height="400" :src="item.mainImg"></v-img>
        <v-card-text>
          <div class="my-3 text-subtitle-3 card_category">
            {{ item.region }} / {{ item.title }}
            <v-rating :value="item.rates" color="amber" style="float: right" dense half-increments readonly size="20"></v-rating>
          </div>
          <div class="card_name">{{ item.name }}</div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from "vuex";
export default {
  name: "ImgCard",
  data() {
    return {};
  },

  methods: {
    // ...mapMutations(["selectRes"]),
    getDetail(item) {
      // console.log(item);
      this.$emit("getDetail", item);
    },
  },
  components: {},
  props: {
    item: {
      type: Object,
    },
  },
};
</script>
