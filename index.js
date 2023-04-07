const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('./src/config/mongodb')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.use('/ropaviajero', require('./src/routes/index.js'))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

dbConnect()
