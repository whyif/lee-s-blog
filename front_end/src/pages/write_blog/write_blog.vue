<template>
  <v-app>
    <Navigator />
    <v-main>
      <v-container>
        <form id='blog' action="http://localhost:8080/newblog" method="POST">
          <v-text-field name="title" label="主题" required></v-text-field>
          <v-textarea
            name="blogtext"
            auto-grow
            label="随笔喜+1"
            counter
            rows="9"
            required
          ></v-textarea>
          <v-file-input
            filled
            prepend-icon="mdi-camera"
            label="为随笔配张图吧？"
            show-size
          ></v-file-input>
          <v-row class="my-5">
            <v-combobox
              name="tags"
              chips
              clearable
              label="在？加个标签？"
              multiple
              prepend-icon="mdi-tag"
              :items="tags"
            >
            </v-combobox>

            <v-spacer></v-spacer>
            <v-btn color="success" @click="submit">SUBMIT</v-btn>
          </v-row>
        </form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigator from "../../components/navigator.vue";
export default {
  data: () => ({
    tags: ["学习", "生活", "游戏", "时事", "杂项"],
  }),
  components: {
    Navigator,
  },
  methods: {
    submit: function () {
      document.getElementById('blog').submit()
    },
  },
};
</script>

<style>
</style>