/**
 * Created by navina on 23/6/16.
 */
/**
 * Created by navina on 20/6/16.
 */
var express = require('express');
var app = express();
var fs=require('fs');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
}

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
        db.login.insert(name:username,
                        password:password);
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