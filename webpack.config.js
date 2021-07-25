const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',

    devtool: 'inline-source-map',

    entry: {
        background: path.resolve(__dirname, 'src/background.ts'),
        contentScript: path.resolve(__dirname, 'src/contentScript.ts')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'manifest.json')
                }
            ]
        })
    ]
}
