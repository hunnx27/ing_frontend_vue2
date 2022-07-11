<template>
  <!-- Wrap START -->
  <div class="home">
    <!-- section1 -->
    <v-container
      class=""
      style="box-sizing: border-box; background-color: #333333"
    >
      <v-row no-gutters class="px-4 pt-4">
        <v-col class="text-left">
          <v-chip color="yellow" outlined>답변완111</v-chip>
        </v-col>
        <v-col class="text-right">
          <v-chip color="white" outlined>예비교사</v-chip>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col class="py-0 px-3">
          <v-container class="px-12">
            <v-row no-gutters>
              <v-col
                class="pa-3 text-h6"
                style="color: #039be5; font-weight: bolder"
              >
                #고민 #상담 #고민상담 #만3세지도
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col class="pa-2 white--text">
                만 3세 부종교사입니다.<br /><br />
                저희반에 혼나도 혼나는 상황인지 인지를 못하는 유아가 있어요.
                반일반때는 그래도 집중해서 활동에 참여하는편인데 종일반 때는
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-row no-gutters class="pa-3" style="background-color: #000000">
      <v-col class="text-left white--text"> 2022.05.24 23:34 </v-col>
      <v-col class="text-right white--text">
        답변(2) 포인트(답변10/채택100)
      </v-col>
    </v-row>

    <!-- section2 -->
    <v-container class="lighten-5 text-center">
      <v-row no-gutters class="pa-3">
        <v-col>
          <v-chip color="" outlined>넘나 고민되는 것</v-chip>
        </v-col>
      </v-row>
      <v-row no-gutters class="pa-1">
        <v-col class="text-h5"> 마음 속 이야기 </v-col>
      </v-row>
    </v-container>

    <div style="height: 2000px"></div>
  </div>
  <!-- Wrap END -->
</template>

<style scoped>
.container {
}
</style>
<script>
export default {
  name: "HomeItem",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
