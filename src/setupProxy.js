//配置proxy解决跨域问题

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api',{
            target:'http://114.117.199.144:8000',
            changeOrigin:true,
            pathRewrite:{'^/api':'/api/v1'}
        })
    )
}
