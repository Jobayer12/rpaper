'use strict'
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DATABASE_HOST,
            port: 5432,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        },
        pool: {
            min: 10,
            max: 30,
            idleTimeoutMillis: 60000,
        },
        acquireConnectionTimeout: 20000,
        migrations: {
            tableName: 'migrations',
            directory: __dirname + '/../migrations',
            loadExtensions: ['.js']
        },
        seeds: {
            directory: __dirname + '/../seeds',
            loadExtensions: ['.js']
        },
    }
}