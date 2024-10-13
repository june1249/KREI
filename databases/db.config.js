const mysql = require('mysql');


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
});


let isRunning = false;
// open the MySQL connection
function handleDisconnect() {
    connection.connect(error => {
        if (error) {
            console.log('error when connectiong to db: ', error);
            setTimeout(handleDisconnect, 2000);
        } else {
            console.log("Successfully connected to the database. : " + process.env.DATABASE);
            if (!isRunning) {
                checkQuery();
            }
        }
    });


    connection.on('error', function(err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            return handleDisconnect();
        } else {
            throw err;
        }
    });
}


function checkQuery() {
    console.log('checkQuery');
    setInterval(function() {
        isRunning = true;
        connection.query('SELECT 1');
    }, 5000);
}


handleDisconnect();


module.exports = connection;