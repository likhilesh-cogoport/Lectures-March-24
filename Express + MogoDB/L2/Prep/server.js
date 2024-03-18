const app = require('./app');
const mongoose = require('mongoose');

DATABASE_URL = "mongodb+srv://likhileshexplorin:<PASSWORD>@cluster0.dpithd6.mongodb.net/<NAME>?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_NAME = "March16"
DATABASE_PASSWORD = "abcd1234"

const db_url = DATABASE_URL.replace('<PASSWORD>', DATABASE_PASSWORD).replace('<NAME>', DATABASE_NAME);
mongoose.connect(db_url).then((con)=>{
    console.log('-------------Connected to Database------------');
}).catch((error)=>{console.log(error)});


const PORT = 1400
app.listen(PORT, ()=>{
    console.log('________________Server Started________________')
})