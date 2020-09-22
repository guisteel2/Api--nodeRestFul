const port = 3003   


const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cores')
const queryParser = require('express-query-int')



server.use(allowCors)
server.use(bodyParser.urlencoded({express: true}))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(port, function(){
    console.log('pegou')
})


module.exports = server