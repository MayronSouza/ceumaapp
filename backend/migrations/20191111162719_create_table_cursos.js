
exports.up = function(knex) {
    return knex.schema.createTable('curso', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.date('data_cadastro').notNull()
        table.integer('carga_horaria').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('curso')
};
