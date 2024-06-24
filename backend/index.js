const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/app')
const router = require('./router')
const cors = require('cors')
const http = require('http')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors());

app.use(router)
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/uploads'))

const port = 3000

const server = http.createServer(app)
const socketServer = require('./socket')
socketServer(server)
    
server.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})
