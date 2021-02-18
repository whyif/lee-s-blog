module.exports = {
  pages: {
    write_blog: {
      entry: 'src/pages/write_blog/main.js',
      template: 'public/write_blog.html',
      filename: 'write_blog.html',
      title: 'write blog',
      
    },
    index: {
      entry: 'src/pages/index/main.js',
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
