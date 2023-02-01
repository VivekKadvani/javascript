const express = require('express')
const app = express()
const port = 3000
const path =require('path')

app.get('/', (req, res) => {
  // res.send('Hello World! ')
  res.sendFile(path.join(__dirname,'/index.html'));
})

app.get('/about', (req, res) => {
  res.send('this is about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})