module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // For production build we'll want to generate a CSS file for caching
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
