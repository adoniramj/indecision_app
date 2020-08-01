const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path : path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module: {
        rules : [
        {
            test : /\.js$/,
            loader : 'babel-loader',
            exclude : /node_modules/,
            options : {
                presets: ["env", "react"],
                plugins : ["transform-class-properties"]
            }
        },
        {
            test :/.\css$/,
            use : [
                "style-loader",
                "css-loader"
            ],
            exclude : /node_modules/
        }]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public')
    }
   

}