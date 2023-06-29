const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, () => {
  console.log('listening on 8080');
})

app.use(express.static(path.join(__dirname, '../Client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
})
