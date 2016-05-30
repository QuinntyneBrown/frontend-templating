module.exports = {
    entry: {
        react: "./demos/react/src/main.tsx"
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web,js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx$/, loader: "ts-loader"
            },
            {
                test: /\.ts$/, loader: "ts-loader"
            },
            {
                test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
            }
        ]
    }

}