"use strict";
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DB_URL || 'development',
        searchPath: ['knex', 'public'],
        migrations: {
            directory: './src/data/migrations'
        },
        seeds: {
            directory: './src/data/seeds'
        }
    },
};
//# sourceMappingURL=knexfile.js.map