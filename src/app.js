require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { HomeRouter } = require('./routes/home');
const { UserRouter } = require('./routes/user');

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATA_SOURCE);

const app = express();
app.use(express.json());
app.use(HomeRouter);
app.use(UserRouter);
app.listen(port,()=>console.log(`Listen on http://localhost:${port}`));

module.exports = app;