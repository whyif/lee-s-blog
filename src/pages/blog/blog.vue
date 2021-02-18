<template>
  <v-app>
    <Navigator />
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-card elevation="9" min-height="570">
              <v-card-title class="headline">{{title}}</v-card-title>
                <v-list>
                  <v-list-item>
                    <v-list-item-icon><v-icon>mdi-tag</v-icon></v-list-item-icon>
                    <v-list-item-title>tags:</v-list-item-title>
                    <v-chip v-for="(tag,i) in tags" :key="i" class="ma-2" >{{tag.text}}</v-chip>  
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
              <v-card-text class="body-1">{{content}}</v-card-text>
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
  data:()=>({
    title:'TITLE',
    content:'我是正文内容',
    tags:[
      {text:'学习'},
      {text:'生活'},
    ],
    img:[
      {src:''},
      {src:''},
    ]
  }),
  components: {
    Navigator,
  },
};
</script>

<style>
</style>