const express = require('express');
const route = express.Router();


route.get('/hola', (req, res) => {
  res.send('Hola mundo');
});


module.exports = route