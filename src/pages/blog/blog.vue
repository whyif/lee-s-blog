<template>
  <v-app>
    <Navigator />
    <v-main>
      <a
        style="position: fixed; top: 50%; left: 0; text-decoration: none"
        :href="last_blog.href"
      >
        <v-icon size="50">mdi-arrow-left</v-icon>
        <span style="color: gray; font-size: 30px">last：</span>
        <p style="position: relative; left: 20px; bottom: 10px">
          {{ last_blog.name }}
        </p>
      </a>

      <a
        style="position: fixed; top: 50%; right: 0; text-decoration: none"
        :href="next_blog.href"
      >
        <span style="color: gray; font-size: 30px">next：</span>
        <v-icon size="50">mdi-arrow-right</v-icon>
        <p style="position: relative; right: 20px; bottom: 10px">
          {{ next_blog.name }}
        </p>
      </a>

      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-card elevation="9" min-height="570">
              <v-row justify="center">
                <v-col cols="10">
                  <v-img
                    :src="img_src"
                    style="object-fit: cover; height: 450px"
                    class="ma-2"
                  ></v-img>
                </v-col>
              </v-row>
              <v-row justify="space-between">
                
                  <v-card-title style="font-size:30px;" class="ml-5">
                    {{ title }}
                  </v-card-title>
                <div class="mr-7 mt-2">  
                  <v-icon>mdi-tag</v-icon>
                  <span>tags:</span>
                  <v-chip v-for="(tag, i) in tags" :key="i" class="ml-2">{{
                    tag.text
                  }}</v-chip>
                </div>
              </v-row>
              <v-divider></v-divider>
              <v-card-text class="body-1">{{ content }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigator from "../../components/navigator.vue";
export default {
  el: "#last_next",
  data: () => ({
    title: "芜湖！happy new year!",
    content: "我是正文内容",
    tags: [{ text: "学习" }, { text: "生活" },{text:'游戏'}],
    img_src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    last_blog: {
      name: "last blog name",
      href: "",
    },
    next_blog: {
      name: "next blog name",
      href: "",
    },
  }),
  components: {
    Navigator,
  },
};
</script>

<style>
</style>