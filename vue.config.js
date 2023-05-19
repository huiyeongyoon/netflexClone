const ansiRegex = require("ansi-regex")
const fs = require("fs")

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  // devServer: {
  //   https: {
  //     key: fs.readFileSync('./ssl/total-login.com+5-key.pem'),
  //     cert: fs.readFileSync('./ssl/total-login.com+5.pem'),
  //   },
  //   disableHostCheck: true,
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/assets/css/light.scss";
  //       `,
  //     },
  //   },
  // },
  // configureWebpack: {
  //   devtool: 'source-map',
  //   resolve: {
  //     alias: {
  //       // vue$: 'vue/dist/vue.esm.js',
  //       vue$: 'vue/dist/vue.common.js',
  //     },
  //   },
  // },
  transpileDependencies: [ansiRegex],

  filenameHashing: true,
  configureWebpack: config => {
    config.output.filename = "js/[name].[hash].js"
    config.output.chunkFilename = "js/[name].[hash].js"
  },
}
