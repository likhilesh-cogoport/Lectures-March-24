const fs = require('fs');
const fsPromises = require('fs/promises');
const Tour = require("../models/tourModel");

module.exports.checkID = (req, res, next, val) => {
    const { id: paramId } = req.params;
    let resourceIndex = tours.findIndex(({id})=> id==paramId);

    console.log("\n✅ : paramId:", paramId)


    if(resourceIndex==-1){
        res.status(404);
        return res.send({
            status: 'fail',
            message: 'Invalid request id'
        });
    }

    next();
}

// module.exports.checkRequestBody = (req, res, next) =>{
//     const {id: redID, ...data} = req.body;
//     if(!data.name || !data.price){
//         res.status(400);
//         return res.send({
//             status: 'fail',
//             message: 'Required params: name, price'
//         });
//     }

//     next();
// }

module.exports.getAllTours = async (req, res) => {
    try{
        res.status(200);
        const tours = await Tour.find();
        res.json({
            status: 'success',
            results: tours.length,
            body:{
                tours: tours
            }
        });
    }
    catch(err){
        res.status(500);
        return res.json({
            status: 'fail',
            message: err,
        });
    }
}

module.exports.createTours = async (req, res) => {
    const { body } = req;
    try{
        const newTour = await Tour.create(body);
        res.status(201);
        res.json({
            status: 'success',
            body:{
                tour: newTour
            }
        });
    }
    catch(err){
        res.status(400);
        return res.json({
            status: 'fail',
            message: err,
        });
    }
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

module.exports.getTour = async(req, res) => {
    const { id: paramId } = req.params;
    console.log(typeof(paramId), paramId);
    try{
        res.status(200);
        const tours = await Tour.findById(paramId);
        res.json({
            status: 'success',
            body:{
                tour: tours
            }
        });
    }
    catch(err){
        res.status(404);
        return res.json({
            status: 'fail',
            message: err,
        });
    }
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