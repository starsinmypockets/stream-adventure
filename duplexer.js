const spawn = require('child_process').spawn
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
  const childProc = spawn(cmd, args)
  const readable = (childProc.stdin)
  const writeable = (childProc.stdout)
  return duplexer(readable, writeable)
}
