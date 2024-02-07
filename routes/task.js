const express = require('express');
const app = express();

const tasks = require('../data/task');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/tareas', async (req, res) => {
  try {
    const tasks = await knex.select().from('tareas');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas' });
  }
});

app.post('/agregar-tarea', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json({ message: 'Tarea agregada correctamente' });
});

app.put('/actualizar-tarea/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const updatedTaskData = req.body;

  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTaskData };
    res.json({ message: 'Tarea actualizada correctamente' });
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});