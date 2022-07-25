<template>
  <!-- Wrap START -->
  <div class="home">
    <!-- section1 -->
    <div @click="detailCounsel(item.id)">
      <v-container
        class="lighten-5 pa-0 ma-0 block"
        :style="{backgroundImage: `url('/resources/images/new_list_top.jpg')`}"
      >
        <v-row no-gutters class="px-4 pt-4">
          <v-col class="text-left">
            <v-chip color="white" outlined v-if="item.counselStateCode=='R'">{{item.counselStateName}}</v-chip>
            <v-chip color="yellow" outlined v-else>{{item.counselStateName}}</v-chip>
          </v-col>
          <v-col class="text-right">
            <v-chip color="red" text-color="white" v-if="item.isMine">내질문</v-chip>
            <v-chip color="white" outlined v-else>{{item.gubnName}}</v-chip>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width: 100%;position:relative">
          <v-col class="py-0 px-3">
            <v-container class="px-9">
              <v-row no-gutters>
                <v-col
                  class="py-3 text-h7"
                  style="color: #039be5; font-weight: bolder"
                >
                  {{item.inputTag}}
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="pa-2 white--text counsel-txt">
                  <pre>{{item.txt}}</pre>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="ma-0 pa-0">
        <v-row no-gutters class="pa-3" style="background-color: #000000cc">
          <v-col class="text-left white--text"> {{item.createDate}} </v-col>
          <v-col class="text-right white--text">
            답변({{item.reportCnt}}) 포인트(답변10/채택100)
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- section2 -->
    <v-container class="lighten-5 text-center">
      <v-row no-gutters class="pa-3">
        <v-col>
          <v-chip color="" outlined label>넘나 고민되는 것</v-chip>
        </v-col>
      </v-row>
      <v-row no-gutters class="pa-1">
        <v-col class="text-h5"> 마음 속 이야기 </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

    <!-- section3 -->
    <v-container class="lighten-5 text-center">
      <v-row no-gutters>
        <v-col> #고민</v-col>
        <v-col> #휴가 </v-col>
        <v-col> #호봉 </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col> #임용 </v-col>
        <v-col> #보조 </v-col>
        <v-col> #평가인증 </v-col>
      </v-row>
    </v-container>

    <!-- section4 리스트 반복 -->
    <div v-for="(item, index) in list" :key="item.id" @click="detailCounsel(item.id)">
      <v-container
        class="lighten-5 pa-0 ma-0 block"
        :style="{backgroundImage: `url('${getBackgroundUrl(index)}')`}"
      >
        <v-row no-gutters class="px-4 pt-4">
          <v-col class="text-left">
            <v-chip color="white" outlined v-if="item.counselStateCode=='R'">{{item.counselStateName}}</v-chip>
            <v-chip color="yellow" outlined v-else>{{item.counselStateName}}</v-chip>
          </v-col>
          <v-col class="text-right">
            <v-chip color="red" text-color="white" v-if="item.isMine">내질문</v-chip>
            <v-chip color="white" outlined v-else>{{item.gubnName}}</v-chip>
          </v-col>
        </v-row>
        <v-row class="text-center pa-0 ma-0" style="width: 100%;position:relative">
          <v-col class="py-0 px-3">
            <v-container class="px-9">
              <v-row no-gutters>
                <v-col
                  class="py-3 text-h7 white--text"
                  style="color: #039be5; font-weight: bolder"
                >
                  {{item.inputTag}}
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="pa-2 white--text counsel-txt">
                  <pre>{{item.txt}}</pre>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="ma-0 pa-0">
        <v-row no-gutters class="pa-3" style="background-color: #000000cc">
          <v-col class="text-left white--text"> {{item.createDate}} </v-col>
          <v-col class="text-right white--text">
            답변({{item.reportCnt}}) 포인트(답변10/채택100)
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <!-- Wrap END -->
</template>

<style scoped>
.container {
}
.block{
    position:relative;
    background-size: cover;
}
.block:before{
  background-color:#33333388;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}
.counsel-txt{
  min-height:90px;
}
</style>
<script>
import counselApi from "@/api/counsel";
var reqSample = {
    id: 1,
    accountId: 1,
    counselStateCode: "A",
    counselStateName: "답변완료",
    createDate: "2022.07.25 05:03",
    gubnName: "준비중",
    inputTag: "#원앤집 #원앤집",
    mine: true,
    reportCnt: 0,
    txt: "기관은 어디로갈지 고민입니다.\r\n어떻게 할까요?",
}
export default {
  name: "HomeItem",
  components: {},
  data() {
    return {
      item: reqSample,
      list: [reqSample],
      backgroundUrls: [
        'https://appstage.oneandzip.com/test/new_list00.jpg',
        'https://appstage.oneandzip.com/test/new_list01.jpg',
        'https://appstage.oneandzip.com/test/new_list02.jpg',
        'https://appstage.oneandzip.com/test/new_list03.jpg',
        'https://appstage.oneandzip.com/test/new_list04.jpg',
        'https://appstage.oneandzip.com/test/new_list05.jpg',
        'https://appstage.oneandzip.com/test/new_list06.jpg',
        'https://appstage.oneandzip.com/test/new_list07.jpg',
      ]
    };
  },
  methods: {
    searchAllList(){
      var param = {
        page: 0
      }
      counselApi.getCounselAll(param,(body)=>{
        this.list = body!=null? body : [];
      })
    },
    searchFirst(){
      var param = {
        page: 0,
        size: 1,
      }
      counselApi.getCounselAll(param,(body)=>{
        this.item = body!=null&&body.length>0? body[0] : [];
      })
    },
    getBackgroundUrl(idx){
      const size = this.backgroundUrls.length;
      const newidx = idx%size;
      return this.backgroundUrls[newidx];
    },
    detailCounsel(id){
      alert(id);
    }
  },
  created(){
    this.searchFirst();
    this.searchAllList();
  }
};
</script>
