var express =require("express");
var path =require("path");
var axios =require("axios");

var router =express.Router();

var db=require("../models");

//get to homepage -where signin and sign up are

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"))

});

//get to the users page
router.get("/api/user", function(req,res){
db.MoviesUserVotes.findAll({
    where:{id: req.user.id},
    include:[db.Movies],
    limit: 3   
}
    
).then(function(results){
    
    res.json(results);
    
});
    
});
router.get("/api/movies/:title", function(req,res){
  db.Movies.findOne({
    where:{title:req.params.title},
    include:[db.MoviesUserVotes]
  }).then(function(results){
      if(results.lenght===0){
          //query the axios 

      }else{
          res.json(results);
      }
  })
   

});

//use this route to add this  movie to the user account
router.post("/api/movies/", function(req,res){
   
   db.Movies.findOrCreate(
       { where:{title:req.body.title},
       defaults:req.body,
       
   }).then(function(results){
       console.log(results)
    //    db.MovieUserVotes.create({
    //        UserId: req.user.id,
    //        MovieId:results.id
    //    })
    res.sendStatus(200);
   }).catch(function(err){
       res.json(err);
   })
    




});

//use this route to change a rate in movie
router.put("/api/user/:vote", function(req,res){
//sequelize.update function
//users can vote on movies in their user pages and change the default value to 
//whatever vote the user gives it
//res.sendFile
});

// use this route to delete 
router.delete("/api/user/movies/:id", function(req,res){
//sequelize.destroy function{}
// so that we can delete the movie from the user page of user
//QUESTION -how do i only delete from the userpage and not the database
//possible answer: code in a way that targets only the association between user
//and movie?
//res.sendFile
});

module.exports=router; 