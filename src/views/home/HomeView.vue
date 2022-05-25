<template>

  <div class="home">
      <v-carousel
        :show-arrows="false"
        cycle
        height="250"
        hide-delimiter-background
        >
        <v-carousel-item v-for="(item,i) in items" :key="i">
          <v-sheet
            height="100%"
            color="black"
            tile
          >
            <v-row
              class="fill-height slide-row"
              align="center"
              justify="center"
              :style="{backgroundImage:'url('+item.src+')'}"
            >
              <v-col cols="12" sm="12" md="12" class="text-center">
                <h1>{{item.name}}</h1>
                <div>
                  <p>
                    원앤집 지표점수는?
                  </p>
                  <p>
                    {{item.score}}점
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    
  </div>

</template>

<style>
.v-carousel__controls{
  top:0
}
.slide-row{
  background-position: center;
  background-size: cover;
}
</style>
<script>
export default {
  name: 'HomeItem',
  components:{
    
  },
  data(){
    return{

      items: [
        {
          id: 1,
          name: '송파유정유치원',
          score: 68,
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          id: 2,
          name: '오창과학 미래어린이집',
          score: 52,
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          id: 3,
          name: '하나유치원',
          score: 44,
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
      ],
    }
  },

}
</script>
