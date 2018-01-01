const watchOptions= {
    //检测修改的时间，以毫秒为单位
    poll: 1000,
        //防止重复保存二发生重复编译错误，这里设置500，是半秒内重复保存不进行打包
        aggregeateTimeout: 500,
            //不监听的目录
            ignored: /node_modules/
}
module.exports = watchOptions;