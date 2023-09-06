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
      return multiply(x, y);
      break;
    case "/":
      if(num2 == 0) {
        return "no divide by 0 you caveperson"
      }
      return divide(x, y);
      break;
    default:
      return "Error: not an operator"
      break;
  }
}

function populateDisplay(x) {
  const displayBox = document.querySelector('#display');
  displayBox.textContent = x;
}

function buttonClicks() {
  buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      if(e.target.className == "num" && num1 == undefined) {
        populateDisplay(e.target.id);
        num1 = Number(e.target.id);
      }
      else if(e.target.className == "num" && num1 != undefined) {
        populateDisplay(e.target.id);
        num2 = Number(e.target.id);
      }
      else if(e.target.className == "operator" && num2 == undefined) {
        populateDisplay(e.target.id);
        operator = e.target.id;
      }
      else if(e.target.className == "operator" && num2 != undefined) {
        populateDisplay(e.target.id);
        num1 = operate(num1, operator, num2);
        operator = e.target.id;
        num2 = undefined;
      }
      else if(e.target.className == "equals") {
        if(num1 != undefined && operator != undefined && num2 != undefined) {
          populateDisplay(operate(num1, operator, num2));
        }
        else {
          populateDisplay("ERROR")
        }
      }
      else if(e.target.className == "clear") {
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        populateDisplay("")
      }
    })
  });
}

buttonClicks();