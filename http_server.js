const http = require('http')
const fs = require('fs')
const through = require('through2')
const toUpper = through(write, end)

function write (buff, _, next) {
  const out = buff.toString().toUpperCase()
  this.push(out)
  next()
}

function end (done) {
  done()
}

const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
	req.pipe(toUpper).pipe(res)
    }
})

server.listen(process.argv[2])
