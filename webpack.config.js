process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const path = require('path');
const { green, white } = require('ansi-colors');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssConfig = [
	MiniCssExtractPlugin.loader,
	'css-loader',
	{
		loader: 'sass-loader',
		options: {
			includePaths: [
				path.resolve(__dirname, 'src/styles'),
			],
		},
	},
];

const config = {
	mode: 'development',
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		filename: '[name].js?v_[chunkHash]',
		path: path.resolve(__dirname, 'server/public'),
		publicPath: '/public/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
						],
						plugins: [
							'@babel/plugin-proposal-class-properties',
						],
					},
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: cssConfig,
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images',
						},
					},
				],
			},
		],
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'node_modules'),
		],
	},
	optimization: {
		splitChunks: {
			minChunks: 1,
			chunks: 'all',
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css?[hash]',
		}),
	],
};

module.exports = config;
