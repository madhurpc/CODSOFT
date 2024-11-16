// JavaScript for Calculator
let displayElement = document.getElementById('display');

function appendToDisplay(value) {
    if (displayElement.innerText === '0' && value !== '.') {
        displayElement.innerText = value; // Replace the default 0
    } else {
        displayElement.innerText += value; // Append value
    }
}

function clearDisplay() {
    displayElement.innerText = '0'; // Reset to default
}

function deleteLast() {
    let current = displayElement.innerText;
    if (current.length > 1) {
        displayElement.innerText = current.slice(0, -1); // Remove last character
    } else {
        displayElement.innerText = '0'; // Reset to default
    }
}

function calculateResult() {
    try {
        let result = eval(displayElement.innerText.replace('÷', '/').replace('×', '*'));
        displayElement.innerText = result;
    } catch (error) {
        displayElement.innerText = 'Error'; // Handle invalid input
    }
}
