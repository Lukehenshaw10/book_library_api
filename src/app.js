const express = require('express');

const readersRouter = require('./routes/reader');
const app = express();

app.use(express.json());

app.use('/readers', readersRouter);

module.exports = app;