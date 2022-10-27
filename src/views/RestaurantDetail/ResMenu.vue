<template>
  <div class="res_menu">
    <h2>메뉴 ( {{ selectedRes.menu.length }} )</h2>
    <table class="menu_table">
      <tbody>
        <tr v-for="(menu, idx) in selectedRes.menu" :key="menu.name">
          <td class="menu_title">{{ menu.name }}</td>
          <td class="menu_hr"><div></div></td>
          <td class="menu_price">{{ menu.price }}원</td>
          <td v-if="idx === 0" class="menu_best">
            <v-btn outlined color="error" class="like_btn bestBtn"> 대표 </v-btn>
          </td>
        </tr>
      </tbody>
    </table>
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
    return {};
  },

  methods: {},
};
</script>
