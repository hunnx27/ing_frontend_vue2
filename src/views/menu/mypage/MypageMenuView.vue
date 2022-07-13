<template>
  <!-- Wrap START -->
  <div class="mypageMenuView">
    <div>
      <router-link
        to="/menu/mypage/myinfo"
        class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
        style="width: 100%"
      >
        내 정보
        <span>
          <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
        </span>
      </router-link>
    </div>
    <div>
      <router-link
        to="/menu/mypage/pointHistory"
        class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
        style="width: 100%; margin-top: 30px"
      >
        포인트 내역
        <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
      </router-link>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<script>
export default {
  name: "MypageView",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.mypageMenuView {
  padding: 30px 15px 15px;
}
</style>
