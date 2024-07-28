const path = require('node:path');

module.exports = { // {}内をwebpackの設定となる
    entry: { // index.tsを見てファイルをまとめていく
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\/.ts$/
            }
        ]
    }
}