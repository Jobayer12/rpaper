
exports.up = function(knex) {
    return knex('authority_levels').insert([
        {id: 1, name: 'SUPER_ADMIN'},
        {id: 2, name: 'ADMIN'},
        {id: 3, name: 'READ_ONLY'},
        {id: 4, name: 'NORMAL_USER'}
    ]);
};

exports.down = function(knex) {
  
};
