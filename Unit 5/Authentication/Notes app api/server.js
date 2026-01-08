require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use('/auth', require('./routes/auth'));
app.use('/blogs', require('./routes/blogs'));

app.listen(3000, () => console.log("Server running on port 3000"));