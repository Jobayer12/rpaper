
exports.up = function(knex) {
    return knex.schema.createTable('authority_levels',(table)=> {
        table.increments('id').primary();
        table.string('name', 100).notNullable();
    })
}
exports.down = function(knex) {
  
};
