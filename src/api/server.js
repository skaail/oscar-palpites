const express = require('express')
const cors = require('cors')
const app = express()
var randomToken = require('random-token');

app.use(cors())

app.use('/login', (req, res) => {
    res.send({
        token: randomToken(16),
        teste: req.body
    })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));