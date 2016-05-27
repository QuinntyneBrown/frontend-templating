module.exports = {
    entry: {
        "angular": "./demos/angular/src/main.ts",
        "handlebars": "./demos/handlebars/src/main.ts",
        "react": "./demos/react/src/main.ts"
    },
    output: {
        path: "/dist",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web,js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, loader: "ts-loader"
            },
            {
                test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
            }
        ]
    }

}