$(document).ready(function() {
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAyfHQC6HnFxnurzR-Z-FZlD76j-q6_hmA",
    authDomain: "project2-group6.firebaseapp.com",
    databaseURL: "https://project2-group6.firebaseio.com",
    projectId: "project2-group6",
    storageBucket: "project2-group6.appspot.com",
    messagingSenderId: "861468397116",
    appId: "1:861468397116:web:5302a7bd7586a49a777d39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

// Create a variable to reference the database
// var database = firebase.database();
$( "#signUp" ).on("click",function(event) {
  event.preventDefault();
  var email = $("#inputEmail").val().trim();
  var password = $("#inputPassword").val().trim();
  // if (email.length < 4) {
  //   alert('Please enter an email address.');
  //   return;
  // }
  // if (password.length < 4) {
  //   alert('Please enter a password.');
  //   return;
  // }
  // Create user with email and password.
  console.log("working")
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    // logs user after its created
    // var user1 = user;
    database.push(user)

    console.log(user)
  }).catch(function(error) {
    
  
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
   
    // if (errorCode == 'auth/weak-password') {
    //   alert('The password is too weak.');
    // } else {
    //   alert(errorMessage);
    // }
    console.log(error);
    
  });
  // handleSignUp()
});

});

// //Function To Create An Account
// function handleSignUp() {

    
  // }
