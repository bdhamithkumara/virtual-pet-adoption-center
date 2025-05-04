const express = require('express');
const cors = require('cors');
const app = express();
const petRoutes = require('./routes/petRoutes');

app.use(cors());
app.use(express.json())

app.use('/pets', petRoutes)

module.exports = app;