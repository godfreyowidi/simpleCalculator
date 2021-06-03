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
  
alert(add(number1, number2));

$document.ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("add1").val());
    const number2 = parseInt($("add2").val());
    const result = add(number1 + number2);
    alert(result);
  });
});
