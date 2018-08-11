const concat = require('concat-stream')

process.stdin.pipe(concat(out => {
  const reversed =  out.toString().split('').reverse().join('')
  process.stdout.write(reversed)
}))

