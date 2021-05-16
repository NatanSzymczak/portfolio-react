const HTMLWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: "/node_modules/",
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.less$/i,
            use: [
               {
                  loader: "style-loader",
               },
               {
                  loader: "css-loader",
               },
               {
                  loader: "less-loader",
                  options: {
                     lessOptions: {
                        strictMath: true,
                     },
                  },
               },
            ],
         }
      ]
   },
   plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebPackPlugin({
         template: './src/index.html',
         filename: './index.html',
         title: 'Production',
      })
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   }
}