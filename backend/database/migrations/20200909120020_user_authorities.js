
exports.up = function(knex) {
        return knex.schema.createTable('user_authorities',(table)=>{
            table.primary(['user_id']);
            table.integer('user_id').notNullable()
                .references('id').inTable('users')
                .onUpdate('CASCADE');
            table.integer('authority_id').notNullable()
                .references('id').inTable('authority_levels')
                .onUpdate('CASCADE');
            table.bigInteger('created_at').notNullable().defaultTo(knex.raw('getCurrentUnixTimestamp() * 1000'));
            table.bigInteger('updated_at').nullable();
    });
};

exports.down = function(knex) {
  
};
