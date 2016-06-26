/**
 * Created by navina on 4/6/16.
 */
var http=require("http");
var server=http.createServer(function (request,response) {
    console.log("user reqstd")
    //response.write("hai");
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end();

});
server.listen(8000);
console.log("server is running");