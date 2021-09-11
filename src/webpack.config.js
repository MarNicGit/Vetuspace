const path = require('path');

module.exports = {
    entry: ['./scripts/main.ts', './style/site.scss'],
    devtool: 'source-map',
    output: {
      filename: 'js/main.js',
      path: path.resolve(__dirname, 'wwwroot'),
    },
    module: {
      rules: [
        { test: /\.tsx?$/i, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.s[ac]ss$/i, use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css'
            }
          },
          {
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true
            }
          }
        ]}
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    optimization: {
      minimize: false
    },
    plugins: [
    ]
  };