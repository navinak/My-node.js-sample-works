/**
 * Created by navina on 24/6/16.
 */

var express = require('express');
var app = express();
var fs=require('fs');
var mongoose = require('mongoose');
//var db = mongoose.connect('test');


//var MongoClient = require('mongodb').MongoClient;
mongoose.connect("mongodb://localhost/exampleDb", function(err, db) {
    if(err) throw err;
    else{
        console.log("We are connected");

    }
});
var lnSchema = new mongoose.Schema({
    name: String,
    pd: String
});

//mongoose.model('Document', user);
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
        var helo= mongoose.model('samplemodel', lnSchema);
        var user = new helo({
            name:username,
            pd:password
        });

        user.save(function (err) {
            if (err) throw err;

            console.log('User saved successfully!');
        
        });
        

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