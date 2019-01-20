module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:44389/api', 
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
