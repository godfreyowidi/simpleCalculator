function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}    
  // let result = add(2, 3);
  
  // alert(result);
  
  let number1 = parseInt(prompt("Enter a number:"));
  let number2 = parseInt(prompt("Enter another number"));
  
  let result = divide(number1, number2);
  alert(result);
