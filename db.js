// File for connecting to postgreSQL database
const Pool = require("pg").Pool;

// Database Crendentials

const UserName = process.env.user;
const DBPassword = process.env.password;
const DB = process.env.database;
const Host = process.env.host;
const Port = process.env.port;

// Connecting to DB
const pool = new Pool({
    user: UserName,
    password: DBPassword,
    database: DB,
    host: Host,
    port: Port
});

module.exports = pool;