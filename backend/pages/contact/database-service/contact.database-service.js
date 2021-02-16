const knexnest = require('knexnest');
const {getConnection} = require('../../../database/connection/connection');

exports.loadAllContactUs = async searchClause =>{
    const knex = await getConnection();
    return  knexnest(knex.select([
        'c.id as _id',
        'c.name as _Name',
        'c.email as _email',
        'c.subject as _subject',
        'c.message as _message'
    ]).from('contact_us as c').where(searchClause).orderBy('c.created_at', 'desc')).then(contact=>{
        return contact;
    });
}

exports.createContactus = async contact =>{
    const knex = await getConnection();
    return knex.insert(contact,['id']).into('contact_us')
}