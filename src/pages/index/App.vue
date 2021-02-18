<template>
  <v-app>
    <v-app-bar
      app
      prominent
      dark
      src="https://picsum.photos/1920/1080?random"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
        size="50px"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="font-size: 50px">lee's blog</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <a href="localhost:8080/blog">点我写博客</a> -->
      <div style="padding-top: 50px">
        <a href="http://github.com" style="text-decoration: none">
          <v-icon style="padding: 10px">mdi-github</v-icon>
        </a>
        <v-icon style="padding: 10px" @click="dialog = true">mdi-email</v-icon>
        <v-icon style="padding: 10px">mdi-magnify</v-icon>
      </div>

      <v-dialog v-model="dialog" max-width="600" min-height="500">
        <v-card>
          <v-card-title primary-title>联系我</v-card-title>
          <v-card-text v-for="(item, i) in dialog_text" :key="i">{{
            item.contact
          }}</v-card-text>
          <v-card-text>(嘛虽然我不一定会看就是了)</v-card-text>
        </v-card>

        <v-btn color="info" @click="dialog = false">fine</v-btn>
      </v-dialog>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-container style="padding: 27px">
          <v-row>
            <v-avatar size="72" color="primary"></v-avatar>
            <v-card-text>welcome back</v-card-text>
          </v-row>
        </v-container>
        <v-divider></v-divider>

        <v-list-item-group>
          <a v-for="(item, i) in navigators" :key="i" :href="item.src"  style="text-decoration: none">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
var url='localhost:8080'
export default {
  
  data: () => ({
    drawer: false,
    navigators: [
      { text: "home", icon: "mdi-home",src:url },
      { text: "real time", icon: "mdi-clock",src:'' },
      { text: "account", icon: "mdi-account" ,src:url+'/account'},
    ],
    dialog: false,
    dialog_text: [
      { contact: "微信：13816816161" },
      { contact: "网易163邮箱：limingxian525@163.com" },
      { contact: "Gmail：limingxian525@gmail.com" },
    ],
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
