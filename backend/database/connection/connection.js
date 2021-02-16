const knex = require('knex');
const dbConfig  = require('./dbConfig');
const getConnection = async () => {
    let knexConnection;

    if (!knexConnection) {
        knexConnection = knex(dbConfig);
    }
    return knexConnection;
}

const runMigrations = async () =>{
    return (await getConnection()).migrate.latest();
}

const runSeed= async ()=>{
    return (await getConnection()).seed.run();
}

module.exports = { getConnection, runMigrations, runSeed }