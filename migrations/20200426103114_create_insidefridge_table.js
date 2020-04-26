
exports.up = function(knex, Promise) {
  return knex.schema.createTable('insidefridge', (table) => {
    table.increments();
    table.text('name');
    table.integer('number');
    table.date('expire_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('insidefridge');
};