// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config.js';  // Import the auth instance from firebase-config.js

// Function to handle signup
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      alert("Signup successful!");
    })
    .catch((error) => {
      // Handle signup errors
      alert(error.message);
    });
}

// Function to handle login
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Logged in successfully
      alert("Login successful!");
    })
    .catch((error) => {
      // Handle login errors
      alert(error.message);
    });
}

// Event listeners for the signup and login forms
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  signup();
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});