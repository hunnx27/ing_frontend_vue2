<template>
  <!-- Wrap START -->
  <div class="home">

    <!-- section1 -->
    <v-container class="lighten-5" style="background-color:#efefef">
     <v-row no-gutters>
        <v-col class="text-left">
          <v-btn>
            답변완료
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn>
            예비교사
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-container>
            <v-row no-gutters>
              <v-col>
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  #고민 #상담 #고민상담 #만3세지도
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  만 3세 부종교사입니다.
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  저희반에 혼나도 혼나는 상황인지 인지를 못하는 유아가 있어요. 반일반때는 그래도 집중해서 활동에 참여하는편인데 종일반 때는
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col class="text-left">
                2022.05.24 23:34
              </v-col>
              <v-col class="text-right">
                답변(2) 포인트(답변10/채택100)
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- section2 -->
    <v-container class="lighten-5 text-center">
      <v-row no-gutters class="pa-3">
        <v-col>
          <v-btn>넘나 고민되는 것</v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters class="pa-3">
        <v-col>
          마음 속 이야기
        </v-col>
      </v-row>
    </v-container>

    <!-- section3 -->
    <v-container class="lighten-5 text-center">
      <v-row no-gutters>
        <v-col>
          #고민
        </v-col>
        <v-col>
          #휴가
        </v-col>
        <v-col>
          #호봉
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          #임용
        </v-col>
        <v-col>
          #보조
        </v-col>
        <v-col>
          #평가인증
        </v-col>
      </v-row>
    </v-container>

    <!-- section4 리스트 반복 -->
    <v-container class="lighten-5" style="background-color:#efefef"
                    v-for="n in 10" :key="n">
     <v-row no-gutters>
        <v-col class="text-left">
          <v-btn>
            답변완료
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn>
            예비교사
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-container>
            <v-row no-gutters>
              <v-col>
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  #고민 #상담 #고민상담 #만3세지도
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  만 3세 부종교사입니다.
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  저희반에 혼나도 혼나는 상황인지 인지를 못하는 유아가 있어요. 반일반때는 그래도 집중해서 활동에 참여하는편인데 종일반 때는
                </v-card>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col class="text-left">
                2022.05.24 23:34
              </v-col>
              <v-col class="text-right">
                답변(2) 포인트(답변10/채택100)
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

  </div>
  <!-- Wrap END -->

</template>

<style scoped>
.container{
  border: 1px solid
}
</style>
<script>
export default {
  name: 'HomeItem',
  components:{
    
  },
  data(){
    return{
    }
  },
  methods:{
    
  }

}
</script>
