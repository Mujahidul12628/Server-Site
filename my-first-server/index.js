const express = require('express')
const app = express()
const port = 5100

app.get('/', (req, res) => {
    res.send('Allah help all of us in the way of duniah and Akhirah...Ya Allah')
})

app.get('/data', (req, res) => {
    res.send('More data coming soon')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})