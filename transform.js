const through = require('through2')
const stream = through(write, end)

function write (buff, encoding, next) {
  const out = buff.toString().toUpperCase()
  this.push(out)
  next()
}

function end (done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout)
