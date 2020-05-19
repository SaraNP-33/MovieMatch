var passport = require("../config/passport");
var path = require("path");
var db = require("../models");
module.exports = function (app, passport) {
    // 

   app.get("/",function(req,res){
       res.send("signin_signup")
   })
   
    app.get("/logout", function (req, res) {
        console.log("Log Out Route Hit");
        req.session.destroy(function (err) {
            if (err) console.log(err)
                res.send('logout successful');
        });
    });


    app.post('/signup/newuser', passport.authenticate('local-signup'), function (req, res) {
        console.log(req.user);
        res.send('homepage');
    });

        
    app.post("/signin/user",passport.authenticate('local-signin'),function(req,res) {
        
         console.log(req.user);
         res.send('login-success');
    });
    
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');

    }
}