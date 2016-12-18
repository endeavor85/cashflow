var express = require('express');
var path = require('path');
var app = express();

var port = 1337;

app.use(express.static(__dirname));

app.set('port', process.env.PORT || port);

var http = require('http');

http.createServer(app).listen(app.get('port'), function() {
	console.log('Server running at http://127.0.0.1:' + port + '/');
});