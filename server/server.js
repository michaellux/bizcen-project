/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/api/query', (req, res) => {
  res.send('Form sent')
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000')
})
