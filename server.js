const express = require('express')
const app = express()
var cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 5500
app.use(cors())
app.use(express.json())
mongoose
  .connect(
    'mongodb+srv://admin:admin@main.kcpv4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .catch((err) => console.log(err))
require('./src/routes/index.routes')(app)
app.listen(port, () => console.log(`server is runing on port ${port}`))
