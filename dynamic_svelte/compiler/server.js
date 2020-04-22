var http = require('http');
var svelte = require ("svelte");
var fs = require("fs");
var s = require('svelte/register')

http.createServer(function (req, res) {
	const App = require('./components/Articles.svelte').default;
	const { html, css, head } = App.render({ answer: 42 });
        res.setHeader("Access-Control-Allow-Origin", "*");
		res.end(html);

}).listen(8080); //the server object listens on port 8080
