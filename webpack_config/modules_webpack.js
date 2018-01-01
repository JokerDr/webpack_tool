
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //js压缩
const modules = {
    rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        importLoader: 1
                    }
                },
                    "postcss-loader"]     //css前缀补全
            })
        }, {
            test: /\.(png|jpg|gif)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 500, //单位是b，小于该设定长度就会转换成base64编码保存在css中，大于就会单独的生成一个文件
                    outputPath: 'images/'
                }
            }]
        },
        {
            test: /\.(html|htm)$/i,  //html打包和分离
            use: [{
                loader: 'html-withimg-loader'
            }]
        }, {
            test: /.scss$/,  //sass打包和分离
            //    use:[{
            //        loader:'style-loader',
            //        loader:'css-loader',
            //        loader:'sass-loader'
            //    }
            // use:['style-loader','css-loader','sass-loader']  //代码未把css样式从js中分离出去
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    'css-loader',
                    'sass-loader'  //将scss文件打包到css文件中
                ]
            })
        }, {
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        "env", "react"
                    ]
                }
            },
            exclude: /node_modules/
        }

    ]

}
module.exports = modules;