/**
 * Created by navina on 2/6/16.
 */
var http = require('http'),
  fs = require('fs');
  var  PORT=8080;

fs.readFile('./login.html', function (err, html) {
//fs.readFile('./hello.jade', function (err, html) {
    if (err) {
        throw err;
    }


    http.createServer(function(request, response) {
        if(request.url=='/'){
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        }else{
            send404(response);
        }
    }).listen(PORT);
    console.log("Server listening on: http://localhost:%s", PORT);
});
function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}