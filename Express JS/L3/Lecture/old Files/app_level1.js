const express = require('express');
const tourController = require('./controllers/tourController');

const app = express();

app.use(express.json())

app.get('/api/v1/tours', tourController.getAllTours);
app.post('/api/v1/tours', tourController.createTours)

app.patch('/api/v1/tours/:id', tourController.updateTour)
app.get('/api/v1/tours/:id', tourController.getTour)
app.delete('/api/v1/tours/:id', tourController.deleteTour)

app.get('/api/v1/users', getAllUsers)
app.post('/api/v1/users', createUser)

app.patch('/api/v1/users/:id', updateUser)
app.delete('/api/v1/users/:id', deleteUser)



app.listen(1400, ()=>{
    console.log('________________Server Started________________')
})