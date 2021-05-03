const express = require('express')
const fs = require('fs');
const app = express()
var path = require('path');

const port = 3001
app.get('/product', (request, response) => {
    fs.readFile('./statics/product_des.json', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        let json_data = JSON.parse(data);
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200).json(json_data)
    })
})

var dir = path.join('./statics', 'product_img');


app.use(express.static(dir));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

})