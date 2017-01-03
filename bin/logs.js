#! /usr/bin/env node
var addHttps = require('../lib/addHttps');
var usage = [
    'Usage: now-logs [options] <secret-key>',
    '',
    '  <secret-key> is the secret you created when using:',
    '  require(\'now-logs\')(<secret-key>)'
].join('\n');

var checkSecretKey = function(options) {
    if (options._.length !== 1) {
        throw '';
    }
    return true;
};

var argv = require('yargs')
    .usage(usage)
    .alias('s', 'server')
    .describe('s', 'url to a now-logs-server.')
    .default('s', 'https://logs.now.sh')
    .coerce('s', addHttps)
    .check(checkSecretKey)
    .example('Stream logs with a secret:', 'now-logs abcd1234')
    .example('Stream logs using private server:', 'now-logs -s my-server.now.sh abcd1234')
    .argv;

var secret = argv._[0];
var url = argv.server;

var io = require('socket.io-client');

var socket = io.connect(url);

console.log('Connecting to', url, '...');
socket.on('connect', function() {
    console.log('Connected, showing logs for "' + secret + '"');
    socket.emit('room', secret);
});

socket.on('message', function(data) {
    try {
        console.log(data && data.replace && data.replace('\n', ''));
    }
    catch (err) {
        console.error(err);
    }
});
