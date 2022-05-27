<template>
  <!-- Wrap START -->
  <div class="home">

    <!-- section1 -->
    <div>
      <v-container class="lighten-5 pa-0 ma-0" style="background-color:#333333dd ">
      <v-row no-gutters class="px-4 pt-4">
          <v-col class="text-left">
            <v-chip color="yellow" outlined >답변완료</v-chip>
          </v-col>
          <v-col class="text-right">
            <v-chip color="white" outlined >예비교사</v-chip>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width:100%">
          <v-col class="py-0 px-3">
            <v-container class="px-9">
              <v-row no-gutters>
                <v-col class="py-3 text-h7" style="color:#039BE5;font-weight:bolder">
                  #고민 #상담 #고민상담 #만3세지도
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="pa-2 white--text">
                  만 3세 부종교사입니다.<br/><br/>
                  저희반에 혼나도 혼나는 상황인지 인지를 못하는 유아가 있어요. 반일반때는 그래도 집중해서 활동에 참여하는편인데 종일반 때는
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="ma-0 pa-0">
        <v-row no-gutters class="pa-3" style="background-color:#000000cc">
          <v-col class="text-left white--text">
            2022.05.24 23:34
          </v-col>
          <v-col class="text-right white--text">
            답변(2) 포인트(답변10/채택100)
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <!-- section2 -->
    <v-container class="lighten-5 text-center">
      <v-row no-gutters class="pa-3">
        <v-col>
          <v-chip color="" outlined >넘나 고민되는 것</v-chip>
        </v-col>
      </v-row>
      <v-row no-gutters class="pa-1">
        <v-col class="text-h5">
          마음 속 이야기
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>
    
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
    <div v-for="n in 15" :key="n">
      <v-container class="lighten-5 pa-0 ma-0" style="background-color:#333333dd ">
      <v-row no-gutters class="px-4 pt-4">
          <v-col class="text-left">
            <v-chip color="yellow" outlined >답변완료</v-chip>
          </v-col>
          <v-col class="text-right">
            <v-chip color="white" outlined >예비교사</v-chip>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width:100%">
          <v-col class="py-0 px-3">
            <v-container class="px-9">
              <v-row no-gutters>
                <v-col class="py-3 text-h7" style="color:#039BE5;font-weight:bolder">
                  #고민 #상담 #고민상담 #만3세지도 #경기도
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="pa-2 white--text">
                  정리 안하는 아이 어떻게 지도하는게 좋을까요?<br/>
                  연장반 교사인데 매번 정리를 하지 않으려고 해요...<br/>
                  나는 집에서 가지고 온 장난감만 가지고 놀았다, 반에 있는 장난감은<br/>
                  내가 아니라 다른 친구들이 만졌다, 이런식으로 얘기를 해요
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="ma-0 pa-0">
        <v-row no-gutters class="pa-3" style="background-color:#000000cc">
          <v-col class="text-left white--text">
            2022.05.24 23:34
          </v-col>
          <v-col class="text-right white--text">
            답변(2) 포인트(답변10/채택100)
          </v-col>
        </v-row>
      </v-container>
    </div>

  </div>
  <!-- Wrap END -->

</template>

<style scoped>
.container{
  
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
