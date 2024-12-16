// Get the display elements
const expressionBox = document.getElementById('expression-box');
const resultBox = document.getElementById('result-box');

// Get the button elements
const numButtons = document.querySelectorAll('.pad-unit.num');
const operatorButtons = document.querySelectorAll('.pad-unit.operator');
const equalButton = document.querySelector('.pad-unit.operator[data-value="="]');
const clearButton = document.querySelector('.pad-unit.blue-color[data-value="C"]');

// Define the calculator logic
let currentExpression = '';
let currentResult = '';

// Handle number button clicks
numButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentExpression += button.textContent;
    expressionBox.textContent = currentExpression;
  });
});

// Handle operator button clicks
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
    currentExpression += ` ${operator} `;
    expressionBox.textContent = currentExpression;
  });
});

// Handle equal button click
equalButton.addEventListener('click', () => {
  currentResult = eval(currentExpression);
  resultBox.textContent = currentResult;
  currentExpression = '';
});

// Handle clear button click
clearButton.addEventListener('click', () => {
  currentExpression = '';
  currentResult = '';
  expressionBox.textContent = '';
  resultBox.textContent = '';
});

