
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reset_password', function(table) {
        table.increments('id').primary();
        table.integer('user_id').notNullable()
        .references('id').inTable('users');
        table.text('token').notNullable();
        table.boolean('is_active').notNullable().defaultTo(true);
        table.bigInteger('created_at').notNullable().defaultTo(knex.raw('getCurrentUnixTimestamp() * 1000'));
        table.bigInteger('updated_at').nullable();
        table.bigInteger('deleted_at').nullable();
    })
}

exports.down = function(knex, Promise) {
}