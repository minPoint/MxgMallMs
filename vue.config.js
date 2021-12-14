module.exports = {
    css: {
        loaderOptions: {
            sass: {
                //依次导入的公用的scss变量，公用的scss混入，共用的默认样式
                prependData: `@import "./src/assets/global.scss";`,
            },
        },
    },

    devServer: {
        // proxy: 'http://47.113.203.123:8082/',
        proxy: {
            'admin/': {
                // target: 'http://47.113.203.123:16666/', // 接口域名
                target: 'http://localhost:8820/', // 接口域名
                // target: 'http://192.168.1.44:8081/', // 接口域名
                // target: IP, // 接口域名
                changeOrigin: true, // 是否跨域
                // 是否使用代理
                ws: true,
                // 是否使用https
                // secure: true
                pathRewrite:{
                    '^admin/' : 'admin/'
                }
            }
        }
    }
}