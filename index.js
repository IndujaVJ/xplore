const express = require('express')
const app = express()
const path = require('path')

app.get('/index_bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index_bundle.js'))
})
app.use(express.static('public'))

// Frontend Route
app.get(/\/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(3000, () => console.log('Xplore app listening on port 3000!'))
