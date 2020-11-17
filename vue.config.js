module.exports = {
  // // 基本路径
  // publicPath: '/',
  // // 输出文件目录
  // outputDir: 'dist',
  // assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // devServer: {
  //     // host: 'test.cnsuning.com',
  //     host: '0.0.0.0',
  //     port: 8085,
  //     proxy: {
  //         '/admin': {
  //             target: 'https://api.lovelive.tools',
  //             changeOrigin: true,   // 请求跳转到 target 的网址，如果是 false ，请求用的还是 host 的网址
  //             pathRewrite: {
  //                 '^/admin': '/admin'
  //             }
  //         }
  //     }
  // },
  // 修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = '微效能工具集';
        return args;
      });
  }
};
