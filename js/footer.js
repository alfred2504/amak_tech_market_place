// footer.js

// Example: Social media icons click events
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icons img');
  
    socialIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const platform = icon.alt;
        alert(`Clicked on ${platform} icon!`);
      });
    });
  
    // Example: Newsletter sign-up form submission
    const newsletterForm = document.querySelector('.newsletter form');
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      alert(`Subscribed with email: ${email}`);
      newsletterForm.reset();
    });
  });  