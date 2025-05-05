// Text Changer
document.getElementById("changeTextBtn").addEventListener("click", function() {
    const targetText = document.getElementById("targetText");
    targetText.textContent = targetText.textContent === "This is some text that can be changed." 
      ? "The text has been successfully changed!" 
      : "This is some text that can be changed.";
  });
  
  // Counter App
  let count = 0;
  const counterDisplay = document.getElementById("counter");
  
  document.getElementById("countBtn").addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
  });
  
  document.getElementById("resetBtn").addEventListener("click", function() {
    count = 0;
    counterDisplay.textContent = count;
  });
  
  // Local Storage Demo
  document.getElementById("saveToStorage").addEventListener("click", function() {
    const inputValue = document.getElementById("storageInput").value;
    if (inputValue) {
      localStorage.setItem("userText", inputValue);
      document.getElementById("storageDisplay").textContent = "Text saved to local storage!";
    } else {
      document.getElementById("storageDisplay").textContent = "Please enter some text first.";
    }
  });
  
  document.getElementById("getFromStorage").addEventListener("click", function() {
    const storedText = localStorage.getItem("userText");
    if (storedText) {
      document.getElementById("storageDisplay").textContent = `Stored text: "${storedText}"`;
    } else {
      document.getElementById("storageDisplay").textContent = "No text found in local storage.";
    }
  });
  
  // Initialize current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();