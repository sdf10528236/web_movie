module.exports = {
    publicPath:
    process.env.NODE_ENV === 'production'
    ? '/index/'
    : '/',

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