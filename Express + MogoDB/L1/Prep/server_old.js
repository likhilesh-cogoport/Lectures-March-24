const app = require('./app');
const mongoose = require('mongoose');

const DATABASE = "mongodb+srv://likhileshexplorin:<PASSWORD>@cluster0.dpithd6.mongodb.net/<NAME>?retryWrites=true&w=majority&appName=Cluster0"
const DATABASE_NAME = "March16"
const DATABASE_PASSWORD = "abcd1234"

const DB_URL = DATABASE.replace('<PASSWORD>', DATABASE_PASSWORD).replace('<NAME>', DATABASE_NAME);

mongoose.connect(DB_URL).then((res)=>{
    console.log('-----------------DB Connected-----------------')
})

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

const testTour = new Tour({
    name:'MIT Tour 2',
    price: 47000,
});

testTour.save().then((doc)=>{
    console.log(doc);
}).catch((err)=>{
    console.log("Error ::", err);
})

const PORT = 1400
app.listen(PORT, ()=>{
    console.log('________________Server Started________________')
})