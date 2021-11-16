let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Theo2002!',
  database : 'donnees_limousin'
});
 
connection.connect();
 
module.exports=connection
 
