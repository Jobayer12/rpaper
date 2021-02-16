
exports.up = async function(knex) {
    return knex('users').insert({
        first_name: 'Jobayer',
        last_name: 'Ahmed',
        email: 'Jobayer@gmail.com',
        phone: '',
        password: '$2a$10$F.hvYaKK1DnPLauHvk8/Ae15r81ZBN8TWc8GXIDtyPu3CGQ5xZ12a'
    }, ['id']).then(async userId=>{
        return knex('user_authorities').insert({authority_id: 1, user_id: userId[0].id});
    });
};
exports.down = function(knex) {
  
};
