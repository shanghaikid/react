const path = require('path');
const { dependencies } = require('./package.json');
const nodeModules = {};
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// get external dependencies
Object
    .keys(dependencies)
    .forEach((mod) => {
        nodeModules[mod] = `commonjs ${mod}`;
    });

const extractSass = new ExtractTextPlugin({
    filename: 'public/css/style.css'
});

// Add common Configuration
let config = {
    resolve: {
        alias: {
            css: path.resolve(__dirname, 'src/public/css'),
            images: path.resolve(__dirname, 'src/public/images'),
            components: path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'src',
                        publicPath: '/', // make it absolute to root, eg: /public/images/loading.svg
                    }
                  }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        extractSass
    ]
};

// server config
let server = {...config,
    entry: ['./src/server/index.js'],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: nodeModules
}

// front-end app config
let app = {...config,
    entry: ['./src/app/index.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/public')
    }
}

module.exports = [server, app];
