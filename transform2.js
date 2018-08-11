const through = require('through2')
const stream = through(write, end)
let i = 1

function write (buff, encoding, next) {
  const str = buff.toString()

  if (i % 2 != 0) {
    this.push(str.toLowerCase())
  } else {
    this.push(str.toUpperCase())
  }
  
  i++
  next()
}

function end (done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout)
