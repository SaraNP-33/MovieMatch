$(document).ready(function () {

  // Your web app's Firebase configuration
  
   
  var firebaseConfig = {
    apiKey: "AIzaSyCGgIX4WY0WHwubFmEPBaVlPjp9IZ9ITv8",
    authDomain: "project-2-group6.firebaseapp.com",
    databaseURL: "https://project-2-group6.firebaseio.com",
    projectId: "project-2-group6",
    storageBucket: "project-2-group6.appspot.com",
    messagingSenderId: "459339776615",
    appId: "1:459339776615:web:8f8be425a0d2e487250ac2",
    measurementId: "G-JEGQGPFDYE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Create a variable to reference the database
  // var database = firebase.database();

  //Sign Up Button on Click
  $("#signUp").on("click", function (event) {
    event.preventDefault();

    //Grab the email and password from the HTML Form and stored them as a variable
    var email = $("#inputEmail").val().trim();
    var password = $("#inputPassword").val().trim();

    //[email,password TEST]
    //console.log(email, password);

    //If emails length is less than 4 then alert user 'Enter Email' and return
    if (email.length < 4) {
      alert("Please Enter An Email Address.");
      return;
    }

    //If passwords length is less than 4 then alert user 'Enter Password' and return
    if (password.length < 4) {
      alert("Please Enter A Password.");
      return;
    }


    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
      // logs user after its created
      // var user1 = user;
      // database.push(user)

      console.log(user)
    }).catch(function (error) {


      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      //If WeakPassword occurs then alert user 'weak password'
      if (errorCode === "20") {
        alert("The password is too weak.");

      }
      //Else Alert User Of The errorMessage
      else {
        alert(errorMessage);

      }
      //Log Full Error 
      console.log(error);

    });

  });

  //Sign In Button on Click
  $("#signIn").on("click", function (event) {
    event.preventDefault();

    //Grab the email and password from the HTML Form and stored them as a variable
    var email = $("#inputEmail").val().trim();
    var password = $("#inputPassword").val().trim();

    //[email, password TEST]
    // console.log(email, password);

    //Firebase Auth() login call
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {

      //[user TEST]
      // console.log(user)

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      //If InvaildEmail or InvaildPassword error occurs then alert user
      if (errorCode === "6" || "7") {
        alert("Invailed Password Or Email.");

      } 
      //Else alert errorMessage to user 
      else {
        alert(errorMessage);

      }
      //Log Full Error
      console.log(error);

    });
  });

});