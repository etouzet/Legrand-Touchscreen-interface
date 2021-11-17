let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'legrandUser',
  password : 'legrandPassword',
  database : 'legrand'
});
 
connection.connect();
 
module.exports=connection