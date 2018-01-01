const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack'); //删除未使用的css  有bug，选择器名字里不能含有div字样，如.div或者#div
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        minify: {
            removeAttributeQuotes: true
        },
        hash: true,
        template: './src/index.html'
    }),
    new ExtractTextPlugin('css/index.css'), //配置css在dist的生成目录
    // new UglifyJSPlugin()   //js压缩
    new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, '../src/*.html'))
    }),
    new webpack.BannerPlugin('——————author： 袁庆龙——————'), //文件头注释
    new webpack.ProvidePlugin({   //第二种方式打包类库 如果在js中引用该类库，就会被打包到出口文件中（entry.js），否则不会
        $:"jquery" ,        //放入项目中要引入的库
        Vue:"vue"
    }),
    new webpack.optimize.CommonsChunkPlugin({  //将类库单独存放
        //name对应入口名
        name:['jquery','vue'],
        //把文件打包到哪里，路径
        filename:'assets/js/[name].js',
        //最小文件数
        minChunks:2
    }),
    new CopyWebpackPlugin([{
        from : path.join(__dirname,'../src/public'),
        to :'./public'
    }])
];
module.exports = plugins;