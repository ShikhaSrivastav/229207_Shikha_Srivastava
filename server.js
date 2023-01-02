var express=require("express");
var server=express();
var bodyparser=require("body-parser");
var path = require("path");

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended:true}));

server.use(express.static(path.join(__dirname,'public')));

server.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname+'/public/index.html'))
})

server.listen(5000);
console.log("server is listening on port 5000")