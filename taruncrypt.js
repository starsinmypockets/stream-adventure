const createGunzip = require('zlib').createGunzip
const tar = require('tar')
const concat = require('concat-stream')
const parser = new tar.Parse()
const crypto = require('crypto')

const cypherName = process.argv[2]
const cypherPass = process.argv[3]
const decipher = crypto.createDecipher(cypherName, cypherPass)

parser.on('entry', function (e) {
  const hasher = crypto.createHash('md5', { encoding: 'hex'})
  if (e.type !== 'File') return e.resume()
  e.pipe(hasher).pipe(concat(function (hash) {
    console.log(hash + ' ' + e.path)
  }))
})

process.stdin.pipe(decipher).pipe(createGunzip()).pipe(parser)
