const fridgeItems = require('../fridgeItems');

exports.seed = function(knex) {
  return knex('insidefridge').del()
    .then(function () {
      return knex('insidefridge').insert(fridgeItems);
    });
};
