var base = 'https://logs.now.sh';
var intercept = require('intercept-stdout');

var url = 'https://logs.now.sh/';
var io = require('socket.io-client');
var socket = io.connect(url);

function logger(secret) {
    var stdoutHandler = function(txt) {
        socket.emit('emit-room', secret, txt);
        return txt;
    };
    var stderrHandler = function(txt) {
        socket.emit('emit-room', secret, txt);
        return txt;
    }

    intercept(stdoutHandler, stderrHandler);
}

module.exports = logger;