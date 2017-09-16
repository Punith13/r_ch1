var webpack = require("webpack");
var path = require('path');

module.exports = {

	entry: {
		app: './src/app.js'
	},
	output: {
		filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
	},
	devtool: '#source-map',	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	},
	plugins: [		  
		new webpack.DefinePlugin({
			// A common mistake is not stringifying the "production" string.
			'process.env.NODE_ENV': JSON.stringify('production')
		  }),
		  new webpack.optimize.UglifyJsPlugin({
			compress: {
			  warnings: false
			}
		  })
	  ]
}