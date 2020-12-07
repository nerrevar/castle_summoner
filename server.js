const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.static('dist'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.status(200).sendFile('index.html', { root: 'dist'})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
