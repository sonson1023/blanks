module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: '빈칸 만들기'
        }
    }
}