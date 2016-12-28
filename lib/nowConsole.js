var intercept = require('intercept-stdout');
var io = require('socket.io-client');
var addHttps = require('./addHttps');

var isString = function(obj) {
    return toString.call(obj) === '[object String]';
};
var defaultUrl = 'https://logs.now.sh/';

function logger(options) {
    options = options || {};
    if (isString(options)) {
        options = {
            secret: options
        }
    }
    var url = addHttps(options.url || defaultUrl);
    var secret = options.secret;

    if (!secret) {
        throw new Error('<secret-key> is not defined. Usage: require(\'now-logs\')(\'<secret-key>\')');
    }

    var socket = io.connect(url);

    var stdoutHandler = function(txt) {
        socket.emit('emit-room', secret, txt);
        return txt;
    };
    var stderrHandler = function(txt) {
        socket.emit('emit-room', secret, txt);
        return txt;
    };

    intercept(stdoutHandler, stderrHandler);
}

module.exports = logger;