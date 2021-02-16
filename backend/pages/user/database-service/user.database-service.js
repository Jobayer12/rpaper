const knexnest = require('knexnest');
const {getConnection} = require('../../../database/connection/connection')

exports.loadUser = async searchClause => {
    const knex = await getConnection();
    return knexnest(knex.select([
        'u.id as _id',
        'u.first_name as _firstName',
        'u.last_name as _lastname',
        'u.email as _email',
        'u.phone as _phone',
        'authority_levels.id as _authorities_id', 'authority_levels.name as _authorities_name'
    ]).from('users as u').leftJoin('user_authorities as user_auth', function () {
        this.on('u.id', '=', 'user_auth.user_id')
    }).leftJoin('authority_levels', function () {
        this.on('user_auth.authority_id', '=', 'authority_levels.id');
    }).where(searchClause).orderBy('u.id', 'desc')).then(user => {
        return user;
    });
}

exports.createLocalUser = async user => {
    const knex = await getConnection();
    return knex.insert(user, ['id']).into('users').then(userId => {
        return knex.insert({user_id: userId[0].id, authority_id: 4}, ['user_id']).into('user_authorities')
    })
}

exports.loginUser = async searchClause => {
    const knex = await getConnection();
    return knexnest(knex.select([
        'u.id as _id',
        'u.first_name as _firstName',
        'u.last_name as _lastname',
        'u.email as _email',
        'u.phone as _phone',
        'u.password as _password',
        'authority_levels.id as _authorities_id', 'authority_levels.name as _authorities_name'
    ]).leftJoin('user_authorities as user_auth', function () {
        this.on('u.id', '=', 'user_auth.user_id')
    }).leftJoin('authority_levels', function () {
        this.on('user_auth.authority_id', '=', 'authority_levels.id');
    }).from('users as u').where(searchClause)).then(user => {
        return user;
    });
}
exports.updateUserInfo = async (id, user) => {
    const knex = await getConnection();
    return knexnest(knex
        .where('id', +id)
        .update(user, ['id'])
        .into('users'))
        .then(data => {
            if (data)
                return data;
            else
                throw new Error('Could not update profile');
        });
}
exports.updateAuthority = async authority => {
    const knex = await getConnection();
    const user_id = authority.user_id;
    delete authority.user_id;
    return knex.where('user_id', +user_id).update(authority, ['user_id']).into('user_authorities');
}