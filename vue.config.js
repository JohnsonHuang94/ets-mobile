module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins:[
                    require('postcss-pxtorem')({
                        rootValue: 37.5,  // 根据设计稿尺寸，设置跟字体大小
                        // selectorBlackList: ['van-'], // 此处根据情况考虑是否要转换vant样式中的px，开启则不转换
                        propList: ['*']
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: {
            // 设置代理，可以根据不同前缀设置不同的请求ip，域名
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    }
}