const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const studentRouter = require('./routes/student.router');

mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/student', studentRouter);

app.listen(4000, () => {
    console.log(`server running on port ${PORT}`);
});
