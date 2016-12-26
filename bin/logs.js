#! /usr/bin/env node
var argv = process.argv;
if (argv.length !== 3) {
    console.log([
        'Usage:',
        '  now-logs <secret-key>',
        '',
        '<secret> is the secret you created when using:',
        'require(\'now-logs\')(<secret-key>)'
    ].join('\n'));

    process.exit()
}

var secret = argv[2];
var url = 'https://logs.now.sh/';

var io = require('socket.io-client');

var socket = io.connect(url);

console.log('Connecting...');
socket.on('connect', function() {
    console.log('Connected, showing logs for "' + secret + '"');
    socket.emit('room', secret);
});

socket.on('message', function(data) {
    try {
        console.log(data && data.replace('\n', ''));
    }
    catch (err) {
        console.error(err);
    }
});
