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
    filename: 'assets/css/style.css'
});

// Add common Configuration
let config = {
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
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
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
        path: path.resolve(__dirname, 'dist')
    }
}

module.exports = [server, app];
