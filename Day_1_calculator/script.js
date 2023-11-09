
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

// display update
function calculate() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}
