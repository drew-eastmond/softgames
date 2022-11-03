const path = require ("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	mode: 'development',
	entry: {
		"js/index": path.resolve(__dirname, "src/js/index/index"),
		"js/cards": path.resolve(__dirname, "src/js/cards/index"),
		"js/richText": path.resolve(__dirname, "src/js/richText/index"),
		"js/fire": path.resolve(__dirname, "src/js/fire/index")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name][contenthash].js",
		clean: true,
		assetModuleFilename: "assets/[name][ext]"
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			/* {
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			}, */
			{
				test: /assets.+?\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/assets"),
					to: path.resolve(__dirname, "dist/assets")
				},
			],
			options: {
				concurrency: 100
			}
		}),
		new htmlWebpackPlugin ( {
			title: "Index",
			chunks: ["js/index"],
			filename: "index.html",
			template: "./src/html/index.html"
		}),
		new htmlWebpackPlugin({
			title: "Card Animation",
			chunks: ["js/cards"],
			filename: "cards.html",
			template: "./src/html/cards.html"
		}),
		new htmlWebpackPlugin({
			title: "Rich Text",
			chunks: ["js/richText"],
			filename: "rich-text.html",
			template: "./src/html/rich-text.html"
		}),
		new htmlWebpackPlugin({
			title: "Fire",
			chunks: ["js/fire"],
			filename: "fire.html",
			template: "./src/html/fire.html"
		}),
		//new SourceMapDevToolPlugin({
		//	filename: "[file].map"
		//}),
		
		// new BundleAnalyzerPlugin()
	]
}