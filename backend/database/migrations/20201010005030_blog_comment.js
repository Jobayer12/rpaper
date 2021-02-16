
exports.up = function(knex) {
    return knex.schema.createTable('blog_comment', function(table) {
        table.increments('id').primary();
        table.integer('user_id', 100).notNullable()
            .references('id').inTable('users').onUpdate('CASCADE');
        table.string('comment', 255).notNullable();
        table.integer('blog_id').notNullable().references('id')
            .inTable('blog').onUpdate('CASCADE');
        table.bigInteger('created_at').notNullable().defaultTo(knex.raw('getCurrentUnixTimestamp() * 1000'));
        table.bigInteger('updated_at').nullable();
        table.bigInteger('deleted_at').nullable();
    })
};

exports.down = function(knex) {

};
