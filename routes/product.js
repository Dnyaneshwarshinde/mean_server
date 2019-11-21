const mysql = require("mysql");
var express = require("express");

var productrouter =  express();

const connection = mysql.createConnection({
    host     : '192.168.43.73',
    user     : 'root',
    password : 'root',
    database : 'mydatabase',
    port:3307
  });

var myData =[];
connection.connect();

productrouter.get("/", function(request, response){
    connection.query("select * from product", function(err, result){
        if(err==null)
        {
           myData =  result;
           response.contentType("application/json");
           response.send(JSON.stringify(myData));
        }
        else
        {
           response.send("Something went wrong!");
        }
    });

});


module.exports = productrouter;
