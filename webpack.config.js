const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "d3-charts.js",
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}
