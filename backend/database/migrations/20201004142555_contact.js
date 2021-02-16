exports.up = function(knex, Promise) {
    return knex.schema.createTable('contact_us', function(table) {
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.string('email', 100).notNullable();
        table.string('message', 255).notNullable().unique();
        table.string('subject', 50).nullable();
        table.bigInteger('created_at').notNullable().defaultTo(knex.raw('getCurrentUnixTimestamp() * 1000'));
        table.bigInteger('updated_at').nullable();
        table.bigInteger('deleted_at').nullable();
    })
}

exports.down = function(knex, Promise) {
}