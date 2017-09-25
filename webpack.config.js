const path = require('path');
const { dependencies } = require('./package.json');
const nodeModules = {};
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require('fs-extra');

// copy public file to dist
fs.copy('src/public/js', 'dist/public/js').then(() => {
    console.info('> src/public/js copied to dist/public/js');
});

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
        },
        extensions: ['.js', '.jsx']
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
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

// server config
let server = Object.assign({}, config, {
    entry: ['./src/server/index.js'],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: nodeModules
});

// entry
let index = Object.assign({}, config, {
    entry: ['./src/client/index.js'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/public')
    }
});

// entry
let style = {
    entry: ['./src/public/css/style.scss'],
    output: {
        filename: './tmp/_', // we don't need this file
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
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
                test: /\.(svg)$/,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
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
    plugins: [
        extractSass
    ]
};
module.exports = [server, index, style];
