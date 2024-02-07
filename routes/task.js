const knex = require('../config/knexfile');
const tasks = require('../data/task');
const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router();
route.use(bodyParser.json());

route.get('/tareas', async (req, res) => {
  try {
    const tasks = await knex.select().from('tareas');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas' });
  }
});

route.post('/agregar-tarea', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json({ message: 'Tarea agregada correctamente' });
});

route.put('/actualizar-tarea/:taskId', (req, res) => {
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

module.exports = route;