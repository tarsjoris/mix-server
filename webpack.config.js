const webpack = require('webpack')
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src/server');

module.exports = {
	entry: SRC_DIR + '/index.ts',
	devtool: 'inline-source-map',
	mode: 'development',
	target: 'node',
	output: {
		path: BUILD_DIR,
		filename: 'server.js'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	}
};