const trumpet = require('trumpet')
const through = require('through2')

const tr = trumpet()
const yell = through(write)

function write (buff, _, next) {
  this.push(buff.toString().toUpperCase())
  next()
}

const loud = tr.select('.loud').createStream()

loud.pipe(yell).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)
