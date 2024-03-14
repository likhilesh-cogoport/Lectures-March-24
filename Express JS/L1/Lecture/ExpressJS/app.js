const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello Dreamers!');
})

app.get('/products', function (req, res) {
    res.send({
        name: 'likhilesh',
        age: '23'
    });
})

app.listen(1400, ()=>{
    console.log('________________Server Started________________')
})