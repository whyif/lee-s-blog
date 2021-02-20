<template>
  <div>
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
        <v-layout row wrap justify-center>
          <v-avatar size="92" color="primary" class="ma-3"></v-avatar>
        </v-layout>
          <v-card-text class="text-align:center">welcome back</v-card-text>
        <v-divider></v-divider>

        <v-list-item-group>
          <a
            v-for="(item, i) in navigators"
            :key="i"
            :href="item.src"
            style="text-decoration: none"
          >
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
  </div>
</template>

<script>  
var url='http://localhost'
export default {

  data: () => ({
    drawer: false,
    navigators: [
      { text: "home", icon: "mdi-home",src:url+'/' },
      { text: "real time", icon: "mdi-clock",src:'' },
      { text: "account", icon: "mdi-account" ,src:url+'/account'},
      {text:'tags',icon:'mdi-tag',src:''},
      {text:'new blog',icon:'mdi-book-open-page-variant',src:url+'/write_blog'}
    ],
    dialog: false,
    dialog_text: [
      { contact: "微信：13816816161" },
      { contact: "网易163邮箱：limingxian525@163.com" },
      { contact: "Gmail：limingxian525@gmail.com" },
    ],
  }),
};
</script>
