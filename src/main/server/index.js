const express = require('express')
const routes = require('./routes')
const port = 3000

const start = function() {
  const app = express()

  app.use('/', routes)

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

module.exports = { start }
