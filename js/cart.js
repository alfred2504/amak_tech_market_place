// cart.js

// Example: Update cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
  
    cartItems.forEach(item => {
      const quantityInput = item.querySelector('input[type="number"]');
      const updateButton = item.querySelector('button.update-btn');
      const removeButton = item.querySelector('button.remove-btn');
  
      updateButton.addEventListener('click', function() {
        const newQuantity = quantityInput.value;
        // Update cart logic here
        alert(`Updated quantity to ${newQuantity}`);
      });
  
      removeButton.addEventListener('click', function() {
        // Remove item from cart logic here
        alert('Item removed from cart!');
      });
    });
  });  