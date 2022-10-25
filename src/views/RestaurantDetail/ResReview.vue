<template>
  <div class="res_review">
    <div class="res_review_title">
      <h2>
        사용자 리뷰 {{ restaurantInfo[0].review.length }}
        <div class="text-right">
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined width="150" color="green" dark v-bind="attrs" v-on="on"> + ADD REVIEW </v-btn>
            </template>
            <v-sheet height="1000px">
              <div class="add_review">
                <h2>Add Review</h2>
              </div>
              <div class="add_review_input">
                <div><input type="text" placeholder="제목을 입력해주세요" /></div>
                <div><textarea placeholder="리뷰를 작성해주세요"></textarea></div>
                <div class="review_btns">
                  <v-btn class="mt-6" color="success" width="100" text @click="dialog = !dialog"> add </v-btn>
                  <v-btn class="mt-6" color="error" width="100" text @click="sheet = !sheet"> close </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-bottom-sheet>
          <v-dialog max-width="450" v-model="dialog">
            <div class="add_rating_title">
              <h2>Rating</h2>
            </div>
            <v-sheet class="rating_sheet">
              <div class="add_rating">
                <h2>소중한 별점을 남겨주세요!</h2>
                <v-rating background-color="orange lighten-10" color="orange" large class="rating_star"></v-rating>
              </div>
              <div>
                <div class="review_btn_rating text-center">
                  <v-btn class="mt-6" text @click="confirm = !confirm">ok </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-dialog>
          <v-dialog max-width="450" v-model="confirm">
            <v-sheet class="rating_sheet">
              <div class="add_rating">
                <h2>리뷰가 등록되었습니다.</h2>
              </div>
              <div>
                <div class="text-center">
                  <v-btn class="mt-6" width="100" text @click="isAddReview"> ok </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-dialog>
        </div>
      </h2>
    </div>
    <review-details />
  </div>
</template>
<script>
import ReviewDetails from "./ReviewDetails.vue";
import { mapState } from "vuex";

export default {
  components: { ReviewDetails },
  data: () => ({
    sheet: false,
    dialog: false,
    confirm: false,
  }),
  methods: {
    isAddReview() {
      this.sheet = !this.sheet;
      this.dialog = !this.dialog;
      this.confirm = !this.confirm;
    },
  },
  computed: {
    ...mapState(["restaurantInfo"]),
  },
};
</script>

<style></style>

ReviewDetail
