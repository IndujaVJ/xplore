const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
// const basePath = path.resolve('src', '..')

const isDevelopment = process.env.NODE_ENV === 'development'

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      },
      {
        test: /(\.scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  watch: isDevelopment
}
