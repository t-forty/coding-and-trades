const mariadb = require('mariadb');
const dotenv = require('dotenv').config();

const pool = mariadb.createPool({
     host: process.env.DB_HOST, 
     port: process.env.DB_PORT,
     user: process.env.DB_USER, 
     password: process.env.DB_PASS,
     database: process.env.DB_NAME
});

module.exports = Object.freeze({
    pool: pool
});
