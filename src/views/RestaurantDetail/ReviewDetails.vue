<template>
  <div>
    <table class="review" v-for="review in restaurantInfo[0].review" :key="review.userId">
      <tbody>
        <tr>
          <td rowspan="2" class="review_td_a">
            <v-avatar color="red" width="60" height="60">
              <span class="white--text text-h5">{{ review.userId }}</span>
            </v-avatar>
          </td>
          <td class="review_td_b">{{ review.userId }}</td>
          <td rowspan="2" class="review_td_c"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
        </tr>
        <tr>
          <td>
            <v-rating :value="review.rates" color="amber" style="float: left" dense half-increments readonly size="20"></v-rating>
            <span class="review_date" style="float: left">{{ review.writeDay }}</span>
          </td>
          <td />
        </tr>
        <tr>
          <td colspan="3" class="review_contnents_title review_contnents">{{ review.title }}</td>
        </tr>
        <tr>
          <td colspan="3" class="review_contnents">
            {{ review.content }}
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="show_more">더보기 ▼</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ReviewDetails",
  computed: {
    ...mapState(["restaurantInfo"]),
  },
};
</script>

<style></style>
