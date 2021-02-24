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
                    :src="thisblog.img_src"
                    style="object-fit: cover; height: 450px"
                    class="ma-2"
                  ></v-img>
                </v-col>
              </v-row>
              <v-row justify="space-between">
                
                  <v-card-title style="font-size:30px;" class="ml-5">
                    {{ thisblog.title }}
                  </v-card-title>
                <div class="mr-7 mt-2">  
                  <v-icon>mdi-tag</v-icon>
                  <span>tags:</span>
                  <span  v-for="(tag, i) in thisblog.tags" :key="i">
                  <v-chip class="ml-2" v-if="tag.text.length!=0">{{
                    tag.text
                  }}</v-chip>
                  </span>
                </div>
              </v-row>
              <v-divider></v-divider>
              <v-card-text class="body-1">{{ thisblog.blogtext }}</v-card-text>
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
    thisblog:{    
    },
    last_blog: {
      name: "last blog name",
      href: "http://localhost/write_blog",
    },
    next_blog: {
      name: "next blog name",
      href: "http://localhost/write_blog",
    },
  }),
  components: {
    Navigator,
  },
  mounted(){
    //也许这里应该用vue-router改进，不过那都是后话，先上线再说别的


    //主页通过url访问了博客页面，但是blogid存在于url中，页面本身此时并没有数据，页面并不知道应该访问localhost:8080/blog的blogid
    //问题确定，怎样得知发出请求的blogid
    console.log('下面是url')
    // console.log(window.location.href)
    var url=window.location.href
    var blogid
    // blogid = url.split('http://localhost:8081/blog/')[1]
    blogid = url.split('http://localhost/blog/?blogid=')[1]
    console.log(blogid)
    this.$http.get('http://localhost:8080/blog/'+blogid).then((response)=>{
      console.log(response.data)
      this.thisblog=response.data
    })
  },
//问题确定，即后端通过怎样的方法吧数据给前端


};
</script>

<style>
</style>