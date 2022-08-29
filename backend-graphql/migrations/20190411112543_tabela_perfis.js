
exports.up = function(knex, Promise) {
  return knex.schema.createTable('role', table => {
      table.increments('id').primary()
      table.string('type').notNull().unique()
  }).then(function () {
      return knex('role').insert([
          { type: 'comum' },
          { type: 'admin' },
      ])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('role')
};
