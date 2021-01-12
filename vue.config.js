module.exports = {
  publicPath: '/datav-report/',
  devServer: {
    proxy: {
      '/screen': {
        target: 'https://apis.imooc.com',
        secure: true,
        changeOrigin: true,
      },
    },
  },
}
