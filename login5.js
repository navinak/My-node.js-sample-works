/**
 * Created by navina on 24/6/16.
 */
/**
 * Created by navina on 20/6/16.
 */
var express = require('express');
var app = express();
var fs=require('fs');
var mongoose = require('mongoose');
//var db = mongoose.connect('test');


//var MongoClient = require('mongodb').MongoClient;
mongoose.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if(!err) {
        console.log("We are connected");
    }
});




var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var User = new Schema({
    'name': { type: String, index: true },
    'password': String
});
mongoose.model('Document', User);
app.use(express.static('public'));
app.get('/login.html', function (req, res) {
    res.sendFile( __dirname + "/" + "login.html" );
});

app.get('/process_get', function (req, res) {
    username=req.query.username;
    password=req.query.password;
    if(username==password)
    {
        response ="login";
        var user = new User();
        user.name= 'username';
        user.password='password';
        user.save();

        //res.sendFile( __dirname + "/" + "index.html" );
    }
    else
        response="Incorrect password";
    console.log(response);
    res.end();
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});