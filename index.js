require('dotenv').config();

const express = require('express');


const routes = require('./routes/index');

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});