var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var vue = require('vue-loader');

module.exports = {
	entry: './src/index.js',
	node: {
    	fs: "empty"
	},
	output: {
		path: __dirname + "/build",
		publicPath: '/build/',
		filename: 'main.js'
	},
	devtool: '#eval-source-map',
	target: 'atom',
	stats: {
		colors: true,
		modules: true,
		reasons: true
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue'
		},
		devServer: {
    		historyApiFallback: true,
    		noInfo: true
  		},
		modulesDirectories: [
			'node_modules'
		],
	},
	module: {
		loaders: [
			{
        		test: /\.vue$/,
        		 loader: 'vue-loader'
      		},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
        		}
			},
			{
				test: /\.js/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new webpack.IgnorePlugin(/vertx/),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 9999,
			open: false,
			files: ['index.html','index.css', 'build/main.js'],
			server: {
				baseDir: ['.']
			}
		})
	]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
