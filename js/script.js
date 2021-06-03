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
  
  // let number1 = parseInt(prompt("Enter a number:"));
  // let number2 = parseInt(prompt("Enter another number"));
  
//alert(add(number1, number2));

$(document).ready(function(){
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#number1").val());
    const number2 = parseInt($("#number2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  })
})