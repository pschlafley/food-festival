const path = require('path');
const webpack  = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: { 
        apps: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
          {
            test: /\.jpg$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name(file) {
                    return '[path][name].[ext]';
                  },
                  publicPath: function(url) {
                    return url.replace('../', '/assets/');
                  }
                }
              },
              {
                loader: 'image-webpack-loader'
              }
            ]
          }
        ]
    },
      

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery'
        }),
        new BundleAnalyzerPlugin({
            // this will output an html file called report.html that will generate in the dist folder
            analyzerMode: 'static'
        })
    ],

    mode: 'development'
};