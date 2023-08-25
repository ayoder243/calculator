let num1 = undefined;
let num2 = undefined;
let operator = undefined;

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, o, y) {
  switch(o) {
    case "+":
      return add(x, y);
      break;
    case "-":
      return subtract(x, y);
      break;
    case "*":
      multiply(x, y);
      return break;
    case "/":
      return divide(x, y);
      break;
    case default:
      return "Error: not an operator"
      break;
  }
}