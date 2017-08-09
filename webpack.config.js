var webpack = require('webpack');
var path = require('path'); //helps manipulate path names

module.exports = {
  devtool: 'inline-source-map', //gives us line numbers in case there are errors for debugging
  entry: [ //defines where webpack will look for our files
    // UNCOMMENT webpack-dev & webpack/hot for LIVE RELOAD
    // 'webpack-dev-server/client?http://127.0.0.1:8080/',
    // 'webpack/hot/only-dev-server', //allows for hot reloading
    './src', //the folder where webpack will look for our initial file to run - defaults to index.html
    // './styles'
  ],
  output: { //for deployment purposes, not necessary otherwise
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: { //where webpack will look for the files to bundle together
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'] //type of file extensions webpack will expect
  },
  module: { //define our loaders
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
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
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // for hot reloading
    new webpack.NoEmitOnErrorsPlugin(), // won't compile with errors
    // new webpack.ExtractTextPlugin('styles/styles.css', {
    //   allChunks: true
    // })
  ]
}
