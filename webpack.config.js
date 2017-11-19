var webpack = require('webpack');
var path = require('path'); //helps manipulate path names
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map', //gives us line numbers in case there are errors for debugging
  entry: [
    './src', //the folder where webpack will look for our initial file to run - defaults to index.html
    // './styles'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000',
      },
      {
         test: /\.css$/,
         use: [
           "style-loader",
           {
             loader: "css-loader",
             options: {
               modules: true, // default is false
               sourceMap: true,
               importLoaders: 1,
               localIdentName: "[name]--[local]--[hash:base64:8]"
             }
           },
           "postcss-loader"
         ]
       }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // for hot reloading
    new webpack.NoEmitOnErrorsPlugin(), // won't compile with errors
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
    // new webpack.ExtractTextPlugin('styles/styles.css', {
    //   allChunks: true
    // })
  ]
}
