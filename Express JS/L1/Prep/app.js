const express = require ('express');

const app = express();

app.get('/', (req, res)=>{
    res.status(200);
    res.send('Hare Krishna! Hare Ram!');
})

app.get('/home', (req, res)=>{
    res.status(200);
    res.send('Hare Krishna!! Hare Ram!!');
})

app.listen(1400, ()=>{
    console.log('*******Server Started*********');
})