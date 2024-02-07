const express = require('express');
const route = express.Router();


route.get('/', (req, res) => {
  res.send('Hola mundo');
});


const PORT = 3000;
route.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

module.exports = route