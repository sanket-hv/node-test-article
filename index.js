require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan');
const app = express()

//Importing API
const api = require('./apis/api')

//Using Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger('dev'))
app.use('/api_v1.0/', api)

//Server configuration
const host = process.env.DOMAIN_NAME || `localhost`
const port = process.env.PORT || 8000
const prefix = process.env.HOSTPREFIX || `http`

app.listen(port, host, (err) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log(`Server running at : ${prefix}://${host}:${port}/`)
    }
})

module.exports = app