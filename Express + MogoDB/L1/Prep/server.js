const app = require('./app');
const mongoose = require('mongoose');

const DATABASE = "mongodb+srv://likhileshexplorin:<PASSWORD>@cluster0.dpithd6.mongodb.net/<NAME>?retryWrites=true&w=majority&appName=Cluster0"
const DATABASE_NAME = "March16"
const DATABASE_PASSWORD = "abcd1234"

const DB_URL = DATABASE.replace('<PASSWORD>', DATABASE_PASSWORD).replace('<NAME>', DATABASE_NAME);

mongoose.connect(DB_URL).then((res)=>{
    console.log('-----------------DB Connected-----------------')
});

const PORT = 1400
app.listen(PORT, ()=>{
    console.log('________________Server Started________________')
})