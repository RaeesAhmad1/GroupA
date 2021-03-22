// var mysql = require('mysql');

// var con = mysql.createConnection({
//  port :8080,  
//     host: "localhost",
//   user: "root",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var mongoclient= require('mongodb').MongoClient;
var url='mongodb://localhost:27017/cms_db';
mongoclient.connect(url,function(err,db){
console.log('DB Connected');
db.close();
});