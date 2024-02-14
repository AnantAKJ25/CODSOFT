const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = null;

document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText;
        display.innerText = currentInput;
    });
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.innerText = 0;
});

document.querySelectorAll('.button:not(.digit)').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'equals') {
            calculate();
            return;
        }
        operation = button.innerText;
        previousInput = currentInput;
        currentInput = '';
    });
});

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    display.innerText = currentInput;
}
