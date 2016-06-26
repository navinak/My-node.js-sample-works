/**
 * Created by navina on 20/6/16.
 */
var express = require('express');
var app = express();
var fs=require('fs');


var mongoose = require('mongoose');
var db = mongoose.connect('test');
db.on('error', console.error);
db.once('open', function() {

    var lnSchema = mongoose.Schema({
        name: String,
        pd: String
    });

});

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
        var lgn= mongoose.model('lgn', lnSchema);
        var addnew=new lgn({
            name:'username',
            pd:'password'
        });
        addnew.save(function(err, addnew) {
            if (err) return console.error(err);
            console.dir(addnew);
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