const HTMLWebPackPlugin = require("html-webpack-plugin");

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
      new HTMLWebPackPlugin({
         template: './src/index.html',
         filename: './index.html'
      })
   ],
   devServer: {
      hot: true,
      contentBase: './',
      historyApiFallback: true
   }
}