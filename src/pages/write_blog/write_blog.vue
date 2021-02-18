<template>
  <v-app>
    <Navigator />
    <v-main>
      <v-container>
        <v-form ref="form">
          <v-text-field name="theme" label="主题" required></v-text-field>
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
        </v-form>
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
      this.$refs.form.submit();
    },
  },
};
</script>

<style>
</style>