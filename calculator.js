let result = document.getElementById('result');
let operators = ['+', '-', '*', '/'];
let currentNumber = '';
let previousNumber = '';
let operator = '';

document.querySelectorAll('button[type="button"]').forEach(button => {
  button.addEventListener('click', () => {
    let value = button.value;

    if (value === '=') {
      calculate();
    } else if (operators.includes(value)) {
      operator = value;
      previousNumber = currentNumber;
      currentNumber = '';
    } else if (value === '.') {
      if (!currentNumber.includes('.')) {
        currentNumber += '.';
      }
    } else {
      currentNumber += value;
    }

    result.value = currentNumber;
  });
});

function calculate() {
  let resultValue = 0;

  switch (operator) {
    case '+':
      resultValue = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      resultValue = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      resultValue = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      resultValue = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }

  result.value = resultValue;
  currentNumber = resultValue.toString();
  previousNumber = '';
  operator = '';
}
