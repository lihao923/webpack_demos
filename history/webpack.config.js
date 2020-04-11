let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build') // __dirname:指的是以当前目录下产生一个dist目录
    }
}




