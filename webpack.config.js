const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const compiler = webpack({
    
});

compiler.outputFileSystem = fs;

compiler.run((error, status) => {
    const content = fs.readFileSync('./src/node/server/server.js');
    if (status.hasErrors()) {
        console.log('Error: ' +
            status.toString({
                chunks: false,
                colors: true
            })
        );
    }
});

module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        app: './src/angular/js/app.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './src/angular/dist/js/')
    }
};