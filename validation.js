// index.js

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('rememberMe').checked;
  
    // Replace the following with your actual validation logic
    var validEmail = (username === 'simon.ombom22@students.dkut.ac.ke');
    var validPassword = (password === 'jumasimon');
    var validEmail = (username=='simonjuma465@gmail.com');
    var validPassword = (password == 'jakes1234');
  
    if (validEmail && validPassword) {
        // Redirect to index.html after successful validation
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    // Wait for the document to be fully loaded before attaching event handlers
  
    // Find the register link by its ID
    var registerLink = document.getElementById("registerLink");
  
    // Attach a click event listener to the register link
    registerLink.addEventListener("click", function() {
        // Redirect the user to the register page
        window.location.href = "signup.html"; // Replace with the actual path to your register page
    });
  });
  
  
  
  
  // signup.js
  
  function validateSignup() {
    var username = document.getElementById('signupUsername').value;
    var course = document.getElementById('signupcourse').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Perform validation (you can add more validation as needed)
  
    // Check if the user is already registered
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var isUserExists = existingUsers.some(function(user) {
        return user.username === username;
    });
  
    if (isUserExists) {
        alert('Username already exists. Please choose a different one.');
    } else {
        // If the user doesn't exist, save the new user
        var newUser = { username: username, password: password };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
  
        // Redirect to the dashboard page after successful signup
        window.location.href = 'index.html';
    }
  }
  
  
  
  
  
  
  
  // signup.js example code for client side validation of user input fields
  
  function validateSignup() {
    var username = document.getElementById('signupUsername').value;
    var course = document.getElementById('signupcourse').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Perform validation (you can add more validation as needed)
  
    // Check if the user is already registered
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var isUserExists = existingUsers.some(function(user) {
        return user.username === username;
    });
  
    if (isUserExists) {
        alert('Username already exists. Please choose a different one.');
    } else {
        // If the user doesn't exist, save the new user
        var newUser = { username: username, password: password };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        console.log("Redirecting to: " + window.location.href);
        // Redirect to the dashboard page after successful signup
        window.location.href = 'home.html';
    }
  }
  