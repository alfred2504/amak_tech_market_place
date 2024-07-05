// login.js

// Example: Login form validation and Firebase authentication
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
  
      // Implement Firebase login functionality
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          // Handle successful login
          alert('Login successful!');
          // Redirect or perform further actions
        })
        .catch(error => {
          // Handle errors
          alert(`Login error: ${error.message}`);
        });
    });
  });  