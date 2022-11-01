<template>
  <div>
    <table class="review" v-for="(review, idx) in resReviews.review" :key="review.userId">
      <tbody>
        <tr>
          <td rowspan="2" class="review_td_a">
            <v-avatar color="red" width="60" height="60">
              <span class="white--text text-h5"><i class="fa-solid fa-user"></i></span>
            </v-avatar>
          </td>
          <td class="review_td_b">{{ review.userId }}</td>
          <td rowspan="2" class="review_td_c">
            <i class="fa-solid fa-pen-to-square" @click="editReview(review.title, review.content, idx)"></i
            ><i class="fa-solid fa-trash" @click="deleteReview(idx)"></i>
          </td>
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
  </div>
</template>
<script>
export default {
  props: {
    // 선택한 식당 리뷰
    resReviews: {
      type: Object,
      required: true,
    },
  },
  name: "ReviewDetails",
  methods: {
    // 리뷰 수정
    editReview(title, content, idx) {
      this.$emit("editReview", title, content, idx);
    },

    // 리뷰 삭제
    deleteReview(idx) {
      var index = this.resReviews.review.findIndex(function (item, num) {
        return num === idx;
      });
      // eslint-disable-next-line vue/no-mutating-props
      this.resReviews.review.splice(index, 1);
    },
  },
};
</script>

<style></style>
