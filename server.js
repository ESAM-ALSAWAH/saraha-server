const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const port = process.env.PORT || 5500
require('dotenv').config()
app.use(express.json())
app.use(morgan('dev'))
mongoose
  .connect(
    'mongodb+srv://admin:admin@main.kcpv4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .catch((err) => console.log(err))
const allowlist = [
  'http://localhost:3000',
  'https://saraha-client.herokuapp.com',
]
const corsOptionsDelegate = function (req, callback) {
  var corsOptions
  if (allowlist.indexOf(req.header('Origin')) !== -1)
    corsOptions = { origin: true }
  else corsOptions = { origin: false }

  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate))
require('./src/routes/index.routes')(app)
app.listen(port, () => console.log(`server is runing on port ${port}`))
