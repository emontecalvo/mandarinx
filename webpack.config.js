module.exports = {
	entry: "./client/js/index.js",
	output: {
		path: "./build",
		filename: "/questions.js"
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel',
		}]
	},
}
