var express =require("express");

var PORT =process.env.PORT || 8080;

var app =express();

require("dotenv").config();

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Import routes

var router =require("./controllers/app-apiroutes.js");

app.use(router);

//import models for syncing

var db= require("./models");


//syncing the database to the server. 

db.sequelize.sync().then(function(){

    app.listen(PORT, function(){
        console.log("Server Listening on: http://localhost:" + PORT);
    });

});
