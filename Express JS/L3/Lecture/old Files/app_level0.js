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
    const {id: redID, ...data} = req.body;

    if(!data.name || !data.price){
        return res.send({
            status: 'fail',
            message: 'Required params: name, price'
        });
    }

    const id = tours[tours.length-1].id + 1;
    const newEntry = { id:id, ...data};

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
    const {id:redId, ...data} = req.body;
    const { id: paramId } = req.params;
    
    let resourceIndex = tours.findIndex(({id})=> id==paramId);

    if(resourceIndex==-1){
        return res.send({
            status: 'fail',
            message: 'Invalid request id'
        });
    }
    const resource = tours[resourceIndex];
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

app.get('/api/v1/tours/:id', function (req, res) {
    const { id: paramId } = req.params;

    let resourceIndex = tours.findIndex(({id})=> id==paramId);

    if(resourceIndex==-1){
        return res.send({
            status: 'fail',
            message: 'Invalid request id'
        });
    }

    const resource = tours[resourceIndex];

    res.status(200);
    res.send({
        status: 'success',
        body:{
            tour: resource
        }
    });
})

app.delete('/api/v1/tours/:id', function (req, res) {
    const { id: paramId } = req.params;

    let resourceIndex = tours.findIndex(({id})=> id==paramId);

    if(resourceIndex==-1){
        return res.send({
            status: 'fail',
            message: 'Invalid request id'
        });
    }

    tours.splice(resourceIndex, 1);
    
    fsPromises.writeFile('./data/simple-tours.json', JSON.stringify(tours));

    res.status(204);
    res.send({
        status: 'success',
        body:{
            tour: null
        }
    });
})

app.get('/api/v1/users', function (req, res) {
    res.status(500);
    res.json({
        status: 'fail',
        message: 'Route is yet to be configured...'
    });
})

app.post('/api/v1/users', function (req, res) {
    res.status(500);
    res.json({
        status: 'fail',
        message: 'Route is yet to be configured...'
    });
})

app.patch('/api/v1/users/:id', function (req, res) {
    res.status(500);
    res.json({
        status: 'fail',
        message: 'Route is yet to be configured...'
    });
})

app.delete('/api/v1/users/:id', function (req, res) {
    res.status(500);
    res.json({
        status: 'fail',
        message: 'Route is yet to be configured...'
    });
})



app.listen(1400, ()=>{
    console.log('________________Server Started________________')
})