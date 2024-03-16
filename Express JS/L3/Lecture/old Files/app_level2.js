const express = require('express');
const morgan = require('morgan');

const tourController = require('./controllers/tourController');
const userController = require('./controllers/userController');

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next)=>{
    res.append('Server-Time', new Date().toISOString());
    res.append('Secret-Key-From-My-Server', '123_abc');
    next();
})


// routes
app
    .route('/api/v1/tours')
    .get(tourController.getAllTours)
    .post(tourController.createTours)


app
    .route('/api/v1/tours/:id')
    .patch(tourController.updateTour)
    .get(tourController.getTour)
    .delete(tourController.deleteTour)

app
    .route('/api/v1/users')
    .get(userController.getAllUsers)
    .post(userController.createUser)

app
    .route('/api/v1/users/:id')
    .patch(userController.updateUser)
    .delete(userController.deleteUser)


// server
app.listen(1400, ()=>{
    console.log('________________Server Started________________')
})