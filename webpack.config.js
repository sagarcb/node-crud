const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // Set target to Node.js
    entry: './index.js', // Your main entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    externals: [nodeExternals()], // Exclude Node.js core modules and dependencies
    // Add more configuration options as needed
};
