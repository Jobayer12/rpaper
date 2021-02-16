
exports.up = function(knex) {
    return knex.schema.createTable('blog', function(table) {
        table.increments('id').primary();
        table.integer('user_id', 100).notNullable()
            .references('id').inTable('users').onUpdate('CASCADE');
        table.string('title', 255).notNullable();
        table.text('description').notNullable();
        table.integer('category_id').nullable().references('id')
            .inTable('categories').onUpdate('CASCADE');
        table.bigInteger('created_at').notNullable().defaultTo(knex.raw('getCurrentUnixTimestamp() * 1000'));
        table.bigInteger('updated_at').nullable();
        table.bigInteger('deleted_at').nullable();
    })
};

exports.down = function(knex) {
  
};
