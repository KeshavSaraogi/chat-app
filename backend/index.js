const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/app')
const router = require('./router')

const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(router)
app.use(cors())

const port = 3000
    
app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})
