const express = require('express')
const fs = require('fs');
const app = express()

const port = 3001
app.get('/product', (request, response) => {
    let data = fs.readFileSync('./statics/product_des.json');
    response.status(200).json(data)
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

}) 