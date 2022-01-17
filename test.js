//first NodeJS application 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Virtual Machine!')
})

app.post('/post', (req, res) => {
    res.send('This is a post request!')
})

app.listen(port, () => {
    console.log(`Express Application  listening at port 3000`)
}) 