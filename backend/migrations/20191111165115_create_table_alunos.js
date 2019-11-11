
exports.up = function(knex) {
    return knex.schema.createTable('aluno', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('cpf').notNull().unique()
        table.string('endereco').notNull()
        table.string('cep').notNull()
        table.string('email').notNull()
        table.string('telefone').notNull()
        table.integer('curso_id').references('id').inTable('curso').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('aluno')
};
