//first NodeJS application 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Virtual Machine!')
})

app.get('/abbie', (req, res) => {
    var name = req.body.name;
    res.send('Hello' + name)
})

app.post('/name', (req, res) => {
    res.send('Getting a post request')
})

app.listen(port, () => {
    console.log(`Express Application  listening at port 3000`)
}) 