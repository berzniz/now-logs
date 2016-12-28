# now-logs
Stream your now.sh logs to your terminal
https://logs.now.sh

## Getting started

**Step 1** Install the node module
```
npm install now-logs --save
```

**Step 2** Come up with a secret key and require the now-logs module
```
require('now-logs')('my-secret-key')
```

**Step 3** Install the cli tool
```
npm install now-logs -g
```

**Step 4** See the realtime logs using your secret key
```
now-logs my-secret-key
```

That's it! Logs will stream to your terminal

## Frequently Asked Questions

### What is realtime logging?

Realtime logging allows you to see your server's output (stdout and stderr) as the program outputs them.

However, there is no persistence. The logs are not stored anywhere and there is no history to look at.

### Why not loggly/papertrail?

These are both incredible services and you should be using them. now-logs is a simple logging system that can be used before utilizing these tools.

### Where do I get my secret-key?

The secret-key is just a string you come up with. This will allow you and only the people who know the secret to see your server logs.

### Is this open source?

Yes. Check out the code of [now-logs on GitHub](https://github.com/berzniz/now-logs) and contribute.

### How does it work?
*now-logs* uses websockets to stream all output of your server to the *now-logs-server* hosted at [logs.now.sh](https://logs.now.sh). The server then streams the logs to connected *now-logs* clients.

While it is not required, you may host your own private *now-logs-server*. Learn more on the [now-logs-server GitHub page](https://github.com/berzniz/now-logs-server).

### Is this affiliated or endorsed by zeit.co?

No. This is my personal project, built in the spirit of the now eco-system.

### Who made this?

Tal Bereznitskey. Found me on Twitter as @ketacode at https://twitter.com/ketacode
