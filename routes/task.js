const express = require('express');
const app = express();

// Importar el objeto task
const task = require('../data/task.json');

// Definir la ruta
app.get('/tasks', (req, res) => {
  res.json({
    success: true,
    message: 'Lista de tareas',
    data: task
  });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});