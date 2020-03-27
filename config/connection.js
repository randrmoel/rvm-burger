var mysql = require("mysql");
var conn;

if (process.env.JAWSDB_URL){
    conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Emerald1',
        database: 'burgers_db'
    });
};

conn.connect((err)=>{
    if (err) {
        console.log('Error Connection: ' + err.stack);
        return;
}
    console.log("Connected as ID: " + conn.threadId);
});
module.exports = conn;