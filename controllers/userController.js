
const knex = require('../config/knexfile');

const userController = {
  all: async (req, res) => {
    const contact = await contactModel.where({ usuario_id: req.user.id });
    res.status(201).json({ error: false, contact });
  },
  one: async (userId) => {
    return await knex.select().from('usuarios').where('id', userId).first()
      .catch(error => { throw new Error('Error al obtener usuario: ' + error.message); });
  },
  create: async (userData) => {
    return await knex('usuarios').insert(userData)
      .catch(error => { throw new Error('Error al crear usuario: ' + error.message); });
  },
  update: async (userId, userData) => {
    return await knex('usuarios').where('id', userId).update(userData)
      .catch(error => { throw new Error('Error al actualizar usuario: ' + error.message); });
  },
  remove: async (userId) => {
    return await knex('usuarios').where('id', userId).del()
      .catch(error => { throw new Error('Error al eliminar usuario: ' + error.message); });
  }
};

module.exports = userController;

