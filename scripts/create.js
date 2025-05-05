document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const responseMsg = document.getElementById("responseMsg");
    
    if (name && email && message) {
      // Store form data in localStorage
      const formData = {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      };
      
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      
      // Show success message
      responseMsg.textContent = `Thank you, ${name}! Your message has been received.`;
      responseMsg.style.display = 'block';
      responseMsg.style.backgroundColor = '#27ae60'; // Success color
      
      // Reset form
      this.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        responseMsg.style.display = 'none';
      }, 5000);
    } else {
      // Show error message
      responseMsg.textContent = 'Please fill out all fields.';
      responseMsg.style.display = 'block';
      responseMsg.style.backgroundColor = '#e74c3c'; // Danger color
    }
  });
  
  // Initialize current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();