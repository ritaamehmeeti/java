
document.addEventListener("DOMContentLoaded", function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guessInput = document.getElementById("guessInput");
    let feedback = document.getElementById("feedback");
    let attemptsDisplay = document.getElementById("attempts");
    let submitButton = document.getElementById("submitButton");
  
    function checkGuess() {
      let userGuess = parseInt(guessInput.value);
      attempts++;
  
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        feedback.style.color = "red";
      } else if (userGuess < randomNumber) {
        let difference = randomNumber - userGuess;
        feedback.textContent = `Too low! You're ${difference} away from the correct number. Try again.`;
        feedback.style.color = "orange";
      } else if (userGuess > randomNumber) {
        let difference = userGuess - randomNumber;
        feedback.textContent = `Too high! You're ${difference} away from the correct number. Try again.`;
        feedback.style.color = "orange";
      } else {
        feedback.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
        feedback.style.color = "green";
      }
  
      attemptsDisplay.textContent = `Attempts: ${attempts}`;
      guessInput.value = "";
      guessInput.focus();
    }
  
    
    submitButton.addEventListener("click", checkGuess);
  });
  