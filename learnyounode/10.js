var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
    socket.end(strftime("%F %R")); // Pass Date string as parameter
});

server.listen(process.argv[2]);
