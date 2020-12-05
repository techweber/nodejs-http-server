var http = require('http');
var port = 3000;
var msg = 'Hello and Welcome to Node JS';

http.createServer( function(req,res){
	console.log('Server is listening on port: ' + port);
	res.write(msg);
	res.end();
}).listen(port);