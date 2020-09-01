const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'release'),
    filename: 'bundle.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    })
  ],
  devServer: {
    port: 9000,
    // 自动打开浏览器
    open: true,
    contentBase: path.join(__dirname, 'release'),
  },
}
