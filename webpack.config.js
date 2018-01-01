const entry  = require('./webpack_config/entry_webpack.js');
const output = require('./webpack_config/output_webpack.js');
const devServer = require('./webpack_config/server_webpack.js');
const plugins = require('./webpack_config/plugins_webpack.js');
const modules = require('./webpack_config/modules_webpack.js');
const watchOptions = require('./webpack_config/watchOptions_webpack.js');
watchOptions: watchOptions;
module.exports = {
    //配置文件入口
    entry: entry,
    //配置文件出口
    output: output,
    //模块，解读css，图片如何转换，压缩
    module:modules,
    //配置js插件
    plugins: plugins,
    //配置webpack开发服务功能
    devServer:devServer,
   
    // watchOptions: {
    //     //检测修改的时间，以毫秒为单位
    //     poll: 1000,
    //     //防止重复保存二发生重复编译错误，这里设置500，是半秒内重复保存不进行打包
    //     aggregeateTimeout: 500,
    //     //不监听的目录
    //     ignored: /node_modules/
    // }
       
}

