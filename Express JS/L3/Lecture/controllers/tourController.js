const fs = require('fs');
const fsPromises = require('fs/promises');

const tours = JSON.parse(fs.readFileSync('./data/simple-tours.json'));

module.exports.checkID = (req, res, next, val) => {
    let resourceIndex = tours.findIndex(({id})=> id==val);

    if(resourceIndex==-1){
        res.status(404);
        return res.send({
            status: 'fail',
            message: 'Invalid request id'
        });
    }

    next();
}

module.exports.checkRequestBody = (req, res, next) =>{
    const {id: redID, ...data} = req.body;
    if(!data.name || !data.price){
        res.status(400);
        return res.send({
            status: 'fail',
            message: 'Required params: name, price'
        });
    }

    next();
}

module.exports.getAllTours = (req, res) => {
    res.status(200);
    res.json({
        status: 'success',
        results: tours.length,
        body:{
            tours: tours
        }
    });
}

module.exports.createTours = (req, res) => {
    const {id: redID, ...data} = req.body;

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
}

module.exports.updateTour = (req, res) => {
    const {id:redId, ...data} = req.body;
    const { id: paramId } = req.params;
    
    let resourceIndex = tours.findIndex(({id})=> id==paramId);
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
}

module.exports.getTour = (req, res) => {
    const { id: paramId } = req.params;

    let resourceIndex = tours.findIndex(({id})=> id==paramId);
    const resource = tours[resourceIndex];

    res.status(200);
    res.send({
        status: 'success',
        body:{
            tour: resource
        }
    });
}

module.exports.deleteTour = (req, res) => {
    const { id: paramId } = req.params;

    let resourceIndex = tours.findIndex(({id})=> id==paramId);
    tours.splice(resourceIndex, 1);
    
    fsPromises.writeFile('./data/simple-tours.json', JSON.stringify(tours));

    res.status(204);
    res.send({
        status: 'success',
        body:{
            tour: null
        }
    });
}