const dotenv = require('dotenv')

dotenv.config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'development',
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './src/data/migrations'
    },
    seeds: {
      directory: './src/data/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'production',
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './src/data/migrations'
    },
    seeds: {
      directory: './src/data/seeds'
    }
  },
};


// export default KnexConfig