const fs = require('fs');
const fsPromises = require('fs/promises');
const express = require('express')
const app = express()

app.use(express.json())

const tours = JSON.parse(fs.readFileSync('./data/simple-tours.json', {encoding: 'utf8'}));

app.get('/tours', function (req, res) {
    res.send(tours);
})

app.post('/tours', function (req, res){
    const reqData = req.body;
    const id = (tours[tours.length - 1].id + 1);
    const entryData = {id:id, ...reqData};
    tours.push(entryData);
    try{
        fsPromises.writeFile('./data/simple-tours.json',JSON.stringify(tours));
    }
    catch(err){
        console.log('Error::',err)
    }
    res.send('Done')
});

app.listen(1400, ()=>{
    console.log('________________Server Started________________')
})