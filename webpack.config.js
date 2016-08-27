const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const WEBPACK_PORT = 5051;

const config = {

	context: path.resolve(__dirname, "src"),
		entry: './js/application.js',
		output: {
			filename: 'app.js',
			path: __dirname + '/dist',
			publicPath: '/dist/'
		},


	plugins: [

		new ExtractTextPlugin('[name].css'),

		new HtmlWebpackPlugin({
			title : 'Boilerplate',
			template: './src/templates/index.html',
			filename: '../index.html',
			inject:'body'

		}),

		new webpack.ProvidePlugin({
			 _ : 'underscore'
		})

	],

	module: {

		loaders: [
				{
					test: /\.svg$/,
					loader: 'svg-inline'
				},
				{
					test:	/\.(otf|eot|ttf|woff)$/,
					//loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
					loader: 'file-loader?name=fonts/[name].[ext]'
				},
				{
					test:	/\.(png|jpg|gif|ico)$/,
					loader: 'file-loader?name=images/[name].[ext]'
				},
				{
					test:	/\.css$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
				},
				{
					test:	/\.scss$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
				},
				{
					test:	/\.json$/,
					loader: 'json-loader'
				},
				{
					test:	 /\.js$/,
					loader:	 'babel-loader',
					query:	 {
						presets: ['es2015', 'stage-0']
					}
				},
				{
					test: /\.hbs$/,
					loader: "handlebars-loader",
					query: {
						inlineRequires: '/images/',
						helperDirs: [
							path.join(__dirname, 'src', 'templates', 'helpers')
						],
						partialDirs: [
							path.join(__dirname, 'src', 'templates', 'partials'),
							path.join(__dirname, 'src', 'templates', 'views')
						]
					}
				}
		]
	},

	sassLoader: {
		includePaths: [path.resolve(__dirname, "src/sass")]
	},
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],
	resolve: {
		root: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/js'),
			path.resolve(__dirname, 'src/assets'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['', '.js', '.json', '.hbs', '.jpg', '.png', '.svg', '.sass', '.scss'],
		alias: {
			'_'				: 'underscore/underscore'
		}
	}
}


module.exports = config;