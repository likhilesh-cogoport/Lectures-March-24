const fs = require('fs');
const fsPromises = require('fs/promises');
const express = require('express');
const app = express();

app.use(express.json())

const tours = JSON.parse(fs.readFileSync('./data/simple-tours.json'));

app.get('/api/v1/tours', function (req, res) {
    res.status(200);
    res.json({
        status: 'success',
        results: tours.length,
        body:{
            tours: tours
        }
    });
})

app.post('/api/v1/tours', function (req, res) {
    const data = req.body;
    console.log(data);

    const id = tours[tours.length-1].id + 1;
    const newEntry = {...data, id:id};
    console.log(newEntry);

    fsPromises.writeFile('./data/simple-tours.json', JSON.stringify([...tours, newEntry]));

    res.status(201);
    res.send({
        status: 'success',
        body:{
            tour: newEntry
        }
    });
})

app.patch('/api/v1/tours/:id', function (req, res) {
    const data = req.body;
    const { id: paramId } = req.params;
    
    let resource = tours.find(({id})=> id==paramId)
    const newResource = {...resource, ...data};
    const newTours = tours.map((elem)=>{
        if(elem.id==paramId){
            return newResource;
        }
        else{
            return elem;
        }
    })
    fsPromises.writeFile('./data/simple-tours.json', JSON.stringify(newTours));


    res.status(201);
    res.send({
        status: 'success',
        body:{
            tour: newResource
        }
    });
})

app.delete('/api/v1/tours/:id', function (req, res) {
    const { id: paramId } = req.params;

    let idx = -1;
    tours.forEach(({id}, indx)=>{
        if(id==paramId){
            idx = indx;
        }
    });
    console.log(idx);

    tours.splice(idx, 1);

    // console.log(tours);
    
    fsPromises.writeFile('./data/simple-tours.json', JSON.stringify(tours));

    res.status(204);
    res.send({
        status: 'success',
        body:{
            tour: null
        }
    });
})



app.listen(1400, ()=>{
    console.log('________________Server Started________________')
})