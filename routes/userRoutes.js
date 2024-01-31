const express = require('express');

const route = express.Router();

const userController = require('../controllers/userController');

route.get('/', userController.all);
route.get('/:id', userController.one);
route.post('/', userController.create);
route.put('/:id', userController.update);
route.delete('/:id', userController.remove);

module.exports = route;
