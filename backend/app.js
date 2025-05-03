const express = require('express');
const app = express();
const petRoutes = require('./routes/petRoutes');

app.use(express.json())

app.use('/pets', petRoutes)

module.exports = app;