const express = require('express');
const knex = require('../config/knexfile');


const userController = {
    all: () => {
      return knex.select().from('usuarios')
        .catch(error => { throw new Error('Error al obtener usuarios: ' + error.message); });
    },
    one: (userId) => {
      return knex.select().from('usuarios').where('id', userId).first()
        .catch(error => { throw new Error('Error al obtener usuario: ' + error.message); });
    },
    create: (userData) => {
      return knex('usuarios').insert(userData)
        .catch(error => { throw new Error('Error al crear usuario: ' + error.message); });
    },
    update: (userId, userData) => {
      return knex('usuarios').where('id', userId).update(userData)
        .catch(error => { throw new Error('Error al actualizar usuario: ' + error.message); });
    },
    remove: (userId) => {
      return knex('usuarios').where('id', userId).del()
        .catch(error => { throw new Error('Error al eliminar usuario: ' + error.message); });
    }
  };

module.exports = userController;


