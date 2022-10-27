const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.listen(5501)
console.log('server escutando na porta 5501')

app.post('/mint', (req, res) => {
    console.log(req.body)
    res.send(`<h1>Nft mintada!!</h1>`)
})