
const path = require("path");
const CracoLessPlugin = require("craco-less");
const { loaderByName } = require("@craco/craco");
module.exports = {
  // yarn add -D babel-plugin-import 包先安装
  babel: {
    // antd包在craco增量配置中的按需加载配置
    // plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule(lessRule, context) {
          // You have to exclude these file suffixes first,
          // if you want to modify the less module's suffix
          lessRule.exclude = /\.m\.less$/
          return lessRule
        },
        modifyLessModuleRule(lessModuleRule, context) {
          // Configure the file suffix
          lessModuleRule.test = /\.m\.less$/

          // Configure the generated local ident name.
          const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'))
          cssLoader.options.modules = {
            localIdentName: '[local]_[hash:base64:5]'
          }

          return lessModuleRule
        }
      }
    }
  ],
  // 添加路径别名
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  devServer: {
    // 浏览器自动打开关闭
    open: true,
    port: 8080,
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin:true,
      //   pathRewrite: { '^/api': '' }
      // }
    },
  }
}