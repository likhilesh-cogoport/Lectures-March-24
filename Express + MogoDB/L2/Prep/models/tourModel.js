const mongoose = require("mongoose");

const toursSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Tour name is mandatory"],
        unique: true,
    },
    price:{
        required: true,
        type: Number,
    },
    rating:{
        type: Number,
        default: 4.5,
    },
    description: String
});

const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;