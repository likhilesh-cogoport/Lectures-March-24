const app = require('./app');
const mongoose = require('mongoose');


DATABASE_URL = "mongodb+srv://likhileshexplorin:<PASSWORD>@cluster0.dpithd6.mongodb.net/<NAME>?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_NAME = "March16"
DATABASE_PASSWORD = "abcd1234"

const db_url = DATABASE_URL.replace('<PASSWORD>', DATABASE_PASSWORD).replace('<NAME>', DATABASE_NAME);
mongoose.connect(db_url).then((con)=>{
    console.log('-------------Connected to Database------------');
});

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

const testTour = new Tour({
    name: 'MIT Tour',
    rating: 4.9,
    price: 13000,
    description: "Have a blast, it can be your last!"
})

testTour.save().then((doc)=>{
    console.log('-------------DOC Created------------');
    console.log(doc);
}).catch((err)=>{
    console.log('ERROR::', err);
})




const PORT = 1400
app.listen(PORT, ()=>{
    console.log('________________Server Started________________')
})