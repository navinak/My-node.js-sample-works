/**
 * Created by navina on 9/6/16.
 */
var connect = require('connect');
var http = require('http');

// Create a connect dispatcher
var app = connect().listen(3000);

// Register with http
http.createServer(app);

console.log('server running on port 3000');