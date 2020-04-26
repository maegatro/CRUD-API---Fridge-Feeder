const knex = require('./knex'); //the connection

module.exports = {
  getAll() {
    return knex('insidefridge');
  },
  getOne(id) {
    return knex('insidefridge').where('id', id).first();
  },
  create(insidefridge) {
    return knex('insidefridge').insert(insidefridge, '*');
  },
  update(id, insidefridge) {
    return knex('insidefridge').where('id', id).update(insidefridge, '*');
  },
  delete(id) {
    return knex('insidefridge').where('id', id).del();
  }
}
