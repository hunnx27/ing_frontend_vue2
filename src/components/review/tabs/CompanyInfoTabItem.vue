<template>
  <div class="page-wrap">
    <div class="item-wrap">
      <div class="item-row">
        <p>구분</p><p>a</p>
      </div>
      <div class="item-row">
        <p>주소</p><p>b</p>
      </div>
      <div class="item-row">
        <p>지도</p><p></p>
      </div>
      <div class="item-row">
        <p>설립유형</p><p></p>
      </div>
      <div class="item-row">
        <p>운영</p><p></p>
      </div>
      <div class="item-row">
        <p>원장</p><p></p>
      </div>
      <div class="item-row">
        <p>설립(개원)일</p><p></p>
      </div>
      <div class="item-row">
        <p>평가인증</p><p></p>
      </div>
    </div>

    <div class="item-wrap">
      <div class="step-title">연령별 반 현황</div>
      <div class="mb-2 age-wrap">
        <div class="age-left-item">
          87.27%
        </div>
        <div class="age-right-item">
          <p>55명<span>정원</span></p>
          <p>44명<span>현원</span></p>
        </div>
      </div>
      <div>
        <div class="mb-1 border-wrap">
          <div class="detail-cnt-wrap mb-2">
            <p>
              <span>만0세</span>
              <span class="detail-cnt">9</span>
            </p>
            <p>
              <span>만1세</span>
              <span class="detail-cnt">9</span>
            </p>
            <p>
              <span>만2세</span>
              <span class="detail-cnt">9</span>
            </p>
            <p>
              <span>만3세</span>
              <span class="detail-cnt">9</span>
            </p>
            <p>
              <span>만4세</span>
              <span class="detail-cnt">9</span>
            </p>
            <p>
              <span>만5세</span>
              <span class="detail-cnt">9</span>
            </p>
          </div>

          <div class="detail-cnt-wrap">
            <p>
              <span>영아혼합</span>
              <span class="detail-cnt">9</span>
            </p>
            <p>
              <span>유아혼합</span>
              <span class="detail-cnt">9</span>
            </p>
            <p>
              <span>특수/장애아</span>
              <span class="detail-cnt">9</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="item-wrap">
      <div class="step-title">기관 특성</div>
      <div class="character-wrap">
        <p class="character-item">장애아 통합</p>
        <p class="character-item">시간연장형</p>
        <p class="character-item">일시보육</p>
      </div>
    </div>

    <div class="item-wrap">
      <div class="step-title">교직원 현황</div>
      <div class="staff-wrap">
        <div class="staff-total">
          21명
        </div>
        <div class="staff-cnt-wrap">
          <div class="detail-cnt-wrap border-wrap mb-1">
            <p><span>원장</span><span class="detail-cnt">1</span></p>
            <p><span>보육교사</span><span class="detail-cnt">19</span></p>
            <p><span>특수교사</span><span class="detail-cnt">0</span></p>
            <p><span>치료사</span><span class="detail-cnt">0</span></p>
          </div>
          <div class="detail-cnt-wrap border-wrap mb-1">
            <p><span>영양사</span><span class="detail-cnt">1</span></p>
            <p><span>간호사</span><span class="detail-cnt">0</span></p>
            <p><span>조리원</span><span class="detail-cnt">1</span></p>
            <p><span>사무원</span><span class="detail-cnt">0</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--END item-wrap -->    
</template>

<script>
export default {
  name: "CompanyInfoTabItem",
  components: {},
  props: [],
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  created(){
    
  }
};
</script>

<style lang="scss" scoped>

.step-title {
  font-size: 20px;
  font-weight: 600;
  margin:0px;
  padding: 10px 0;
  margin-bottom:10px;
  border-bottom:1px solid #efefef;
}
.item-wrap{
  padding:10px;
  background-color:white;
  font-size: 12px;
  margin-bottom:10px;
  .item-row{
    display:flex;
    padding:10px;
    p{
      margin:0;
    }
    p:nth-child(1){
      flex:0 1 30%;
    }
  }
  .item-row:nth-child(odd) { background-color: white; }
  .item-row:nth-child(even) { background-color: #efefef; }
}
.character-wrap{
  display:flex;
  .character-item{
    background-color:#efefef; padding:15px 5px;color:#888;font-size:14px;margin-right:5px;border-radius:2px;
  }
}
.staff-wrap{
	display:flex;align-items:center;justify-content:space-between;
	.staff-total{
		font-size:25px;color:orange;font-weight:bolder;text-align:center;flex: 0.4 1;
	}
	.staff-cnt-wrap{
		flex:1 0;
	}
}
.detail-cnt-wrap{
  display:flex;justify-content:space-between;
  p{
    text-align: center;
    margin:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1 0;
    span{
      display:block;font-size:12px;text-align:center;
    }
    span.detail-cnt{
      width:28px;padding:2px;margin:0;background-color:#efefef;border-radius:28px;flex:0 1;
    }
  }
}
.border-wrap{
  padding:10px 15px;border:1px solid #efefef;border-radius:5px;
}
.age-wrap{
  display:flex;justify-content:space-between;align-items:center;
  .age-left-item{
    font-size: 25px;color: orange;font-weight: bolder;text-align: center;flex: 0.4 1;
  }
  .age-right-item{
    display:flex;flex-direction:column;justify-content:center;
    p{
      margin:0;font-size:20px;font-weight:bolder;
      span{
        font-size:16px;font-weight:normal;color:#888
      }
    }
  }
}
</style>
