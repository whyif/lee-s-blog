module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    },
    write_blog: {
      entry: 'src/pages/write_blog/main.js',
      template: 'public/write_blog.html',
      filename: 'write_blog.html',
      title: 'write blog',
    },
    blog: {
      entry: 'src/pages/blog/main.js',
      template: 'public/blog.html',
      filename: 'blog.html',
      title: 'blog',
    },
    //subpage: 'src/subpage/main.js'
  }
  ,
  transpileDependencies: [
    'vuetify'
  ]
}
