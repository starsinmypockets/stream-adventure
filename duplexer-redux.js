const spawn = require('child_process').spawn
const duplexer = require('duplexer2')
const through = require('through2')

module.exports = function (counter) {
  let counts = {}
  const stream = through.obj(write, end)
  
  function write (row, _, next) {
    if (row.country in counts) {
      counts[row.country] += 1
    } else {
      counts[row.country] = 1
    }
    next()
  }

  function end(done) {
    counter.setCounts(counts)
    done()
  } 

  return duplexer({objectMode: true}, stream, counter)
}
