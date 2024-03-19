const fs = require('fs');
const fsPromises = require('fs/promises');
const Tour = require("../models/tourModel");

module.exports.getAllTours = async (req, res) => {
    try{
        const { query: queryParams } = req;
        const { page, sort, limit, fields, ...directFilters } = queryParams;

        res.status(200);
        let query = Tour.find(directFilters);
        if(sort){
            query.sort(sort);
        }
        const tours = await query.lean();
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
            message: err.message,
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

module.exports.updateTour = async (req, res) => {
    const { id: paramId } = req.params;
    try{
        res.status(200);
        const tour = await Tour.findByIdAndUpdate(paramId, req.body,{
            new: true,
        });
        if(!tour) throw "Invalid tour id";
        res.json({
            status: 'success',
            body:{
                tour: tour
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

module.exports.getTour = async(req, res) => {
    const { id: paramId } = req.params;
    try{
        res.status(200);
        const tours = await Tour.findById(paramId);

        if(!tours) throw "Invalid tour id";

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

module.exports.deleteTour = async (req, res) => {
    const { id: paramId } = req.params;
    try{
        res.status(204);
        const tours = await Tour.findByIdAndDelete(paramId);
        if(!tours) throw "Invalid tour id";
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