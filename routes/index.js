const express = require('express');

const route = express.Router();

const userRoutes = require('../routes/userRoutes');

route.use('/usuarios', userRoutes);

module.exports = route;
