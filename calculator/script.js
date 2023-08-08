let currentInput = "";
const display = document.getElementById("display");

// Function to update the display
function updateDisplay() {
  display.value = currentInput;
}

// Function to append user input to the current input
function appendInput(input) {
  currentInput += input;
  updateDisplay();
}

// Function to clear the display
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Function to calculate the result and display it
function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = Number.isFinite(result) ? result : "Error";
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}
