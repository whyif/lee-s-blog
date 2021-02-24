<template>
  <v-app>
    <Navigator />

    <v-main>
      <v-container fluid>
        <v-row justify="space-around">
          <v-col cols="4" v-for="item in cards" :key="item.tags">
            <v-lazy>
            <v-card
              shaped
              elevation="9"
              height="550px"
              style="margin:15px 35px 35px 35px"

            >
              <v-img height="50%" :src="item.img_src"></v-img>
              <v-card-title style="font-size: 27px">{{
                item.title
              }}</v-card-title>
              <v-card-text>{{ item.blogtext }}</v-card-text>
              <v-divider></v-divider>
              <v-container>
                <span v-for="tag in item.tags" :key="tag.text">
                <v-chip
                  v-if="tag.text.length!=0"
                  style="margin: 5px"
                  >{{ tag.text }}</v-chip
                >
                </span>
              </v-container>
              <v-btn text color="deep-purple accent-4" class="my-10"  :href='item.src'
                >Learn More</v-btn
              >
            </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


import Navigator from '../../components/navigator.vue'
// var url='http://localhost:8081/blog/'
var url='http://localhost/blog/?blogid='
export default {
  mounted(){
    this.$http.get('http://localhost:8080/').then((response)=>{
      console.log(response.data)
      this.cards=response.data
      for(let i=0;i<response.data.length;i++){
        this.cards[i].src=url+response.data[i]._id
      }
      
    })
  },
  components: {
    Navigator,
  },
  data: () => ({
    cards: [

    ],
  }),
};
</script>
