module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: '빈칸으로 공부해요'
        }
    }
}