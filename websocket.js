const ws = require('websocket-stream')
const stream = ws('ws://localhost:8099')

// create readable stream with text
const Readable = require('stream').Readable;
const s = new Readable();
s.push('hello\n');
s.push(null);

// pipe to websocket
s.pipe(stream)
