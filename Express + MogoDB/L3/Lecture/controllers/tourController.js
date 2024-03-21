const Tour = require('../models/tourModel');

module.exports.getAllTours = async (req, res) => {
    const { query } = req;
    const { sort = 'price', fields, page = 1, limit = 2, ...filters } = query;

    try{
        // const tours = await Tour.find(filters);
        let query = Tour.find(filters);

        // sorting
        const sortingParams = sort.split(',').join(' ');
        query = query.sort(sortingParams);
        
        // limiting fields
        if(fields){
            const fieldParams = fields.split(',').join(' ');
            query = query.select(fieldParams);
        }

        // pagination
        const docsToSkip = (page - 1) * limit;
        query = query.skip(docsToSkip).limit(limit);

        const tours = await query;
        
        res.status(200);
        res.json({
            status: 'success',
            result: tours.length,
            body:{
                tours: tours
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}

module.exports.createTours = async (req, res) => {
    try{
        const newTour = await Tour.create(req.body);
        res.status(201);
        res.json({
            status: 'success',
            body:{
                tour: newTour
            }
        });
    }
    catch(err){
        console.log(err);
        res.status(422);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}

module.exports.updateTour = async (req, res) => {
    const { id: paramId } = req.params;
    const {_id, __v, createdAt, ...body} = req.body;
    try{
        const tour = await Tour.findOneAndUpdate({"_id": paramId,}, {
            ...body,
            updatedAt: new Date(),
        }, {
            new: true,
        });
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(201);
        res.json({
            status: 'success',
            body: tour
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}

module.exports.getTour = async(req, res) => {
    const { id: paramId } = req.params;
    try{
        const tour = await Tour.findOne({
            "_id": paramId
        });
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(200);
        res.json({
            status: 'success',
            body:{
                tour: tour
            }
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}

module.exports.deleteTour = async (req, res) => {
    const { id: paramId } = req.params;
    try{
        const tour = await Tour.findOneAndDelete({
            "_id": paramId
        });
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(204);
        res.json({
            status: 'success',
            body: null
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}


/*
        filters = {
            difficulty: "easy",
            duration:{
                $lt: 10,
            },
            price:{
                $lte: 10000,
            }
        }

        ?difficulty=easy&duration[$lt]=10&price[$lte]=10000
        */

        /* 
            const tours = await Tour.find({
                difficulty: "easy",
                duration:{
                    $lt: 10,
                },
                price:{
                    $lte: 10000,
                }
            })

            -->
            const tours = await Tour
                                    .find()
                                    .where("difficulty")
                                    .equals("easy")
                                    .where("duration")
                                    .lt(10)
                                    .where("price")
                                    .lt(10000)

            let query = Tour.find()
            query = query.where("difficulty")
            query = query.equals("easy")
            query = query.where("duration")
            query = query.lt(10)
            query = query.where("price")
            query = query.lt(10000)  

            const tours = await query;

        */