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

