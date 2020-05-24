var express =require("express");
var path =require("path");
var axios =require("axios");
var fs =require("fs");

var router =express.Router();

var db=require("../models");

//get to homepage -where signin and sign up are

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../views/index.html"))

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
      if(results.length===0){
    var query="http://www.omdbapi.com/?t=&apikey=trilogy";
    console.log(query);
    axios.get(query).then(function(res){
        console.log("****************The results we want*****************");
        console.log("Movie Title:", res.data.Title);
        console.log("Year Released:", res.data.Year);
        console.log("Movie Genre:", res.data.Genre);
        console.log("Movie Plot", res.data.Plot);
        console.log("Movie Poster", res.data.Poster);
        
    })
    .catch(function(err){
        if(err.res){
            console.log("-----------DATA-------------");
            console.log(err.res.data);
            console.log("--------------STATUS---------");
            console.log(err.res.status);
            console.log("-------------headers---------");
            console.log(err.res.headers); 
            
        }else if (err.req){
            console.log(err.req);
            
        }else{
            console.log("Error", err.message);
        }
    })

      }else{
          res.json(results);
      }
  });
   

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
   });
    




});

//use this route to change a rate in movie
router.put("/api/user/:votes", function(req,res){
//sequelize.update function
db.MoviesUserVotes.update({
    where:{votes:req.params.votes},
    include:[db.movies,db.User]
}).then(function(results){
    res.json(results);
})
//users can vote on movies in their user pages and change the default value to 
//whatever vote the user gives it

});

// use this route to delete 
router.delete("/api/user/movies/:id", function(req,res){
//sequelize.destroy function{}
db.Movies.destroy({
    where:{id:req.params.id},
    include:[db.MoviesUserVotes]
});
// so that we can delete the movie from the user page of user
//QUESTION -how do i only delete from the userpage and not the database
//possible answer: code in a way that targets only the association between user
//and movie?
//res.sendFile
});

module.exports=router; 