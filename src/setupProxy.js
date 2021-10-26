//配置proxy解决跨域问题

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api',{
            target:'http://localhost:7899',
            changeOrigin:true,
            pathRewrite:{'^/api':''}
        })
    )
}
