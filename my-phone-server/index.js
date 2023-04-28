const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('This is my phone server')
})

app.listen(port, () => {
    console.log(`Phone Server listening on port ${port}`)
})