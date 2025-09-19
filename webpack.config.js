const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GlobImporter = require('node-sass-glob-importer');


const config = {
  entry: ["./index.js"],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'custom_[name].css'
    })
  ],
  stats: {
    errorDetails: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: GlobImporter()
              }
            }
          }
        ],
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, "/")
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.output = {
      path: path.resolve(__dirname, "./dist/scripts/"),
      filename: 'custom_[name].js'
    };

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: "*.php", to: path.resolve(__dirname, "./dist") },
          { from: "*.css", to: path.resolve(__dirname, "./dist") },
          { from: "screenshot.png", to: path.resolve(__dirname, "./dist") },
          // { from: "includes", to: path.resolve(__dirname, "./dist/includes") },
          { from: "assets", to: path.resolve(__dirname, "./dist/assets") },
          { from: "custom_modules", to: path.resolve(__dirname, "./dist/custom_modules") },
          // { from: "public", to: path.resolve(__dirname, "./dist/public") },
        ],
      })
    );
  }

  if (argv.mode === 'development') {
    config.output = {
      path: path.resolve(__dirname, "./scripts/"),
      filename: 'custom_[name].js',
    };
  }

  return config;
}