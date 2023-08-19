const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req,res) {
    res.send('Hello World! Alkesh here...') 
}
app.get('/', handleFirstRequest)

function started() {
    console.log(`My first web app listening on port ${port}`)
}

app.listen(port, started)
