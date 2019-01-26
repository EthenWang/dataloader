module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5050/api', 
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
