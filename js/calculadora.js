let display = document.getElementById('display');
let currentInput = '';

function addToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput); // No recomendado, pero funciona
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}