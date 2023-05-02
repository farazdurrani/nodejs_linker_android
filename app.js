const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Allah o Akbar!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
