const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
        ]
      }
    ]
  },
  externals: ['commonjs react', 'commonjs styled-components'],
  mode: "development"
}