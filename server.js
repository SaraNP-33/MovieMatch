var express =require("express");

var PORT =process.env.PORT || 8080;

var app =express();

app.use(express.static("public"));

app.use(express.urlenconded({extended:true}));
app.use(express.json());


//Import routes

var router =require()