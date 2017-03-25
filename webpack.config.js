var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'public/app.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
		{
			test: /\.json$/,
			loader: "json"
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		}]
	},

	devServer:{
		inline: true,
		hot: true
	}
}