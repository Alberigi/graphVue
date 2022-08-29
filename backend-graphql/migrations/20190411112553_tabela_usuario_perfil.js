
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_role', table => {
        table.integer('user_id').unsigned()
        table.integer('role_id').unsigned()
        table.foreign('user_id').references('user.id')
        table.foreign('role_id').references('role.id')
        table.primary(['user_id', 'role_id'])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_role')
};
