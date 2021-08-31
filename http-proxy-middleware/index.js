/**
 * Module dependencies.
 *  */
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 *  * Configure proxy middleware
 *   */
const jsonPlaceholderProxy = createProxyMiddleware({
	target: "http://jsonplaceholder.typicode.com",
	changeOrigin: true, // for vhosted sites, changes host header to match to target's host
	logLevel: "debug"
});

const app = express();
const PORT = 3001;
/**
 *  * Add the proxy to express
 *   */
app.use("/users", jsonPlaceholderProxy);

app.listen(PORT);

console.log(`[DEMO] Server: listening on port ${PORT}`);
console.log(`[DEMO] Opening: http://localhost:${PORT}/users`);

require("open")(`http://localhost:${PORT}/users`);
