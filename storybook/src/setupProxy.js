const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/get",
        createProxyMiddleware({
            target: "http://ugdev.cs.smu.ca:3099",
            secure: false,
            changeOrigin: true,
        })
    );
};
