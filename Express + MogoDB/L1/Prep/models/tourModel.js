const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name for the tour is mandatory'],
        unique: true,
    },
    price:{
        type: Number,
        required: true,
    },
    rating:{
        type: Number,
        default: 4.5
    },
    description: String
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;