const path = require('path');

module.exports = {
	entry: './frontend/bakedMaps.jsx',
	devServer: {
	    contentBase: './app/views/layouts',
	},
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-react']
						],
					plugins: ['@babel/plugin-transform-runtime']
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  'style-loader',
				  // Translates CSS into CommonJS
				  'css-loader',
				  // Compiles Sass to CSS
				  'sass-loader',
				],
			},
		]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '*' ]
	}
};
