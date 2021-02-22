var http=require('http');
var fs = require('fs');
 
var handleRequest = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./layout.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}).listen(8000);
 