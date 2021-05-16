const path = require('path');

module.exports = {
    entry: ['./www/scripts/main.ts', './www/style/site.scss'],
    devtool: 'source-map',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'www'),
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