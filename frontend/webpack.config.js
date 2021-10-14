var path = require("path");

//https://webpack.js.org/guides/code-splitting/

// Pour la config des split chuncks vendors
// https://github.com/webpack/webpack/issues/6647#issuecomment-369868055

module.exports = {
	watch: false,
	mode: "development", // Surchargé par la config de Gulp
	entry: "./src/scripts/main.js",
	devtool: "source-map", // Surchargé par la config de Gulp
	output: {
		filename: "[name].es5.bundle.js",
		chunkFilename: "[name].bundle.js",
		path: path.resolve(__dirname, "../assets/js/"),
		publicPath: "/assets/js/",
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/, // you may add "vendor.js" here if you want to
					name: "vendors",
					chunks: "initial",
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						// cacheDirectory: true,
						presets: [
							[
								"@babel/preset-env",
								{
									// debug: true,
								},
							],
						],
						// https://babeljs.io/docs/en/babel-plugin-transform-runtime/
						// Evite que Babel n'ajoute ses helpers à chaque fichier
						// plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
		],
	},
};
