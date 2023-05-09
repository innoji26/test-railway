var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    var sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('Table created');
    });
});