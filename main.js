const calculator = {

    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        return 'Cannot divide by zero';
      }
      return a / b;
    }

}

function operate(operator, a, b) {
    switch (operator) {
      case '+':
        return calculator.add(a, b);
      case '-':
        return calculator.subtract(a, b);
      case '*':
        return calculator.multiply(a, b);
      case '/':
        return calculator.divide(a, b);
      default:
        return 'Invalid operator';
    }
  }

  const cal = document.querySelector('#calculator');
  const display = document.querySelector('#display');
  const buttons = cal.querySelectorAll('button');
  
  let displayValue = '0';
  
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      if (button.id >= '0' && button.id <= '9') {
        if (displayValue === '0') {
          displayValue = button.id;
        } else {
          displayValue += button.id;
        }
      } else if (button.id === 'clear') {
        displayValue = '0';
      }
  
      display.textContent = displayValue;
    });
  });
  


let firstNumber = null;
let operator = null;

// Event listener for number buttons
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    const display = document.querySelector('#display');
    display.textContent = display.textContent + button.textContent;
  });
});

// Event listener for operator buttons
document.querySelectorAll('.operator').forEach(button => {
    if (document.querySelector('#display').textContent !== '') {
        firstNumber = parseFloat(document.querySelector('#display').textContent);
        operator = button.textContent;
        document.querySelector('#display').textContent = '';
      } else {
        document.querySelector('#display').textContent = document.querySelector('#display').textContent + button.textContent;
      }
    });

// Event listener for equals button
document.querySelector('#equals').addEventListener('click', () => {
  const secondNumber = parseFloat(document.querySelector('#display').textContent);
  const display = document.querySelector('#display');
  display.textContent = operate(operator, firstNumber, secondNumber);
  firstNumber = null;
  operator = null;
});

// Event listener for clear button
document.querySelector('#clear').addEventListener('click', () => {
  firstNumber = null;
  operator = null;
  document.querySelector('#display').textContent = '';
});