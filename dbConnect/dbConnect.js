const mysql = require('mysql2');
const {DBHOST, DBPORT, DBUSER, DBPASSWORD, DBNAME} = process.env;

let dbConn = mysql.createConnection({
    host: DBHOST,
    port: DBPORT,
    user: DBUSER,
    password: DBPASSWORD,
    database: DBNAME
});

dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = dbConn;