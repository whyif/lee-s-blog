<template>
  <v-app>
    <v-app-bar
      app
      prominent
      dark
      src="https://picsum.photos/1920/1080?random"
      min-height="122px"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer=true" size="50px"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-size:50px">lee's blog</v-toolbar-title>

      <v-spacer></v-spacer>
      <div style="padding-top:50px;">
        <a href="http://github.com" style="text-decoration:none;">
          <v-icon style="padding:10px">mdi-github</v-icon>
        </a>
        <v-icon style="padding:10px" @click="dialog=true">mdi-email</v-icon>
        <v-icon style="padding:10px">mdi-magnify</v-icon>
      </div>

      <v-dialog v-model="dialog" max-width="600" min-height="500">
        <v-card>
          <v-card-title primary-title>联系我</v-card-title>
          <v-card-text v-for="(item,i) in dialog_text" :key="i">{{item.contact}}</v-card-text>
          <v-card-text>(嘛虽然我不一定会看就是了)</v-card-text>
        </v-card>

        <v-btn color="info" @click="dialog=false">fine</v-btn>
      </v-dialog>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-container style="padding:27px">
          <v-row>
            <v-avatar size="72" color="primary"></v-avatar>
            <v-card-text>welcome back</v-card-text>
          </v-row>
        </v-container>
        <v-divider></v-divider>

        <v-list-item-group>
          <v-list-item v-for="(item,i) in items" :key="i">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-card height="500px" width="350px" style="margin:20px" >
        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
        <v-card-title style="font-size:27px">拿来主义</v-card-title>
        <v-col>
          <v-card-text>我是简短的介绍</v-card-text>
          <v-btn text color="deep-purple accent-4">Learn More</v-btn>
        </v-col>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { text: "home", icon: "mdi-home" },
      { text: "real time", icon: "mdi-clock" },
      { text: "account", icon: "mdi-account" }
    ],
    dialog: false,
    dialog_text: [
      { contact: "微信：13816816161" },
      { contact: "网易163邮箱：limingxian525@163.com" },
      { contact: "Gmail：limingxian525@gmail.com" }
    ]
  })
};
</script>
