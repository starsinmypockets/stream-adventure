const fs = require('fs')
const fname = process.argv[2]

fs.createReadStream(fname).pipe(process.stdout)
