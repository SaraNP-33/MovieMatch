var express = require("express");
var passport   = require('passport');
var session    = require('express-session')
var PORT = process.env.PORT || 8080;

var app = express();

require("dotenv").config();

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// For passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

//Import routes

var router = require("./routes/app-apiroutes.js");

app.use(router);

//import models for syncing

var db = require("./models");



// Routes
// =============================================================

require("./Routes/auth-route")(app,passport);

//load passport strategies
require("./config/passport.js")(passport, db.User);




//syncing the database to the server. 

db.sequelize.sync({force:true}).then(function(){

    app.listen(PORT, function(){
        console.log("Server Listening on: http://localhost:" + PORT);
    });

});
