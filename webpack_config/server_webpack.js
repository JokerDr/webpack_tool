const path = require('path');
const devServer = {
    //基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
     //发服务器ip地址
    host: '127.0.0.1',
            //配置服务器端口号
    port: '8888',
     //服务端压缩是否开启
     compress: true
}


module.exports = devServer