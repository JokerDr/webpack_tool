const path = require('path');
const output = {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: 'http://127.0.0.1:8888/'
}
module.exports = output; 