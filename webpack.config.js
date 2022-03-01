const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devServer: {
		static: './dist',
  },
	plugins: [
    new HtmlWebpackPlugin({
			template: '/src/index.html'
    }),
  ],
  output: {
    filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
			},
			{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }
    ],
  },
};