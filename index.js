const next = require('next')
const fetch = require('isomorphic-fetch')
const express = require('express')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const bin = 'https://requestb.in/16pzdyp1'

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/log-request', (req, res) => {
    fetch(bin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    }).then(() => {
      res.end(JSON.stringify(req.body))
    }).catch((err) => {
      console.error(err)
      res.end('Error!')
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
