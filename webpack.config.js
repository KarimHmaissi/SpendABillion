const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const neatPaths = require('bourbon-neat').includePaths;

const sassCongif = {
	loader: 'sass-loader',
	options: {
		sourceMap: true,
		includePaths: neatPaths
	}
};

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/js'),
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080
	},
	devtool: "source-map",
	context: __dirname,
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.scss$/, loader: [
				process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
				'css-loader',
				sassCongif
			]}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html')
		}),
		new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
	]
};
