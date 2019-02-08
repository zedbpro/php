var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){

res.writeHead(200,{'content-Type':'text/html'});

var taha = fs.createReadStream(__dirname + '/index.html','utf8');

taha.pipe(res);


})

server.listen(3000,'127.0.0.1');

console.log('taha is the best');















/*var http = require('http');

var server = http.createServer(function(req, res){

res.writeHead(200,{'content-Type':'text/plain'});


})

server.listen(3000,'127.0.0.1');

console.log('taha is the best');*/
