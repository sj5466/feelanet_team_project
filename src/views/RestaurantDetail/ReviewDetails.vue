<template>
  <div>
    <table class="review">
      <tbody>
        <tr>
          <td rowspan="2" class="review_td_a">
            <v-avatar color="red" width="60" height="60">
              <span class="white--text text-h5">FL</span>
            </v-avatar>
          </td>
          <td class="review_td_b">FoodLover79</td>
          <td rowspan="2" class="review_td_c"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
        </tr>
        <tr>
          <td>
            <v-rating :value="4.5" color="amber" style="float: left" dense half-increments readonly size="20"></v-rating>
            <span class="review_date" style="float: left">2022-10-16</span>
          </td>
          <td />
        </tr>
        <tr>
          <td colspan="3" class="review_contnents_title review_contnents">스시 오마카세 (디너) 예약금</td>
        </tr>
        <tr>
          <td colspan="3" class="review_contnents">
            인테리어가 잘되있어 기념일날 가기 좋아요 샤리나 네타 양도 괜찮습니다 앵콜스시는 없네용 맛잇게 잘먹었으나 너무 기대하고 가서 그런가 주실때 간략한
            설명 정도? 끝 쪽에서 만들어 오셔서 오마카세라는 느낌은 많이 없었어요 약간 아쉬움이 있네요
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="review">
      <tbody>
        <tr>
          <td rowspan="2" class="review_td_a">
            <v-avatar width="60" height="60">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </td>
          <td class="review_td_b">foodLover79</td>
          <td rowspan="2" class="review_td_c"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
        </tr>
        <tr>
          <td>
            <v-rating :value="4.5" color="amber" style="float: left" dense half-increments readonly size="20"></v-rating>
            <span class="review_date" style="float: left">2022-10-16</span>
          </td>
          <td />
        </tr>
        <tr>
          <td colspan="3" class="review_contnents_title review_contnents">재방문입니다.</td>
        </tr>
        <tr>
          <td colspan="3" class="review_contnents">
            쎈 가격이지만 맘 먹고 디너 한 번 다녀왔어요. 한 24가지는 나와서, 사진에 다 올리진 못 했는데. 다 이쁜 접시에 한 입씩이라고 해도 엄청 이쁘고 배부르게
            먹었네요! 계속 내주셔서, 나올때마다 먹느라 바빴어요ㅎㅎ 다음에 특별한 날이면 가족들하고 한 번 오고 싶어요!
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="review">
      <tbody>
        <tr>
          <td rowspan="2" class="review_td_a">
            <v-avatar color="indigo" width="60" height="60">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </td>
          <td class="review_td_b">foodLover79</td>
          <td rowspan="2" class="review_td_c"><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
        </tr>
        <tr>
          <td>
            <v-rating :value="4.5" color="amber" style="float: left" dense half-increments readonly size="20"></v-rating>
            <span class="review_date" style="float: left">2022-10-16</span>
          </td>
          <td />
        </tr>
        <tr>
          <td colspan="3" class="review_contnents_title review_contnents">디너(1부/2부)</td>
        </tr>
        <tr>
          <td colspan="3" class="review_contnents">
            결혼기념일에 방문한 스시오마카세 히토무라 미리 네이버 예약하고 방문했어요. 예약 정시에 요리가 제공되고 다양한 요리를 적정한 시간에 먹을 수 있어서
            정말 좋았습니다. 다음에도 또 방문하려구요♥️
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
export default {
  name: "ReviewDetails",
};
</script>

<style></style>
