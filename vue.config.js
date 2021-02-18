module.exports = {
  pages: {
    blog: {
      entry: 'src/blog/main.js',
      template: 'public/blog.html',
      filename: 'blog.html',
      title: 'blog Page',
      
    },
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      
    },
 //subpage: 'src/subpage/main.js'
  }
,
  transpileDependencies: [
    'vuetify'
  ]
}
