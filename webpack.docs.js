'use strict';
const path = require('path');
const Glob = require('glob');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

function getEntry (globPath) {
  let entries = {};
  Glob.sync(globPath).forEach(function (entry) {
    let basename = path.basename(entry, path.extname(entry)),
      pathname = path.dirname(entry);
    if (!entry.match(/\/js\/lib\//)) {
      entries[pathname.split('/').splice(3).join('/') + '/' + basename] = entry;
    }
  });
  entries = {};
  entries['/index'] = './UI/index.js';
  console.log('entries', entries);
  return entries;
}
function resolve(dir) {
  return path.join(__dirname, './', dir);
}

function assetsPath(_path) {
  return path.posix.join('static', _path)
}

module.exports = {
  entry: getEntry('./UI/components/**/index*'),
  output: {
    library: 'mtl-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, './lib'),
    filename: path.posix.join('', '[name].js'),
    chunkFilename: path.posix.join('', '[id].[chunkhash].js'),
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
  },
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom',
    },
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      umd: 'vue',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(css|less)$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          { loader: 'css-loader?-autoprefixer', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: { config: { path: path.resolve(__dirname, '../postcss.config.js') } } },
          {
            loader: 'less-loader', //
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    // 请确保引入这个插件！这个插件才会将但文件组件中各个部分对应到其他load
    new VueLoaderPlugin(),
    require('autoprefixer'),
    require('postcss-px2rem'),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './lib'), path.resolve(__dirname, './public')],
      verbose: true,
    }),
    new AssetsPlugin({ path: path.join(__dirname, '../public/assets') }),
  ],
};

