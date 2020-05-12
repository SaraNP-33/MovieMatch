$(document).ready(function(){
const firebaseConfig = {
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

// Create a variable to reference the database
var database = firebase.database();
$( "#t" ).click(function() {
  handleSignUp()
});
function handleSignUp() {
    var email = document.getElementById('#').value;
    var password = document.getElementById('#').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]
  }
});