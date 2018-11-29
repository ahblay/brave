const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

  server.post('/api/config', test)

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

function test(req, res) {
    console.log(req.body);
    var configData = JSON.stringify(req.body);
}