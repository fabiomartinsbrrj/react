const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//vai aplicar para toda requisição
server.use(bodyParser.urlencoded({ extended:true }))

server.use( bodyParser.json() )

server.listen( port, function () {
    console.log(`BACKEND is runnign on port ${port}`)
})