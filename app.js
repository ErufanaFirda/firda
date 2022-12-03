const express = require('express')
const app = express()
const port = 3007

app.get('/', (req, res) => {
  res.send('Hello World firda')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
