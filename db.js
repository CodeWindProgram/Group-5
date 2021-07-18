// File for connecting to postgreSQL database
const Pool = require("pg").Pool;

// Connecting to Database
const pool = new Pool({
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    port: process.env.port
});
// Exporting the pool Postgresql connection
module.exports = pool;