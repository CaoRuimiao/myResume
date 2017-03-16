var path=require('path');
var webpack=require('webpack');

module.exports={
    entry:{
        index:'./src/js/index.js',
        vue:['vue'],
        vueRouter:['vue-router'],
        vueResource:['vue-resource']
    },
    output:{
        path:path.join(__dirname,'/dist'),
        publicPath:'../../dist/',
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        loaders:[{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/
        },
        {
            test:/\.vue$/,
            loader:'vue-loader'
        },
        {
            test:/\.(png|jpg|gif|jpeg)/,
            loader:'url-loader?limit=2048'
        }]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:['vueResource','vueRouter','vue'],
            filename:'[name].js',
            minChunks:Infinity
        }),
        // new webpack.ProvidePlugin({
        //     Vue: 'vue',
        //     VueRouter: 'vue-router'
        // })
    ]
}