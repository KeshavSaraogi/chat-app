const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/app')
const router = require('./router')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(router)

const port = 3000
    
app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})
