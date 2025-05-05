// Change Text Example
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("targetText").textContent = "Text has been changed!";
  });

  // Contact Form
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      document.getElementById("responseMsg").textContent =
        `Thank you, ${name}! Your message has been received.`;
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });

  // Counter App
  let count = 0;
  document.getElementById("countBtn").addEventListener("click", function() {
    count++;
    document.getElementById("counter").textContent = count;
  });

  // Local Storage
  document.getElementById("saveNameBtn").addEventListener("click", function() {
    localStorage.setItem("username", "Kutyla");
    const stored = localStorage.getItem("username");
    document.getElementById("storedNameDisplay").textContent = `Stored name: ${stored}`;
  });