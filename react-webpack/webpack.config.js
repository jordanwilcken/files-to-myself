const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./app/dostuff.js', './app/view1/view1.js', './app/RainbowButton.js', './app/DisappearingRabbit.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};