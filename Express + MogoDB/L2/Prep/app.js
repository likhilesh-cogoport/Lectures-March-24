const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

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
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app;