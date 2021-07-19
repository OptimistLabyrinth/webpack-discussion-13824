const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const contentBaseFolder = '/dist/'

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: [
        'module02',
        'print'
      ]
    },
    module02: {
      import: './src/module02.js'
    },
    print: {
      import: './src/print.js'
    }
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: contentBaseFolder,
    // filename: '[name].[contenthash].js',
    // publicPath: 'auto',
    path: path.join(__dirname, contentBaseFolder),
    clean: true
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
      favicon: './public/favicon.ico'
    }),
    new WebpackManifestPlugin({
      basePath: contentBaseFolder,
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        include: [
          path.join(__dirname, 'public'),
          path.join(__dirname, 'src')
        ],
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.join(__dirname, 'src'),
        type: 'asset/resource'
      },
      {
        test: /\.(c|t)sv/i,
        include: path.join(__dirname, 'src'),
        use: ['csv-loader']
      },
      {
        test: /\.css$/i,
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.m?js$/i,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          },
        }
      },
      {
        test: /\.html$/i,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: 'require'
          }
        }
      },
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, contentBaseFolder),
    compress: true,
    https: false,
    host: '0.0.0.0',
    port: 3080,
    hot: true,
    liveReload: true,
    open: false
  }
}
