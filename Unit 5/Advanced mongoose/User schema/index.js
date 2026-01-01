const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

// Routes
app.use('/', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/userProfiles')
    .then(() => app.listen(3000, () => console.log('Server running on 3000')))
    .catch(err => console.log(err));