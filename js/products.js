// products.js

// Example: Add to cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product button');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Implement your add to cart logic here
        alert('Added to cart!');
      });
    });
  });  