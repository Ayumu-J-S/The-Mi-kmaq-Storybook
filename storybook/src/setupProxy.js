const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/test",
        createProxyMiddleware({
            target: "http://ugdev.cs.smu.ca:3505",
            secure: false,
            changeOrigin: true,
        })
    );
};
