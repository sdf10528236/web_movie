module.exports = {
    publicPath:
    process.env.NODE_ENV === 'production'
    ? '/web_movie/'
    : '/film',

    devServer: {
      proxy: {
        '/ajax': {
          target: 'https://m.maoyan.com',
        //   ws: true,
          changeOrigin: true
        },
        '/api': {
          target: 'https://m.maoyan.com',
        //   ws: true,
          changeOrigin: true
        },
        // '/foo': {
        //   target: '<other_url>'
        // }
      }
    }
  }