/**
 * Created by navina on 3/6/16.
 */
var express = require('express');
var app = express();
var http = require('http'),
    fs = require('fs');
PORT=8080;
app.set('view engine','jade');
res.render('sample',{users:users});
//fs.readFile('./login.html', function (err, html) {
  //  if (err) {
    //    throw err;
    //}


    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();

    }).listen(PORT);
    console.log("Server listening on: http://localhost:%s", PORT);
