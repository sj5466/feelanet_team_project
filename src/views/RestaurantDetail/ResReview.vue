<template>
  <div class="res_review">
    <div class="res_review_title">
      <h2>
        사용자 리뷰 ( {{ selectedRes.review.length }} )
        <div class="text-right">
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined width="150" color="green" dark v-bind="attrs" v-on="on" class="addBtn"> + ADD REVIEW </v-btn>
            </template>
            <v-sheet height="1000px">
              <div class="add_review">
                <h2>Add Review</h2>
              </div>
              <div class="add_review_input">
                <div><input type="text" placeholder="제목을 입력해주세요" v-model="reviewTitle" /></div>
                <div><textarea placeholder="리뷰를 작성해주세요" v-model="reviewContent"></textarea></div>
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
                <v-rating background-color="orange lighten-10" color="orange" large class="rating_star" @input="updateModel({ $event })"></v-rating>
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
    <review-details :resReviews="resReviews" @editReview="editReview" />
  </div>
</template>
<script>
import ReviewDetails from "./ReviewDetails.vue";

export default {
  components: { ReviewDetails },
  props: {
    // 선택한 식당 정보
    selectedRes: {
      type: Object,
      required: true,
    },
  },
  created() {
    // 리뷰
    this.resReviews = this.selectedRes;
  },
  data: () => ({
    // 모달
    sheet: false,
    dialog: false,
    confirm: false,
    reviewTitle: "", //리뷰 제목
    reviewContent: "", //리뷰 내용
    modifyReviewIdx: null, //리뷰 index
    setRates: 0, //리뷰 별점
    resReviews: [], // 리뷰
  }),

  methods: {
    // 리뷰 추가하는 함수
    isAddReview() {
      // 모달 닫기
      this.sheet = !this.sheet;
      this.dialog = !this.dialog;
      this.confirm = !this.confirm;
      // eslint-disable-next-line vue/no-mutating-props

      // idx로 해당 리뷰 찾아서 수정
      if (this.modifyReviewIdx !== null) {
        this.resReviews.review[this.modifyReviewIdx].title = this.reviewTitle;
        this.resReviews.review[this.modifyReviewIdx].content = this.reviewContent;
        this.resReviews.review[this.modifyReviewIdx].rates = this.setRates;
        this.reviewTitle = "";
        this.reviewContent = "";
        this.modifyReviewIdx = null;
      } else {
        var today = new Date().toLocaleDateString(); // 오늘 날짜
        // eslint-disable-next-line vue/no-mutating-props
        this.resReviews.review.push({
          writeDay: today,
          title: this.reviewTitle,
          content: this.reviewContent,
          userId: "test",
          rates: this.setRates,
        });
        this.reviewTitle = "";
        this.reviewContent = "";
        this.modifyReviewIdx = null;
      }
    },

    // 리뷰 수정하는 함수
    editReview(title, content, idx) {
      this.reviewTitle = title;
      this.reviewContent = content;
      this.sheet = !this.sheet;
      this.modifyReviewIdx = idx;
    },

    // 별점 수정
    updateModel($event) {
      this.setRates = $event.$event;
    },
  },
};
</script>

<style></style>
