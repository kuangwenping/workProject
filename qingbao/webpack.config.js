/**
 * Created by lenovo on 2017/6/6.
 */
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:{
        'airdata':"./src/pages/aircraftdata/js/aircraftdata.js",
        'companyariline':"./src/pages/linedata/children/companyariline.js",
        'calculateAir':"./src/pages/calculate/index.js"
        
    },

    output:{
        path:__dirname+'/dist',
        filename:'js/[name].js',
        publicPath: '/dist/',
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                query:{
                    presets:["es2015"]
                }
            },
            {
                test:/\.html/,
                loader:'html-loader'
            },
            {
                test:/\.(scss|css)$/,
                use:ExtractTextPlugin.extract({
                    fallback : "style-loader",
                    use:["css-loader","sass-loader"]
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'assets/icon/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                query:{
                    name: 'assets/icon/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'iconfont/[name].[ext]'
                }
            },
        ]
    },
    plugins:[
        new ExtractTextPlugin('css/[name].css'),

        new htmlWebpackPlugin({
            template:__dirname+'/src/pages/aircraftdata/index.html',
            chunks:['airdata'],
            filename:'html/airweight.html'
        }),

        new htmlWebpackPlugin({
            template:__dirname+'/src/pages/linedata/children/companyariline.html',
            chunks:['companyariline'],
            filename: 'html/companyariline.html'
        }),

        new htmlWebpackPlugin({
            template:__dirname+'/src/pages/calculate/airlinecalculate.html',
            chunks:['calculateAir'],
            filename: 'html/index.html'
        }),
    ]
}
