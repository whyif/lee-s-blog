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
              <v-card-text>{{ item.text }}</v-card-text>
              <v-divider></v-divider>
              <v-container>
                <v-chip
                  v-for="tag in item.tags"
                  :key="tag.text"
                  style="margin: 5px"
                  >{{ tag.text }}</v-chip
                >
              </v-container>
              <v-btn text color="deep-purple accent-4" class="my-10"
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
export default {
  components: {
    Navigator,
  },
  data: () => ({
    cards: [
      {
        title: "title1",
        text: "我是简短的介绍",
        tags: [
          { text: "标签1" },
          { text: "标签2" },
          { text: "标签3" },
          { text: "标签4" },
        ],
        img_src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        src: "",
      },
      {
        title: "title2",
        text: "我是简短的介绍",
        tags: [
          { text: "标签1" },
          { text: "标签2" },
          { text: "标签3" },
          { text: "标签4" },
        ],
        img_src:
          "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        src: "",
      },
      {
        title: "title3",
        text: "我是简短的介绍",
        tags: [
          { text: "标签1" },
          { text: "标签2" },
          { text: "标签3" },
          { text: "标签4" },
        ],
        img_src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        src: "",
      },
    ],
  }),
};
</script>
