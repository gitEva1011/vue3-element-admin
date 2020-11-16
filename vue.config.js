module.exports = {
    publicPath: '/',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        host: "192.168.124.14", // 修改默认域名
        port: "58332", // 修改默认端口号
        https: false, // 非https请求
        open: false, // 自动启动浏览器
        before: require('./mock/mock-server.js')
        // proxy: {
        //     '/api':{
        //         target:'http://test.ppcms.haierzhongyou.com',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '/api':''
        //         }
        //     }
        // }
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/assets/scss/index.scss";`
            }
        }
    }
}