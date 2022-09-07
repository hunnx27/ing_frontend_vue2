<template>
  <div class="column--col2">
      <select class="line" name="interestZonePrefix" attr="sido_code" v-model='interestSidoCode' @change="getAddressBySido">
        <option v-for="(item) in sidoList" :value="item.sidoCode" :key="item.sidoCode" >{{item.sidoName}}</option>
      </select>
      <select
        class="line"
        name="interestZone"
        v-model="interestZone"
        attr="sigungu_code"
        @change="onDataChanged"
      >
        <option value="">전체</option>
        <option 
          v-for="(item) in sigugunList" 
          :value="item.sigunguCode" 
          :key="item.id"
          :selected="item.sidoCode == interestZone"
        >{{item.sigunguName}}
        </option>
      </select>
    </div>
</template>

<script>
import accountApi from '@/api/account'
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "StepOneItem",
  components: {},
  props: ['selected'],
  data() {
    return {
      interestSidoCode: this.selected!=null && this.selected!='' ? this.selected.substr(0, 2) : null,
      interestZone: this.selected,
      sidoList: [],
      sigugunList: []
    };
  },
  methods: {
    getAddressSido(){
      accountApi.getAddressSido((body)=>{
        console.log(body);
        this.sidoList = body.data;
        this.getAddressBySido();
      });
    },
    getAddressBySido(){
      if(this.interestSidoCode!=null){
        this.$emit('sidoChange', this.interestSidoCode)
        accountApi.getAddressBySido(this.interestSidoCode, (body)=>{
          console.log(body);
          this.sigugunList = body.data;
        });
      }
      
    },
    onDataChanged() {
      this.$emit('change', this.interestZone) // input 이벤트 발생
    }
  },
  computed: {
    /*
     스토어의 값을 변수처리할 수 있도록 초기화함
     1. mapGetters : 스토어의 모든 Getter함수를 가져옴, 그 중 배열에 선택된 Getter함수 제한 가능
    */
    ...mapGetters(["user"]),
    // intrsSido(){
    //   return "";
    // }

  },
  created: function () {
    this.getAddressSido();
  },
};
</script>

<style lang="scss" scoped>
.line {
  border: 1px solid #d8d8d8;
}
select {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
.column {
  input[type="text"] {
    width: 100%;
  }
  select {
    width: 100%;
  }
  &--col2 {
    input[type="text"] {
      width: 50%;
    }
    select {
      width: 50%;
    }
  }
}
</style>
