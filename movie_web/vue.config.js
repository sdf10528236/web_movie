module.exports = {
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