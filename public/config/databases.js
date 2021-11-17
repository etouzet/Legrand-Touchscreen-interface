let mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'legrandUser',
  password : 'legrandPassword',
  database : 'legrand',
  multipleStatements : true
});
connection.connect((err)=>{
  if(!err){
    console.log("Connected");
  }
  else{
    console.log("Connection failed");
  }
});
module.exports = connection;
 
