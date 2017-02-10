var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  plugins: [commonsPlugin],
  entry: {
      index: './src/index.js'
  },
  output: {
    path: 'src',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  resolve: {
        root: 'D:\workspace\react-flux\react-redux-learning/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
        }
    }
}
