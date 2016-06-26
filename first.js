/**
 * Created by navina on 2/6/16.
 */

var http = require('http');
var fs=require('fs');
var url=require('url');
const PORT=8080;

function handleRequest(request, response){
    console.log("reqst started......");
    response.write("Hello client\n");

    fs.readFile("login.html");
    response.writeHead(200, {'Content-Type':html});
    resp.write(pgResp);
    
    response.end();


}

var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
