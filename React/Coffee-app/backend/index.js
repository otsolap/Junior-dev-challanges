const coffees = require('./routes/coffees')
const connection = require('./db')
const cors = require('cors')
const express = require('express')
const app = express()
const writeDBinJson = require('./writeDBtoLocal')

connection()

app.use(express.json())
app.use(cors())

app.use('/api/coffees', coffees)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(
    `Live on port: ${port}`
))

writeDBinJson()
