/**
 * Created by navina on 20/6/16.
 */
var express = require('express');
var serveStatic = require('serve-static');

var app = express()
    .use(serveStatic(__dirname + '/public'))
    .listen(3000);