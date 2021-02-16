const knexnest = require('knexnest');
const {getConnection} = require('../../../database/connection/connection')

exports.loadAllCategories = async searchClause =>{
    const knex = await getConnection();
    return  knexnest(knex.select([
        'c.id as _id',
        'c.title as _title',
        'u.id as _creator_id',
        'u.first_name as _creator_firstName',
        'u.last_name as _creator_lastName'
    ]).from('categories as c')
        .leftJoin('users as u', function () {
            this.on('c.user_id', '=', 'u.id')
        })
        .where(searchClause).orderBy('c.created_at', 'desc')).then(categories=>{
        return categories;
    });
}

exports.createCategories = async categories =>{
    const knex = await getConnection();
    return knex.insert(categories,['id']).into('categories')
}

exports.updateCategoriesById = async (id, categories) =>{
    const knex = await getConnection();
    return knex
        .where('id', +id)
        .update(categories, ['id'])
        .into('categories');
}

exports.deleteCategoriesById = async id =>{
    const knex = await getConnection();
    const deletedTime = {
        deleted_at: Math.round((new Date()).getTime())
    }
    return knex
        .where('id', +id)
        .update(deletedTime, ['id'])
        .into('categories as c');
}
