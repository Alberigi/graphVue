require('dotenv').config();

const config = {
  host: process.env.APP_DB_HOST,
  port: process.env.APP_DB_PORT,
  client: 'mysql',
  connection: {
    database: process.env.APP_DB_NAME,
    user: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

module.exports = require('knex')(config)